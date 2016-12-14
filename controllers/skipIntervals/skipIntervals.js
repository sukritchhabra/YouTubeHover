// skipIntervals.js
var skipIntervals_player;
var skipIntervals_timeoutID;
var skipIntervals_playerExists = false;
var skipIntervals_clearTimeoutArr = [];

/**
 * [Default controller function that binds events for the controller.]
 */
function controller_skipIntervals () {
    if (YouTubeHoverSettings.skipIntervals.enabled == "enabled") {
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
}

/**
 * [Default function that is called when the player is ready.]
 * @param  {[Event]} event [An object containing event details.]
 */
function skipIntervals_onPlayerReady(event) {
    // If user selected "Still", set volume to 0 and pause video to emulate still images.
    if (YouTubeHoverSettings.skipIntervals.format == "still") {
        skipIntervals_player.setVolume('0');

        setTimeout(function () {
            skipIntervals_player.pauseVideo();
        }, 1000);
    }

    // Set playback quality from user settings.
    var pbQuality = YouTubeHoverSettings.skipIntervals.quality;
    skipIntervals_player.setPlaybackQuality(pbQuality);

    var increment = parseInt(YouTubeHoverSettings.skipIntervals.increment);
    var incrementFactor = parseInt(YouTubeHoverSettings.skipIntervals.incrementFactor);

    for (var i = 0; i <= (skipIntervals_player.getDuration() + increment); i = i + increment) {
        (function(index) {
            skipIntervals_timeoutID = setTimeout(function(){skipIntervals_player.seekTo(index);}, incrementFactor * index);
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