# YouTubeHover

## Developement Setup
* Run `npm install`
* Run `bower install`

### Creating Options/Settings
* Define a folder with a unique name in `options/modules`.
* Create 3 files: `template.html`, `template.js` and `template.css`
* Run `gulp`

#### `template.html`
* Create a `<section></section>` tag.
    * Assign it an `id`, preferably the name of your module.
    * Assign it a `class="option"`. This is to assign styles from `options.css`
    * Ideally there should be a wrapper within your `<section>` tag within which there should be a `label` and an `input`.
* Create the rest of your mark up as per your requirements.

* __There should absolutely be an `<input class="saveValue" data-property="">` tag.__
    * The value in this `input` tag is going to be saved in the settings when the user clicks the Save Button.
    * The `data-property` attribute is the name you would like to assign the property in the settings object. This will help retrieve the setting in various other places.

* There can be any other markup that helps you get the value for the `input` tag.

#### `template.js`
* __There should absolutely be a function with the name of your module.__
    * Ex: Module name: `ColorSelector`.
    * Default function:
    ```javascript
        function ColorSelector () { ... }
    ```
    * This is the function that is called once the markup of your module has been loaded.
    * This function would ideally have event binders to elements in your markup. Any action on these elements will ultimately lead you to come up for a value in the `input` tag.

* __There should absolutely be a function with the name `yourModuleName_restoreSettings (settings) { ... }`.__
    * This function gets the settings from chrome in its argument; You can get the value necessary for your markup and setup your markup when the page is loading.

* There may be any other function that may assist you in handling your markup.
* It's a good idea to preface your functions with the name of your module to avoid clashes with other modules.

#### `template.css`
* Type your css in this file.
* Scope your css to your module.
    * Ex: If you want `a` tags in your module to be red.
    * Don't do:
    ```css
        a {
            color: red;
        }
    ```
    * Do:
    ```css
        #yourModule a {
            color: red;
        }
    ```