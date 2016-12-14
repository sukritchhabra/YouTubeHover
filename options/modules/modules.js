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
    $('#delayOnHover .slider').slider('value', settings.delayOnHover.hoverDelay);
    $('#delayOnHover input').val(settings.delayOnHover.hoverDelay);
}
function skipIntervals () {
    $('body').on('change', '#skipIntervals #enable input[type="checkbox"]', function(event) {
        var inputField = $(this);
        // console.log(inputField);
        console.log('checked state:')
        console.log(inputField.prop("checked"));
        var subOption = $(this).closest('.sub-option');
        // console.log(subOption);

        if (inputField.prop("checked")) {
            subOption.find('.saveValue').val("enabled");
        } else {
            subOption.find('.saveValue').val("disabled");
        }
    });

    $('body').on('change', '#skipIntervals #format input[name="format"]', function(event) {
        var inputField = $(this);
        var subOption = $(this).closest('.sub-option');
        subOption.find('.saveValue').val(inputField.val());
    });

    $('body').on('change', '#skipIntervals #quality input[name="quality"]', function(event) {
        var inputField = $(this);
        var subOption = $(this).closest('.sub-option');
        subOption.find('.saveValue').val(inputField.val());
    });

    $('body').on('change', '#skipIntervals #increments input[name="increments"]', function(event) {
        var inputField = $(this);
        var subOption = $(this).closest('.sub-option');
        subOption.find('.saveValue').val(inputField.val());

        // Emulating change event on slider by changing values. Using.trigger("change") was not working.
        var tempSliderValue = $("#skipIntervals #increment-delay .slider").slider("option", "value");
        $("#skipIntervals #increment-delay .slider").slider("option", "value", 0);
        $("#skipIntervals #increment-delay .slider").slider("option", "value", tempSliderValue);
    });

    // Initiate Increment Delay Slider
    $('#skipIntervals #increment-delay .slider').slider({
        min: 1,
        max: 10,
        step: 1,
        animate: "fast",
        change: function(event, slider) {
            skipIntervals_updateIncrementDelayValue(slider.value, $(this).parent());
        }
    });
}

/**
 * Function that restore the settings for the skip intervals module.
 * @param  {[JSON]} settings [An object containing the settings recieved from chrome]
 */
function skipIntervals_restoreSettings (settings) {
    console.log(settings);
    console.log(settings.skipIntervals.enabled);
    var enabledSetting; // A variable to store the boolean value of the "enabled" setting
    if (settings.skipIntervals.enabled == "enabled") {
        enabledSetting = true;
    } else {
        enabledSetting = false;
    }

    // Load Enable checkbox value
    $('#skipIntervals #enable input[type="checkbox"]').prop("checked", enabledSetting);
    $('#skipIntervals #enable .saveValue').val(settings.skipIntervals.enabled);

    // Load Format radio button value
    var formatRadioSelector = '#skipIntervals #format input[value="' + settings.skipIntervals.format + '"]';
    $(formatRadioSelector).prop("checked", true);
    $('#skipIntervals #format .saveValue').val(settings.skipIntervals.format);

    // Load Quality radio button value
    var qualityRadioSelector = '#skipIntervals #quality input[value="' + settings.skipIntervals.quality + '"]';
    $(qualityRadioSelector).prop("checked", true);
    $('#skipIntervals #quality .saveValue').val(settings.skipIntervals.quality);

    // Load Increments value
    var incrementRadioSelector = '#skipIntervals #increments input[value="' + settings.skipIntervals.increment + '"]';
    $(incrementRadioSelector).prop("checked", true);
    $('#skipIntervals #increments .saveValue').val(settings.skipIntervals.increment);

    // Load Increments Delay value
    var sliderVal = (settings.skipIntervals.increment * settings.skipIntervals.incrementFactor) / 1000;
    $("#skipIntervals #increment-delay .slider").slider("option", "value", sliderVal);
    $('#skipIntervals #increment-delay .saveValue').val(settings.skipIntervals.incrementFactor);
}

/**
 * Function that is called when a change occurs in the increment delay slider
 * to update appropriate input fields.
 * @param  {[Integer]} delayVal  [Value selected by the user in the slider]
 * @param  {[DOM Element]} parentDiv [The parent div of the slider]
 */
function skipIntervals_updateIncrementDelayValue (delayVal, parentDiv) {
        var incrementVal = parseInt($('#skipIntervals #increments .saveValue').val());
        var totalDelay = parseInt(delayVal) * 1000;
        var incrementFactor = Math.floor(totalDelay / incrementVal);

        parentDiv.find('.increment-delay-value').val(delayVal);
        parentDiv.find('.saveValue').val(incrementFactor);
}