/**
 * Default function that binds default events for the volume module.
 */
function volume () {
    // Initiate Volume Slider
    $('#volume .slider').slider({
        min: 0,
        max: 100,
        step: 5,
        animate: "fast",
        change: function(event, slider) {
            volume_updateVolume(slider.value, $(this).parent());
        }
    });

    $('body').on('click', '#volume .sub-option .fa-volume-off', function(event) {
        volume_checkMute();
    });
}

/**
 * Function that restores the settings for the volume module.
 * @param  {[JSON]} settings [An object containing the settings recieved from chrome]
 */
function volume_restoreSettings (settings) {
    $('#volume .slider').slider('value', settings.volume.vol);
    $('#volume .saveValue').val(settings.volume.vol);
    if (settings.volume.vol == 0) {
        $('#volume .sub-option .fa-volume-off').addClass('muted');
    }
}

/**
 * Function that is called when a change occurs in the volume slider
 * to update appropriate input fields.
 * @param  {[Integer]} vol  [Value selected by the user in the slider]
 * @param  {[DOM Element]} parentDiv [The parent div of the slider]
 */
function volume_updateVolume (vol, parentDiv) {
    if (vol == 0) {
        $('#volume .sub-option .fa-volume-off').addClass('muted');
    } else {
        $('#volume .muted').removeClass('muted');
    }
    parentDiv.find('.saveValue').val(vol).trigger('change');
}

/**
 * Function that checks the state of the mute button on click and act accordingly to
 * either mute or unmute the video.
 */
function volume_checkMute () {
    if ($('#volume .sub-option .fa-volume-off').hasClass('muted')) {
        var $muteButton = $('#volume .sub-option .fa-volume-off');

        $('#volume .slider').slider('value', 100);
        $('#volume .saveValue').val(100);
        $muteButton.removeClass('muted');
    } else {
        var $muteButton = $('#volume .sub-option .fa-volume-off');
        $('#volume .slider').slider('value', 0);
        $('#volume .saveValue').val(0);
        $muteButton.addClass('muted');
    }
}