/**
 * Default function that binds default events for the delayOnHover module.
 * @return
 */
function delayOnHover () {
    // Initiate Slider
    $('#delayOnHover .slider').slider({
        min: 0,
        max: 10,
        step: 0.5,
        animate: "fast",
        change: function(event, slider) {
            delayOnHover_updateDelayValue(slider.value, $(this).parent());
        }
    });
}

function delayOnHover_updateDelayValue (delayVal, parentDiv) {
        parentDiv.find('input').val(delayVal);
}


function delayOnHover_restoreSettings (settings) {
    $('#delayOnHover .slider').slider('value', settings.hoverDelay);
    $('#delayOnHover input').val(settings.hoverDelay);
}