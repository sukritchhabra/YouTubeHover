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
        $('#skipIntervals #increment-delay input[name="increment-delay"]:checked').trigger('change');
    });

    $('body').on('change', '#skipIntervals #increment-delay input[name="increment-delay"]', function(event) {
        var inputField = $(this);
        var subOption = $(this).closest('.sub-option');

        var incrementVal = parseInt($('#skipIntervals #increments .saveValue').val());
        var totalDelay = parseInt(inputField.val()) * 1000;
        var incrementFactor = Math.floor(totalDelay / incrementVal);

        subOption.find('.saveValue').val(incrementFactor);
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
    var inputVal = (settings.skipIntervals.increment * settings.skipIntervals.incrementFactor) / 1000;
    var incrementDelayRadioSelector = '#skipIntervals #increment-delay input[value="' + inputVal + '"]';
    $(incrementDelayRadioSelector).prop("checked", true);
    $('#skipIntervals #increment-delay .saveValue').val(settings.skipIntervals.incrementFactor);
}