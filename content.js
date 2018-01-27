console.log('Hello Developer');

var YouTubeHoverSettings = {}; // Global YouTubeHoverSettings object. Is available to all controllers.
chrome.storage.sync.get(defaultSettings, function (chromeSettings) {
    console.log(chromeSettings);
    $.each(chromeSettings, function (key, value) {
        YouTubeHoverSettings[key] = value;
    })

    if (location.protocol === "chrome-extension:" && location.pathname === "/options/options.html") {
        Object.seal(YouTubeHoverSettings);
    } else {
        Object.freeze(YouTubeHoverSettings); // Making object immutable.
        if ( parseInt(YouTubeHoverSettings.toolbar.notifications) ) checkChromeAndNotify();
    }
});

var timeoutID; // Global timeoutID to check if user exited before the delay was completed

$(document).ready(function($) {
    $("body").on({
        mouseenter: function () {
            var hoverState = true;
            var $videoThumb = $(this);

            var linkSelector = 'a.yt-simple-endpoint, a.yt-uix-sessionlink, a.yt-uix-sessionlink';
            var link = $videoThumb.find(linkSelector)[0].href;

            var id = getVideoID(link);

            var thumbnailSelector = '.ytd-thumbnail img, .yt-thumb.video-thumb img, .yt-uix-simple-thumb-wrap img';
            var thumbnail = $videoThumb.find(thumbnailSelector);

            $(this).find('#mouseover-overlay, .mouseover-play').hide();

            addIFrame($videoThumb, thumbnail, id);
            timeoutID = setTimeout(function() {
                thumbnail.css('display', 'none');
                $('#youtubeHover_frame').show();
                $('body').trigger('youtubeHover_delayFinished');
            }, YouTubeHoverSettings.delayOnHover.hoverDelay * 1000);
        },
        mouseleave: function () {
            clearTimeout(timeoutID);
            $(this).find('#mouseover-overlay, .mouseover-play').show();

            var thumbnailSelector = '.ytd-thumbnail img, .yt-thumb.video-thumb img, .yt-uix-simple-thumb-wrap img';
            removeIFrame($(this), thumbnailSelector);
            console.log('exited');
        }
    }, ".yt-shelf-grid-item, \
        .yt-lockup-tile .yt-lockup-thumbnail, .expanded-shelf-content-item .thumb-wrapper, \
        .video-list-item, \
        ytd-thumbnail.ytd-grid-video-renderer, \
        ytd-thumbnail.ytd-video-renderer, \
        ytd-thumbnail.ytd-newspaper-mini-video-renderer, \
        ytd-thumbnail.ytd-compact-video-renderer"
    );

    /**
     * If skips ended before mouseleave. [ Also refer to skipIntervals.js ]
     *
     * Without this being handled, the Iframe would stay there with a new video suggestion, but after this case
     * is handled, the Iframe is removed, the image is restored and the state is reverted to
     * as it was before the user hovered over the thumbnail.
     */
    $('body').on('finished-skipping', function(event) {
        clearTimeout(timeoutID);

        var thumbnailSelector = '.ytd-thumbnail img, .yt-thumb.video-thumb img, .yt-uix-simple-thumb-wrap img';
        removeIFrame($(this), thumbnailSelector);
    });



    /**
     * Parses a YouTube video URl and returns its ID
     * @param  {[String]} url [The URL of the YouTube Video]
     * @return {[String]}     [The ID of the YouTube Video]
     */
    function getVideoID (url) {
        var splitString = url.split("watch\?v=");
        var beginTime = 0;
        var id;
        if ( splitString[1].indexOf("&t") >= 0 ) {
            var secondSplit = splitString[1].split("&t=");
            id = secondSplit[0];
            beginTime = parseInt(secondSplit[1]);
        } else {
            id = splitString[1];
        }
        return id;
    }

    /**
     * Adds the Video iframe to imageContainer
     * @param {[Object]} $videoContainer [The complete container of the img and the links]
     * @param {[Object]} img             [The image as a jQuery Object]
     * @param {[String]} vID             [ID of the Video]
     */
    function addIFrame ($videoContainer, $img, vID) {
        var width = $img[0].width + "px";
        var height = $img[0].height + "px";

        var iframeHTML = '';
        if (YouTubeHoverSettings.player.clickAction == "video") {
            iframeHTML = '<div id="youtubeHover_frameOverlay" style="position:absolute; z-index: 999; width: ' + width + '; height: ' + height +';"></div>';
        }


        iframeHTML = iframeHTML +
                     '<iframe id="youtubeHover_frame" src="https://www.youtube.com/embed/' + vID +
                     '?controls=0&autoplay=1&showinfo=0&rel=0&start=0&enablejsapi=1" frameborder="0"' +
                     'style="display: none; width: ' + width + '; height: ' + height + '; position: relative; box-sizing: border-box;"' +
                     'data-id="' + vID + '"></iframe>';

        $img.parent().append(iframeHTML);
        checkParentCSS('add', $img);
        // $img.css('display', 'none');
        $('body').trigger('youtubeHover_iframeAdded');
    }

    /**
     * Remove the iframe when mouse exists the container.
     * @param  {[Object]} $videoContainer [The complete container of the img and the links]
     * @param  {[String]} imgSelector     [The jquery selector to find the image with the $videoContainer]
     */
    function removeIFrame ($videoContainer, imgSelector) {
        $videoContainer.find(imgSelector).parent().find('iframe').remove();
        $videoContainer.find(imgSelector).parent().find('#youtubeHover_frameOverlay').remove();
        checkParentCSS('remove', $videoContainer.find(imgSelector));
        $videoContainer.find(imgSelector).css('display', 'inline');
        $('body').trigger('youtubeHover_iframeRemoved');
    }

    /**
     * Checks the CSS if the parent of the img to see if it has position values -100px.
     * If it does then it sets them to 0 when called from the addIFrame function and resets
     * them to -100px when called from the removeIFrame function.
     *
     * @param  {[String]} from    [Describes Which function called this function]
     * @param  {[jquery]} $imgObj [the ImageObject]
     */
    function checkParentCSS (from, $imgObj) {
        if (from === 'add') {
            var imgParentCSS = $imgObj.parent().css(['position', 'top', 'bottom']);
            if (imgParentCSS.top === '-100px' && imgParentCSS.bottom === '-100px') {
                $imgObj.parent().css({
                    top: '0',
                    bottom: '0'
                });
                $imgObj.parent().data('youtubeHover_changedCSS', '1');
            }
        } else if (from === 'remove') {
            if ($imgObj.parent().data('youtubeHover_changedCSS') === '1') {
                $imgObj.parent().css({
                    top: '-100px',
                    bottom: '-100px'
                });
                $imgObj.parent().data('youtubeHover_changedCSS', '0');
            }
        }
    }

    /**
     * Use of this function is deprecated!
     *
     * This function was used before using IIFE's to scope individual controller files.
     * After using IIFE we do not need default controller functions to bind events as the event bindings are
     * inserted in the IIFE [instead of default controller functions].
     * This allows for individual controller variables and functions to be scoped to their IIFE and
     * not be accessible by other controllers.
     *
     * Function to setup individual controllers.
     * @param  {[Array]} cList [List of controllers]
     *
     */
    function setupControllers (cList) {
        console.log(cList);
        $.each(cList, function(index, val) {
             var controllerFunction = "controller_" + val;
             eval(controllerFunction)();
        });
    }
});

/**
 * Function that get the chrome version and logs it to the console.
 * Default least value is 57.
 *
 * @param {[Integer]} [customVersion]   [A custom version number that overides the least expected version]
 * @param {[Boolean]} [shouldLog]       [A value that decides whether result is logged to console.]
 *
 * @return {[Boolean]} Return true if the current version is greater than versionLeast. Else false.
 */
function getChromeVersion (shouldLog, customVersion) {
    var versionLeast = 57; // Least expected version.
    if (typeof customVersion == 'number') versionLeast = customVersion;

    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/);

    var version = raw[0].split('/')[1],
        vMajor = parseInt(version.split('.')[0]);

    var vColor = vMajor >= versionLeast ? 'green' : '#c75555';
    if (shouldLog == true) console.log('%cChrome: %c' + version, 'color: black;', 'color: ' + vColor + ';');

    return (vMajor >= versionLeast);
}

/**
 * Function that checks the version of chrome and shows notification if chrome needs to be updated.
 * @return
 */
function checkChromeAndNotify() {
    if ( !getChromeVersion(false) ) {
    chrome.runtime.sendMessage({chromeNeedsUpdate: true});
}

}
