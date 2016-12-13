console.log('Hello Developer');

var YouTubeHoverSettings = {}; // Global YouTubeHoverSettings object. Is available to all controllers.
chrome.storage.sync.get(function (chromeSettings) {
    console.log(chromeSettings);
    $.each(chromeSettings, function (key, value) {
        YouTubeHoverSettings[key] = value;
    })
    Object.freeze(YouTubeHoverSettings); // Making object immutable.
});

var timeoutID; // Global timeoutID to check if user exited before the delay was completed

$(document).ready(function($) {
    $("body").on({
        mouseenter: function () {
            var hoverState = true;
            var $video = $(this);

            var linkSelector = '.yt-lockup-thumbnail a.yt-uix-sessionlink, .thumb-wrapper a.yt-uix-sessionlink';
            var link = $video.find(linkSelector)[0].href;

            var id = getVideoID(link);

            var thumbnailSelector = '.yt-thumb.video-thumb img, .yt-uix-simple-thumb-wrap img';
            var thumbnail = $video.find(thumbnailSelector);

            timeoutID = setTimeout(function() {
                    addIFrame($video, thumbnail, id);
            }, YouTubeHoverSettings.delayOnHover.hoverDelay * 1000);
        },
        mouseleave: function () {
            clearTimeout(timeoutID);

            var thumbnailSelector = '.yt-thumb.video-thumb img, .yt-uix-simple-thumb-wrap img';
            removeIFrame($(this), thumbnailSelector);
            console.log('exited');
        }
    }, ".yt-shelf-grid-item, .expanded-shelf-content-item, .video-list-item");

    setupControllers(controllerList);

    /**
     * Parses a YouTube video URl and returns its ID
     * @param  {[String]} url [The URL of the YouTube Video]
     * @return {[String]}     [The ID of the YouTube Video]
     */
    function getVideoID (url) {
        var splitString = url.split("watch\?v=");
        var beginTime = 0;
        var id;
        if ( splitString[1].indexOf("&t") >= 0 ) {
            var secondSplit = splitString[1].split("&t=");
            id = secondSplit[0];
            beginTime = parseInt(secondSplit[1]);
        } else {
            id = splitString[1];
        }
        return id;
    }

    /**
     * Adds the Video iframe to imageContainer
     * @param {[Object]} $videoContainer [The complete container of the img and the links]
     * @param {[Object]} img             [The image as a jQuery Object]
     * @param {[String]} vID             [ID of the Video]
     */
    function addIFrame ($videoContainer, img, vID) {
        var width = img[0].width + "px";
        var height = img[0].height + "px";

        iframeHTML = '<iframe id="youtubeHover_frame" src="https://www.youtube.com/embed/' + vID +
                     '?controls=0&autoplay=1&showinfo=0&start=0&enablejsapi=1" frameborder="0"' +
                     'style="width: ' + width + '; height: ' + height + '; position: relative; box-sizing: border-box;"' +
                     'data-id="' + vID + '"></iframe>';

        $(img).parent().append(iframeHTML);
        img.css('display', 'none');
        $('body').trigger('youtubeHover_iframeAdded');
    }

    /**
     * Remove the iframe when mouse exists the container.
     * @param  {[Object]} $videoContainer [The complete container of the img and the links]
     * @param  {[String]} imgSelector     [The jquery selector to find the image with the $videoContainer]
     */
    function removeIFrame ($videoContainer, imgSelector) {
        $videoContainer.find(imgSelector).parent().find('iframe').remove();
        $videoContainer.find(imgSelector).css('display', 'inline');
        $('body').trigger('youtubeHover_iframeRemoved');
    }

    function setupControllers (cList) {
        console.log(cList);
        $.each(cList, function(index, val) {
             var controllerFunction = "controller_" + val;
             eval(controllerFunction)();
        });
    }
});