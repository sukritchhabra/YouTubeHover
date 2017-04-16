/* exported delayOnHover_restoreSettings */

var delayOnHoverModule =
(function ($) {
    var hoverDelay = {
        init: function () {
            // Initiate Slider
            $('#delayOnHover .slider').slider({
                min: 0,
                max: 10,
                step: 0.25,
                animate: "fast",
                change: function(event, slider) {
                    hoverDelay.updateValue(slider.value, $(this).parent());
                }
            });
        },

        updateValue: function (delayVal, parentDiv) {
            parentDiv.find('.saveValue').val(delayVal).trigger('change');
        },

        restore: function (settings) {
            hoverDelay.init();
            $('#delayOnHover .slider').slider('value', settings.delayOnHover.hoverDelay);
            $('#delayOnHover .saveValue').val(settings.delayOnHover.hoverDelay);
        }
    };

    return {
        restoreHoverDelay: hoverDelay.restore
    };

})(window.jQuery);

function delayOnHover_restoreSettings (settings) {
    delayOnHoverModule.restoreHoverDelay(settings);
}

/* exported player_restoreSettings */

var playerModule =
(function ($) {
    var volume = {
        init: function () {
            $('body').on('click', '#volume .fa-volume-off', function() {
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
            if (vol === 0) {
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
            var $muteButton;
            if ($('#volume .fa-volume-off').hasClass('muted')) {
                $muteButton = $('#volume .fa-volume-off');

                $('#volume .slider').slider('value', 100);
                $('#volume .saveValue').val(100);
                $muteButton.removeClass('muted');
            } else {
                $muteButton = $('#volume .fa-volume-off');
                $('#volume .slider').slider('value', 0);
                $('#volume .saveValue').val(0);
                $muteButton.addClass('muted');
            }
        },

        restore: function (settings) {
            volume.init();
            $('#volume .slider').slider('value', settings.player.volume);
            $('#volume .saveValue').val(settings.player.volume);
            if (parseInt(settings.player.volume) === 0) {
                $('#volume .fa-volume-off').addClass('muted');
            }
        }
    };

    var clickAction = {
        init: function () {
            $('body').on('change', '#player #clickAction input[name="clickAction"]', function() {
                var inputField = $(this);
                var subOption = $(this).closest('.sub-option');
                subOption.find('.saveValue').val(inputField.val());
            });
        },

        restore: function (settings) {
            clickAction.init();
            // Load ClickAction radio button value
            var clickActionRadioSelector = '#player #clickAction input[value="' + settings.player.clickAction + '"]';
            $(clickActionRadioSelector).prop("checked", true);
            $('#player #clickAction .saveValue').val(settings.player.clickAction);
        }
    };

    return {
        restoreVolume: volume.restore,
        restoreClickAction: clickAction.restore
    };
})(window.jQuery);

/**
 * Function that restores the settings for the player module.
 * @param  {[JSON]} settings [An object containing the settings recieved from chrome]
 */
function player_restoreSettings (settings) {
    playerModule.restoreVolume(settings);
    playerModule.restoreClickAction(settings);
}

/* exported skipIntervals_restoreSettings */

var skipIntervalsModule =
(function ($) {
    var enable = {
        init: function () {
            $('body').on('change', '#skipIntervals #enable input[type="checkbox"]', function() {
                var inputField = $(this);
                var subOption = $(this).closest('.sub-option');

                if (inputField.prop("checked")) {
                    subOption.find('.saveValue').val("enabled").trigger('change');

                    // Enabling settings change if module is enabled.
                    subOption.siblings('.disableSettings').removeClass('disableSettings').addClass('enableSettings');
                } else {
                    subOption.find('.saveValue').val("disabled").trigger('change');

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
            if (settings.skipIntervals.enabled === "enabled") {
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
        init: function () {
            $('body').on('change', '#skipIntervals #format input[name="format"]', function() {
                var inputField = $(this);
                var subOption = $(this).closest('.sub-option');
                subOption.find('.saveValue').val(inputField.val()).trigger('change');
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
        init: function () {
            $('body').on('change', '#skipIntervals #quality input[name="quality"]', function() {
                var inputField = $(this);
                var subOption = $(this).closest('.sub-option');
                subOption.find('.saveValue').val(inputField.val()).trigger('change');
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
        init: function () {
            $('body').on('change', '#skipIntervals #increments input[name="increments"]', function() {
                var inputField = $(this);
                var subOption = $(this).closest('.sub-option');
                subOption.find('.saveValue').val(inputField.val()).trigger('change');

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
        init: function () {
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
        init: function () {
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
    };
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

/* globals YouTubeHoverSettings */
/* exported toolbar_restoreSettings */

var toolbar = (function ($) {
    var collapseAll = {
        init: function () {
            $('body').on('click', '#toolbar .collapse-all', function() {
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
            });
        }
    };
    collapseAll.init();

    var notifications = {
        init: function () {
            $('body').on('click', '#toolbar .notifications-wrapper .state', function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).siblings('.saveValue').val(0).trigger('change');
                } else {
                    $(this).addClass('active');
                    $(this).siblings('.saveValue').val(1).trigger('change');
                }
            });
        },

        restore: function (settings) {
            notifications.init();
            var savedVal = parseInt(settings.toolbar.notifications);

            if (savedVal === 1) {
                $("#toolbar .notifications-wrapper .state").addClass('active');
            }
            $('#toolbar .notifications-wrapper .saveValue').val(savedVal);
        }
    };

    var optionTrigger = {
        init: function () {
            $('body').on('click', '#toolbar .option-trigger', function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).siblings('.saveValue').val(0).trigger('change');
                } else {
                    $(this).addClass('active');
                    $(this).siblings('.saveValue').val(1).trigger('change');
                }
            });

            // Using hover to open options if hover trigger is enabled
            var inProgress = 0;
            var mouseenterInProgress = 0;
            $("body").on({
                mouseenter: function () {
                    if (YouTubeHoverSettings.toolbar.optionHoverTrigger === "1" && !mouseenterInProgress) {
                        mouseenterInProgress = 1;
                        inProgress = 1;
                        $(this).find('.wrapper').show(200, function () {
                            mouseenterInProgress = 0;
                            inProgress = 0;
                        });

                        var chevronGlyph = $(this).find('h4 span.fa');
                        if (chevronGlyph.hasClass('fa-chevron-down')) {
                            chevronGlyph.removeClass('fa-chevron-down').addClass('fa-chevron-up');
                        }
                    }
                },
                mouseleave: function () {
                    var $section = $(this);
                    if (YouTubeHoverSettings.toolbar.optionHoverTrigger === "1" && !inProgress) {
                        inProgress = 1;
                        $(this).find('.wrapper').hide(200, function () {
                            inProgress = 0;
                        });

                        var chevronGlyph = $(this).find('h4 span.fa');
                        if (chevronGlyph.hasClass('fa-chevron-up')) {
                            chevronGlyph.removeClass('fa-chevron-up').addClass('fa-chevron-down');
                        }
                    } else if (inProgress) {
                        setTimeout(function () {
                            $section.trigger('mouseleave');
                        }, 50);
                    }
                }
            }, "section.option");
        },

        restore: function (settings) {
            optionTrigger.init();
            var savedVal = parseInt(settings.toolbar.optionHoverTrigger);

            if (savedVal === 1) {
                $("#toolbar .option-trigger").addClass('active');
            }
            $('#toolbar .option-trigger-wrapper .saveValue').val(savedVal);
        }
    };

    return {
        restoreNotifications: notifications.restore,
        restoreOptionTrigger: optionTrigger.restore
    };
})(window.jQuery);

/**
 * Default restore function.
 * @param  {[JSON]} settings [Settings object]
 */
function toolbar_restoreSettings (settings) {
    toolbar.restoreNotifications(settings);
    toolbar.restoreOptionTrigger(settings);
}
