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
