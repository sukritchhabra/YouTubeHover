$(document).ready(function($) {
    loadOptions();
    restoreOptions();
    loadExampleVideoMarkup();

    // Initializing question tooltips.
    $('.sub-option-tooltip.question').tooltip({
        template:  '<div class="tooltip" role="tooltip">\
                        <div class="tooltip-arrow question"></div>\
                        <div class="tooltip-inner question"></div>\
                    </div>'
    });

    // Initializing question tooltips.
    $('.sub-option-tooltip.rule').tooltip({
        template:  '<div class="tooltip" role="tooltip">\
                        <div class="tooltip-arrow rule"></div>\
                        <div class="tooltip-inner rule"></div>\
                    </div>'
    });

    // Initializing connection tooltips.
    $('.sub-option-tooltip.connection').tooltip({
        template:  '<div class="tooltip" role="tooltip">\
                        <div class="tooltip-arrow connection"></div>\
                        <div class="tooltip-inner connection"></div>\
                    </div>'
    });

    // Detecting click on the save button
    $('body').on('click', '#save', function(event) {
        saveOptions('save');
    });

    // Detect Enter press and save options.
    $('body').on('keyup', function(event) {
        if (event.keyCode === 13) {
            saveOptions('save');
        }
    });


    $('body').on('click', 'section.option', function(event) {
        $(this).find('.wrapper').slideToggle(500);
        var chevronGlyph = $(this).find('h4 span.fa');
        if (chevronGlyph.hasClass('fa-chevron-down')) {
            chevronGlyph.removeClass('fa-chevron-down').addClass('fa-chevron-up');
        } else {
            chevronGlyph.removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
    });

    // Clicking on section.option .wrapper doesn't propogate to section.option
    $('body').on('click', 'section.option .wrapper', function(event) {
        event.stopPropagation();
    });

    // Manually triggering change on .saveValues for effect to take pale onn options page for example preview.
    $('body').on('change', '.option .sub-option input:not(.saveValue)', function (event) {
        var subOption = $(this).closest('.sub-option');
        subOption.find('.saveValue').trigger('change');
    })

    // Detecting change on .saveValues (which is manually triggered) and calling saveOptions
    // to temporarily save for example.
    $('body').on('change', '.saveValue', function(event) {
        saveOptions('change');
    });

    /**
     * Save the options from the options page.
     * @param  {[String]} eventTrigger [A string that denotes why saveOptions was called, to save setting or store change]
     */
    function saveOptions(eventTrigger) {
        if (eventTrigger == 'save') {
            var valObj = {};
            var valuesToSave = $('.saveValue');

            $.each(valuesToSave, function(index, tag) {
                /**
                 * Earlier approach
                 *
                 * console.log('--------------------------');
                 * console.log(valObj);
                 * var propertyName = $(tag).data('property');
                 * console.log(propertyName)
                 * var moduleName = $(tag).closest('section')[0].id;
                 * console.log(moduleName);
                 * console.log(typeof moduleName);
                 * console.log($(tag).val());
                 * valObj[moduleName] = {};
                 * valObj[moduleName][propertyName] = $(tag).val();
                 * console.log(valObj);
                 *
                 * This approach was buggy. I think the reference to valObj was getting lost or altered
                 * due to which all the settings were not able to be stored.
                 * Couldn't use Object.freeze() since the object needs to be altered in the process of
                 * setting the key value pairs.
                 *
                 */

                var propertyName = $(tag).data('property');
                var moduleName = $(tag).closest('section')[0].id;
                var propValue = $(tag).val();
                var retObj = addToObject(valObj, moduleName, propertyName, propValue);
                $.each(retObj, function (key, value) {
                    valObj[key] = value;
                });
            });

            chrome.storage.sync.set(valObj, function() {
                // Update status to let user know options were saved.
                $("#save").text('Saved!');
                $("#save").addClass('saved');
                setTimeout(function() {
                    $("#save").text('Save Settings');
                    $("#save").removeClass('saved');
                }, 1000);
            });
        } else if (eventTrigger == 'change') {
            var valuesToSave = $('.saveValue');

            $.each(valuesToSave, function(index, tag) {
                var propertyName = $(tag).data('property');
                var moduleName = $(tag).closest('section')[0].id;
                var propValue = $(tag).val();
                YouTubeHoverSettings[moduleName][propertyName] = propValue;
            });
        }
    }

    function addToObject(obj, module, prop, val) {
        var tempObj = {};
        $.each(obj, function (key, value) {
            tempObj[key] = value;
        });

        if (tempObj[module] == undefined) {
            tempObj[module] = {};
        }

        tempObj[module][prop] = val;
        return tempObj;
    }

    /**
     * Restores the values or states selected by the user.
     */
    function restoreOptions() {
        chrome.storage.sync.get(defaultSettings, function(items) {
            $.each(moduleList, function(index, val) {
                callRestoreFunction(val, items);
            });
        });
    }

    /**
     * Loads the HTML for options defined in options/modules/
     * and adds it to the options page.
     * Also calls the defualt option function from the module/template.js
     */
    function loadOptions () {
        $.each(moduleList, function(index, val) {
            $.ajax({
                url: "modules/" + val + "/template.html",
                type: "GET",
                async: false,
                success: function (response) {
                    $('#insertSettings').append(response);
                    callDefaultFunction(val);
                }
            });
        });
    }

    /**
     * Takes a string (name of a function) and call that function
     * @param  {[String]} name [Name of the module. (name of the default function should be the name of the module)]
     */
    function callDefaultFunction (name) {
        eval(name)();
    }

    /**
     * Calls the default restore function of a module in options/modules/template.js
     * @param  {[type]} name        [Name of the module ]
     * @param  {[type]} settingsObj [Settings that were stored in chrome]
     */
    function callRestoreFunction (name, settingsObj) {
        var fName = name + "_restoreSettings";
        eval(fName)(settingsObj);
    }

    /**
     * Load markup for example video.
     */
    function loadExampleVideoMarkup() {
        var vidID = $('body #example').data('url');
        var id = vidID.split('watch?v=')[1];

        var tempHTML = '<li class="yt-shelf-grid-item yt-uix-shelfslider-item">'
                 + '<div class="yt-lockup yt-lockup-grid yt-lockup-video clearfix">'
                     + '<div class="yt-lockup-dismissable">'
                         + '<div class="yt-lockup-thumbnail contains-addto">'
                             + '<a aria-hidden="true" href="/watch?v=' + id + '" class=" yt-uix-sessionlink spf-link">'
                                 + '<div class="yt-thumb video-thumb"><span class="yt-thumb-simple">'
                                     + '<img data-ytimg="1" alt="" src="http://img.youtube.com/vi/' + id + '/mqdefault.jpg" width="300" height="168.5" style="display: inline;">'
                                     + '</span>'
                                 + '</div>'
                             + '</a>'
                         + '</div>'
                     + '</div>'
                 + '</div>'
             + '</li>';

        $('body #example').prepend(tempHTML);
    }
});