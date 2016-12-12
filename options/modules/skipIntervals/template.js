function skipIntervals () {
    // console.log('in skipIntervals');
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
}

function skipIntervals_restoreSettings (settings) {
    console.log(settings);
    console.log(settings.skipIntervals.enabled);
    var enabledSetting;
    if (settings.skipIntervals.enabled == "enabled") {
        enabledSetting = true;
    } else {
        enabledSetting = false;
    }
    $('#skipIntervals #enable input[type="checkbox"]').prop("checked", enabledSetting);
    $('#skipIntervals #enable .saveValue').val(settings.skipIntervals.enabled);

    var formatRadioSelector = '#skipIntervals #format input[value="' + settings.skipIntervals.format + '"]';
    $(formatRadioSelector).prop("checked", true);
    $('#skipIntervals #format .saveValue').val(settings.skipIntervals.format);

    var qualityRadioSelector = '#skipIntervals #quality input[value="' + settings.skipIntervals.quality + '"]';
    $(qualityRadioSelector).prop("checked", true);
    $('#skipIntervals #quality .saveValue').val(settings.skipIntervals.quality);
}