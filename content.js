console.log('Hello Developer');

var YouTubeHoverSettings = {}; // Global YouTubeHoverSettings object. Is available to all controllers
chrome.storage.sync.get(function (chromeSettings) {
    console.log(chromeSettings);
    $.each(chromeSettings, function (key, value) {
        YouTubeHoverSettings[key] = value;
    })
});

var timeoutID; // Global timeoutID to check if user exited before the delay was completed

$(document).ready(function($) {
    $(".yt-shelf-grid-item").hover(function() {
        var hoverState = true;
        var $video = $(this);
        var link = $video.find('a.yt-uix-sessionlink')[0].href;
        var id = getVideoID(link);
        var thumbnail = $video.find('.yt-thumb.video-thumb .yt-thumb-simple img');

        timeoutID = setTimeout(function() {
                addIFrame($video, thumbnail, id);
        }, YouTubeHoverSettings.hoverDelay*1000);

    }, function() {
        clearTimeout(timeoutID);
        removeIFrame($(this));
        console.log('exited');
    });

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
                     '?controls=0&autoplay=1&showinfo=0&start=0" frameborder="0"' +
                     'style="width: ' + width + '; height: ' + height + '; position: relative; box-sizing: border-box;"' +
                     'data-id="' + vID + '"></iframe>';

        // Use shorthands
        $videoContainer.find('.yt-thumb.video-thumb .yt-thumb-simple').append(iframeHTML);
        img.css('display', 'none');
    }

    /**
     * Remove the iframe when mouse exists the container.
     * @param  {[Object]} $videoContainer [The complete container of the img and the links]
     */
    function removeIFrame ($videoContainer) {
        $videoContainer.find('.yt-thumb.video-thumb .yt-thumb-simple iframe').remove();
        $videoContainer.find('.yt-thumb.video-thumb .yt-thumb-simple img').css('display', 'inline');
    }

    function setupControllers (cList) {
        console.log(cList);
        $.each(cList, function(index, val) {
             var controllerFunction = "controller_" + val;
             eval(controllerFunction)();
        });
    }
});