// default.js
var YouTubeHoverPlayer;
var YouTubeHover_playerExists = false;


/**
 * [Default controller function that binds events for the controller.]
 */
function controller_default () {
    // When iframe is added.
    $('body').on('youtubeHover_iframeAdded', function () {
        // Setup YouTubeHoverPlayer
        YouTubeHoverPlayer = new YT.Player('youtubeHover_frame', {
            events: {
              'onReady': YouTubeHover_onPlayerReady,
              'onStateChange': YouTubeHover_onPlayerStateChange
            }
        });

        YouTubeHover_playerExists = true;
    });

    // When iframe is removed.
    $('body').on('youtubeHover_iframeRemoved', function () {
        // Abscence of this condition was causing error logs if user moved the mouse out before iframe was added.
        if (YouTubeHover_playerExists) {
            YouTubeHoverPlayer.destroy();
        }

        YouTubeHover_playerExists = false;
    });
}

/**
 * [Default function that is called when the player is ready.]
 * @param  {[Event]} event [An object containing event details.]
 */
function YouTubeHover_onPlayerReady(event) {
    $('body').trigger('youtubeHover_playerReady');

    // Set volume of player.
    var playerVolume = YouTubeHoverSettings.volume.vol;
    YouTubeHoverPlayer.setVolume(playerVolume);
}

/**
 * [Function that detects state changes on the player and can then take action upon the player.]
 * @param  {[Event]} event [An object containing event details.]
 * @return {[type]}        [description]
 */
function YouTubeHover_onPlayerStateChange(event) {
    console.log('State Changed');
}