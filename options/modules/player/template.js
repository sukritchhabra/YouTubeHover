var playerModule =
(function ($) {
    var volume = {
        init: function (argument) {
            $('body').on('click', '#volume .fa-volume-off', function(event) {
                volume.checkMute();
            });

            // Initiate Volume Slider
            $('#volume .slider').slider({
                min: 0,
                max: 100,
                step: 5,
                animate: "fast",
                change: function(event, slider) {
                    volume.updateVolume(slider.value, $(this).parent());
                }
            });
        },

        /**
         * Function that is called when a change occurs in the volume slider
         * to update appropriate input fields.
         * @param  {[Integer]} vol  [Value selected by the user in the slider]
         * @param  {[DOM Element]} parentDiv [The parent div of the slider]
         */
        updateVolume: function (vol, parentDiv) {
            if (vol == 0) {
                $('#volume .fa-volume-off').addClass('muted');
            } else {
                $('#volume .muted').removeClass('muted');
            }
            parentDiv.find('.saveValue').val(vol).trigger('change');
        },

        /**
         * Function that checks the state of the mute button on click and act accordingly to
         * either mute or unmute the video.
         */
        checkMute: function () {
            if ($('#volume .fa-volume-off').hasClass('muted')) {
                var $muteButton = $('#volume .fa-volume-off');

                $('#volume .slider').slider('value', 100);
                $('#volume .saveValue').val(100);
                $muteButton.removeClass('muted');
            } else {
                var $muteButton = $('#volume .fa-volume-off');
                $('#volume .slider').slider('value', 0);
                $('#volume .saveValue').val(0);
                $muteButton.addClass('muted');
            }
        },

        restore: function (settings) {
            volume.init();
            $('#volume .slider').slider('value', settings.player.volume);
            $('#volume .saveValue').val(settings.player.volume);
            if (settings.player.volume == 0) {
                $('#volume .fa-volume-off').addClass('muted');
            }
        }
    };

    return {
        restoreVolume: volume.restore
    }
})(window.jQuery);

/**
 * Function that restores the settings for the player module.
 * @param  {[JSON]} settings [An object containing the settings recieved from chrome]
 */
function player_restoreSettings (settings) {
    playerModule.restoreVolume(settings);
}
