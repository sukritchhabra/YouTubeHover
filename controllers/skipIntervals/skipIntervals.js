/* jshint loopfunc: true */
/* globals YouTubeHoverSettings, YouTubeHoverPlayer, YouTubeHover_playerExists */

(function ($) {
    var skipIntervals_timeoutID;
    var skipIntervals_clearTimeoutArr = [];
    var skippingFinished_timeoutID;

    // When iframe is added.
    $('body').on('youtubeHover_playerReady', function () {
        /**
         * Earlier the check was outside the event bindings. Moving this in because YouTubeHoverSettings
         * can change between the two different iframe additions (Only on the options page.)
         * This functionality is needed for the example on the options page.
         */
        if (YouTubeHoverSettings.skipIntervals.enabled === "enabled") {
            // If user selected "Still", set volume to 0 and pause video to emulate still images.
            if (YouTubeHoverSettings.skipIntervals.format === "still") {
                YouTubeHoverPlayer.setVolume('0');

                setTimeout(function () {
                    YouTubeHoverPlayer.pauseVideo();
                }, 1000);
            }

            // Set playback quality from user settings.
            var pbQuality = YouTubeHoverSettings.skipIntervals.quality;
            YouTubeHoverPlayer.setPlaybackQuality(pbQuality);

            var increment = parseInt(YouTubeHoverSettings.skipIntervals.increment);
            var incrementFactor = parseInt(YouTubeHoverSettings.skipIntervals.incrementFactor);

            for (var i = 0; i <= (YouTubeHoverPlayer.getDuration() + increment); i = i + increment) {
                (function(index) {
                    skipIntervals_timeoutID = setTimeout(function(){YouTubeHoverPlayer.seekTo(index);}, incrementFactor * index);
                    skipIntervals_clearTimeoutArr.push(skipIntervals_timeoutID);
                })(i);
            }

            /**
             * Handling case where skips ends before mouseleave.
             * In case this happens, Iframe needs to be removed and the image restored.
             *
             * Instead of creating a remove function here, using an event on 'body' to
             * let content.js know the video has ended. Using event as a way to pass messages between the two scripts.
             */
            skippingFinished_timeoutID = setTimeout(function () {
                if (YouTubeHover_playerExists) {
                    $('body').trigger('finished-skipping'); // Trigger an event to have content.js call removeIframe()
                    clearTimeoutArray();
                }
            }, ( ( ( YouTubeHoverPlayer.getDuration() ) / increment ) * (increment * incrementFactor) ));
        }
    });

    /**
     * When iframe is removed.
     *
     * Was going to create a custom event from default.js when player is destroyed in the
     * body.on(youtubeHover_iframeRemoved) callback [like youtubeHover_playerReady], but,
     * since we dont need YouTubeHoverPlayer for this, therefore decided to leave this as is for now.
     */
    $('body').on('youtubeHover_iframeRemoved', function () {
        if (YouTubeHoverSettings.skipIntervals.enabled === "enabled") {
            clearTimeout(skippingFinished_timeoutID);
            clearTimeoutArray();
        }
    });

    /**
     * A function to clear the timeout ID's collected during skipping through the video.
     */
    function clearTimeoutArray () {
        skipIntervals_clearTimeoutArr.forEach(function(timer) {
            clearTimeout(timer);
        });
        skipIntervals_clearTimeoutArr = [];
    }
})(window.jQuery);