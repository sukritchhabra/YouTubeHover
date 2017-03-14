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
        restoreOptionTrigger: optionTrigger.restore
    };
})(window.jQuery);

/**
 * Default restore function.
 * @param  {[JSON]} settings [Settings object]
 */
function toolbar_restoreSettings (settings) {
    toolbar.restoreOptionTrigger(settings);
}
