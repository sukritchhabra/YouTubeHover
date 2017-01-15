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
}

/**
 * Function that restores the settings for the volume module.
 * @param  {[JSON]} settings [An object containing the settings recieved from chrome]
 */
function volume_restoreSettings (settings) {
    $('#volume .slider').slider('value', settings.volume.vol);
    $('#volume .saveValue').val(settings.volume.vol);
}

/**
 * Function that is called when a change occurs in the volume slider
 * to update appropriate input fields.
 * @param  {[Integer]} vol  [Value selected by the user in the slider]
 * @param  {[DOM Element]} parentDiv [The parent div of the slider]
 */
function volume_updateVolume (vol, parentDiv) {
    parentDiv.find('.saveValue').val(vol).trigger('change');
}