$(document).ready(function($) {
    loadOptions();
    restoreOptions();

    $('body').on('click', '#save', function(event) {
        saveOptions();
    });

    /**
     * Save the options from teh options page.
     */
    function saveOptions() {
        var valObj = {};
        var valuesToSave = $('.saveValue');

        $.each(valuesToSave, function(index, tag) {
             var propertyName = $(tag).data('property');
             valObj[propertyName] = $(tag).val();
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

    /**
     * Restores the values or states selected by the user.
     */
    function restoreOptions() {
        // Alter default object in .get() later.
        chrome.storage.sync.get({
            hoverDelay: 2
        }, function(items) {
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