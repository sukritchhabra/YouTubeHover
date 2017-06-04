/* globals YouTubeHoverSettings, YT, console */
/* exported YouTubeHoverPlayer */

var YouTubeHoverPlayer; // Global player object available to all controllers.
var YouTubeHover_playerExists = false;

(function ($) {
    // When iframe is added.
    $('body').on('youtubeHover_iframeAdded', function () {
        console.log('iframe added');
        // Setup YouTubeHoverPlayer
        YouTubeHoverPlayer = new YT.Player('youtubeHover_frame', {
            events: {
              'onReady': YouTubeHover_onPlayerReady,
              'onStateChange': YouTubeHover_onPlayerStateChange
            }
        });


        YouTubeHover_playerExists = true;
    });

    $('body').on('timeoutfinished', function () {
        console.log('timeout occurred');
        YouTubeHoverPlayer.playVideo();
    });

    // When iframe is removed.
    $('body').on('youtubeHover_iframeRemoved', function () {
        // Abscence of this condition was causing error logs if user moved the mouse out before iframe was added.
        if (YouTubeHover_playerExists) {
            YouTubeHoverPlayer.destroy();
        }

        YouTubeHover_playerExists = false;
    });


    /**
     * [Default function that is called when the player is ready.]
     * @param  {[Event]} event [An object containing event details.]
     */
    function YouTubeHover_onPlayerReady() {
        console.log('player ready');
        YouTubeHoverPlayer.pauseVideo();
        $('body').trigger('youtubeHover_playerReady');
        console.log('triggered player ready');

        // Set volume of player.
        var playerVolume = YouTubeHoverSettings.player.volume;
        YouTubeHoverPlayer.setVolume(playerVolume);
    }

    /**
     * [Function that detects state changes on the player and can then take action upon the player.]
     * @param  {[Event]} event [An object containing event details.]
     * @return {[type]}        [description]
     */
    function YouTubeHover_onPlayerStateChange() {
        console.log('State Changed');
    }
})(window.jQuery);