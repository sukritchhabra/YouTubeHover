// skipIntervals.js
var skipIntervals_player;
var skipIntervals_timeoutID;
var skipIntervals_playerExists = false;
var skipIntervals_clearTimeoutArr = [];

/**
 * [Default controller function that binds events for the controller.]
 */
function controller_skipIntervals () {
    // When iframe is added.
    $('body').on('youtubeHover_iframeAdded', function () {
        skipIntervals_playerExists = true;

        skipIntervals_player = new YT.Player('youtubeHover_frame', {
            events: {
              'onReady': skipIntervals_onPlayerReady,
              'onStateChange': skipIntervals_onPlayerStateChange
            }
        });
    });

    // When iframe is removed.
    $('body').on('youtubeHover_iframeRemoved', function () {
        skipIntervals_playerExists = false;
        skipIntervals_player.destroy();

        skipIntervals_clearTimeoutArr.forEach(function(timer) {
            clearTimeout(timer);
        });
    });
}

/**
 * [Default function that is called when the player is ready.]
 * @param  {[Event]} event [An object containing event details.]
 */
function skipIntervals_onPlayerReady(event) {
    skipIntervals_player.setVolume('0');

    setTimeout(function () {
        skipIntervals_player.pauseVideo();
    }, 1000);

    for (var i = 0; i <= skipIntervals_player.getDuration(); i = i + 5) {
        (function(index) {
            skipIntervals_timeoutID = setTimeout(function(){skipIntervals_player.seekTo(index);}, 120 * index);
            skipIntervals_clearTimeoutArr.push(skipIntervals_timeoutID);
        })(i);
    }
}

/**
 * [Function that detect state changes on the player and can then take action upon the player.]
 * @param  {[Event]} event [An object containing event details.]
 * @return {[type]}       [description]
 */
function skipIntervals_onPlayerStateChange(event) {
    console.log('State Changed');
}
// playVideo.js

function controller_playVideo () {
    console.log('in playVideo');
}