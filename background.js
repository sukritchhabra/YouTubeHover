var localSettings = {};

var updateNotification = {
    notificationId: 'chromeUpdateWarning',

    init: function () {
        updateNotification.listeners();
    },

    /** All listeners for this notification */
    listeners: function () {
        /** Listener that listens to clicks on the notification */
        chrome.notifications.onClicked.addListener(function (notifId, btnIdx) {
            if (notifId == 'chromeUpdateWarning') {
                updateNotification.openUpdatePage();
                hideNotification(notifId);
            }
        });

        /** Listener that listens to clicks on buttons in notification */
        chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
            if (notifId == 'chromeUpdateWarning' && btnIdx == 0) {
                updateNotification.openUpdatePage();
                hideNotification(notifId);
            } else if (notifId == 'chromeUpdateWarning' && btnIdx == 1) {
                hideNotification(notifId);
                updateNotification.setNotifDelayDate();
            }
        });
    },

    /** Function that creates the notification */
    createNotification: function () {
        chrome.notifications.create('chromeUpdateWarning', {
            type: 'basic',
            iconUrl: 'imgs/touch/icon_256.png',
            title: 'Update Chrome!',
            message: 'Please update Chrome or you may experience issues with YouTubeHover.',
            buttons: [{
                title: "Yes, Take me there!"
            }, {
                title: "Later."
            }],
            requireInteraction: true
        }, function(notificationId) {
            setTimeout(function () {
                hideNotification(notificationId)
            }, 5000);
        });
    },

    /** Function that opens the Chrome Help Page. */
    openUpdatePage: function () {
        chrome.tabs.create({
            url: 'chrome://help/'
        });
    },

    /**
     * Function to call the createNotification() function if the previous notification display dates are diff.
     * @param  {[Boolean]} notificationDisplayedToday [True if the last time user clicked "Later" was today.]
     */
    checkAndCreateNotif: function (notificationDisplayedToday) {
        if (!notificationDisplayedToday) {
            this.createNotification();
        }
    },

    /** Function to set notification delay date in local storage */
    setNotifDelayDate: function () {
        var d = new Date();
        localSettings["notifDelayDate"] = d.getDate();
        chrome.storage.local.set(localSettings, function () {
            console.log('Updated delay date.')
        });

    },

    /** Function to check notification delay date from local storage */
    checkDelayDate: function () {
        var d = new Date();
        var ret;
        chrome.storage.local.get('notifDelayDate', function (response) {
            if (response.notifDelayDate === undefined) {
                ret = false;
            } else {
                ret = d.getDate() == response.notifDelayDate;
            }
            updateNotification.checkAndCreateNotif(ret);
        });
    }
};

/** Listener to recieve message and reply to them. */
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    // console.log(request);
    if (request.chromeNeedsUpdate) {
        updateNotification.checkDelayDate();
    }
});

/** Listener listens to click on the brower action button and opens the options page. */
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
        url: 'chrome-extension://' + chrome.runtime.id + '/options/options.html'
    });
});
initNotifications();

/** Function that hides a notification. */
function hideNotification(notificationId) {
    chrome.notifications.clear(notificationId);
}

/** Function that initializes notifications */
function initNotifications () {
    updateNotification.init();
}
