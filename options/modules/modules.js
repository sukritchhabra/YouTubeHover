/**
 * Default function that binds default events for the delayOnHover module.
 * @return
 */
function delayOnHover () {
    // Initiate Slider
    $('#delayOnHover .slider').slider({
        min: 0,
        max: 10,
        step: 0.25,
        animate: "fast",
        change: function(event, slider) {
            delayOnHover_updateDelayValue(slider.value, $(this).parent());
        }
    });
}

function delayOnHover_updateDelayValue (delayVal, parentDiv) {
        parentDiv.find('.saveValue').val(delayVal).trigger('change');
}


function delayOnHover_restoreSettings (settings) {
    $('#delayOnHover .slider').slider('value', settings.delayOnHover.hoverDelay);
    $('#delayOnHover .saveValue').val(settings.delayOnHover.hoverDelay);
}
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
 * Default function that binds default events for the volume module.
 */
function player () {
    console.log('in player');
}

/**
 * Function that restores the settings for the player module.
 * @param  {[JSON]} settings [An object containing the settings recieved from chrome]
 */
function player_restoreSettings (settings) {
    playerModule.restoreVolume(settings);
}

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

function skipIntervals () {
    console.log('in skip intervals');
}

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

var toolbarModule =
(function ($) {
    var collapseAll = {
        init: function (argument) {
            $('body').on('click', '#toolbar .collapse-all', function(event) {
                collapseAll.collapse();
            });
        },

        collapse: function () {
            var $wrappers = $('section.option .wrapper:visible'); // Find non-hidden (displayed) wrappers
            var $options = $wrappers.closest('section.option'); // Get the closest section.option parent of the hidden wrappers
            $wrappers.hide('fast'); // Hide wrappers

            var chevronGlyphs = $options.find('h4 span.fa'); // Get chevron glyphs corrosponding to the displayed wrappers.
            $.each(chevronGlyphs, function (index, chevronGlyph) {
                if ($(chevronGlyph).hasClass('fa-chevron-down')) {
                    $(chevronGlyph).removeClass('fa-chevron-down').addClass('fa-chevron-up');
                } else {
                    $(chevronGlyph).removeClass('fa-chevron-up').addClass('fa-chevron-down');
                }
            })
        }
    };
    collapseAll.init();
})(window.jQuery);

/**
 * Default toolbar function
 */
function toolbar () {
    console.log('in toolbar');
}

/**
 * Default restore function.
 * @param  {[JSON]} settings [Settings object]
 */
function toolbar_restoreSettings (settings) {}