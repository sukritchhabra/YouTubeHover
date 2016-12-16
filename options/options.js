$(document).ready(function($) {
    loadOptions();
    restoreOptions();

    // Detecting click on the save button
    $('body').on('click', '#save', function(event) {
        saveOptions();
    });

    // Detect Enter press and save options.
    $('body').on('keyup', function(event) {
        if (event.keyCode === 13) {
            saveOptions();
        }
    });


    $('body').on('click', 'section.option', function(event) {
        $(this).find('.wrapper').slideToggle(500);
    });

    // Clicking on section.option .wrapper doesn't propogate to section.option
    $('body').on('click', 'section.option .wrapper', function(event) {
        event.stopPropagation();
    });

    /**
     * Save the options from teh options page.
     */
    function saveOptions() {
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
            $("#save").css("background-color", "#00ab25");
            setTimeout(function() {
                $("#save").text('Save Settings');
                $("#save").css("background-color", "#428bca");
            }, 1000);
        });
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
});