/**
 * Default toolbar function
 */
function toolbar () {
    $('body').on('click', '#toolbar .collapse-all', function(event) {
        toolbar_collapseAll();
    });
}

/**
 * Default restore function.
 * @param  {[JSON]} settings [Settings object]
 */
function toolbar_restoreSettings (settings) {}

function toolbar_collapseAll () {
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