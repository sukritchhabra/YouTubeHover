var skipIntervalsModule =
(function ($) {
    var enable = {
        init: function (argument) {
            $('body').on('change', '#skipIntervals #enable input[type="checkbox"]', function(event) {
                var inputField = $(this);
                var subOption = $(this).closest('.sub-option');

                if (inputField.prop("checked")) {
                    subOption.find('.saveValue').val("enabled");

                    // Enabling settings change if module is enabled.
                    subOption.siblings('.disableSettings').removeClass('disableSettings').addClass('enableSettings');
                } else {
                    subOption.find('.saveValue').val("disabled");

                    // Disabling settings change if module is disabled.
                    subOption.siblings('.enableSettings').removeClass('enableSettings').addClass('disableSettings');
                }
            });

            // Prevent changes to settings if settings are disabled.
            $('body').on('click', '.disableSettings', function(event) {
                event.preventDefault();
            });
        },

        restore: function (settings) {
            enable.init();
            var enabledSettingVal; // A variable to store the boolean value of the "enabled" setting
            if (settings.skipIntervals.enabled == "enabled") {
                enabledSettingVal = true;
                $('#skipIntervals .addEnableSettingState').removeClass('addEnableSettingState').addClass('enableSettings');
            } else {
                enabledSettingVal = false;
                $('#skipIntervals .addEnableSettingState').removeClass('addEnableSettingState').addClass('disableSettings');
            }

            // Load Enable checkbox value
            $('#skipIntervals #enable input[type="checkbox"]').prop("checked", enabledSettingVal);
            $('#skipIntervals #enable .saveValue').val(settings.skipIntervals.enabled);
        }
    };

    var format = {
        init: function (argument) {
            $('body').on('change', '#skipIntervals #format input[name="format"]', function(event) {
                var inputField = $(this);
                var subOption = $(this).closest('.sub-option');
                subOption.find('.saveValue').val(inputField.val());
            });
        },

        restore: function (settings) {
            format.init();
            // Load Format radio button value
            var formatRadioSelector = '#skipIntervals #format input[value="' + settings.skipIntervals.format + '"]';
            $(formatRadioSelector).prop("checked", true);
            $('#skipIntervals #format .saveValue').val(settings.skipIntervals.format);
        }
    };

    var quality = {
        init: function (argument) {
            $('body').on('change', '#skipIntervals #quality input[name="quality"]', function(event) {
                var inputField = $(this);
                var subOption = $(this).closest('.sub-option');
                subOption.find('.saveValue').val(inputField.val());
            });
        },

        restore: function (settings) {
            quality.init();
            // Load Quality radio button value
            var qualityRadioSelector = '#skipIntervals #quality input[value="' + settings.skipIntervals.quality + '"]';
            $(qualityRadioSelector).prop("checked", true);
            $('#skipIntervals #quality .saveValue').val(settings.skipIntervals.quality);
        }
    };

    var increments = {
        init: function (argument) {
            $('body').on('change', '#skipIntervals #increments input[name="increments"]', function(event) {
                var inputField = $(this);
                var subOption = $(this).closest('.sub-option');
                subOption.find('.saveValue').val(inputField.val());

                // Emulating change event on slider by changing values. Using.trigger("change") was not working.
                var tempSliderValue = $("#skipIntervals #increment-delay .slider").slider("option", "value");
                $("#skipIntervals #increment-delay .slider").slider("option", "value", 0);
                $("#skipIntervals #increment-delay .slider").slider("option", "value", tempSliderValue);
            });
        },

        restore: function (settings) {
            increments.init();
            // Load Increments value
            var incrementRadioSelector = '#skipIntervals #increments input[value="' + settings.skipIntervals.increment + '"]';
            $(incrementRadioSelector).prop("checked", true);
            $('#skipIntervals #increments .saveValue').val(settings.skipIntervals.increment);
        }
    };

    var incrementDelay = {
        init: function (argument) {
            // Initiate Increment Delay Slider
            $('#skipIntervals #increment-delay .slider').slider({
                min: 0.5,
                max: 10,
                step: 0.5,
                animate: "fast",
                change: function(event, slider) {
                    incrementDelay.updateValue(slider.value, $(this).parent());
                }
            });
        },

        /**
         * Function that is called when a change occurs in the increment delay slider
         * to update appropriate input fields.
         * @param  {[Integer]} delayVal  [Value selected by the user in the slider]
         * @param  {[DOM Element]} parentDiv [The parent div of the slider]
         */
        updateValue: function (delayVal, parentDiv) {
            var incrementVal = parseInt($('#skipIntervals #increments .saveValue').val());
            var totalDelay = delayVal * 1000;
            var incrementFactor = Math.floor(totalDelay / incrementVal);

            parentDiv.find('.increment-delay-value').val(delayVal);
            parentDiv.find('.saveValue').val(incrementFactor).trigger('change');
        },

        restore: function (settings) {
            incrementDelay.init();
            // Load Increments Delay value
            var sliderVal = (settings.skipIntervals.increment * settings.skipIntervals.incrementFactor) / 1000;
            $("#skipIntervals #increment-delay .slider").slider("option", "value", sliderVal);
            $('#skipIntervals #increment-delay .saveValue').val(settings.skipIntervals.incrementFactor);
        }
    };

    var optimal = {
        init: function (argument) {
            $('#load-optimal-settings').on('click', function () {
                var $button = $(this);
                optimal.loadOptimalSettings("tiny", 20, 75);

                $button.text('Loaded!');
                $button.addClass('notify-load');
                setTimeout(function() {
                    $button.text('Load Optimal Settings');
                    $button.removeClass('notify-load');
                }, 1000);
            });
        },

        /**
         * Loads optimal setting if a user is facing trouble with choosing settings in accordance with their connection.
         * @param  {[String]}  optimalQuality
         * @param  {[Integer]} optimalIncrement
         * @param  {[Integer]} optimalFactor
         */
        loadOptimalSettings: function (optimalQuality, optimalIncrement, optimalFactor) {
            // Load Quality radio button value
            var qualityRadioSelector = '#skipIntervals #quality input[value="' + optimalQuality + '"]';
            $(qualityRadioSelector).prop("checked", true);
            $('#skipIntervals #quality .saveValue').val(optimalQuality);

            // Load Increments value
            var incrementRadioSelector = '#skipIntervals #increments input[value="' + optimalIncrement + '"]';
            $(incrementRadioSelector).prop("checked", true);
            $('#skipIntervals #increments .saveValue').val(optimalIncrement);

            // Load Increments Delay value
            var sliderVal = (optimalIncrement * optimalFactor) / 1000;
            $("#skipIntervals #increment-delay .slider").slider("option", "value", sliderVal);
            $('#skipIntervals #increment-delay .saveValue').val(optimalFactor);
        }
    };

    return {
        restoreEnable: enable.restore,
        restoreFormat: format.restore,
        restoreQuality: quality.restore,
        restoreIncrements: increments.restore,
        restoreIncrementDelay: incrementDelay.restore,
        optimalInit: optimal.init
    }
})(window.jQuery);


/**
 * Function that restore the settings for the skip intervals module.
 * @param  {[JSON]} settings [An object containing the settings recieved from chrome]
 */
function skipIntervals_restoreSettings (settings) {
    skipIntervalsModule.restoreEnable(settings);
    skipIntervalsModule.restoreFormat(settings);
    skipIntervalsModule.restoreQuality(settings);
    skipIntervalsModule.restoreIncrements(settings);
    skipIntervalsModule.restoreIncrementDelay(settings);
    skipIntervalsModule.optimalInit();
}
