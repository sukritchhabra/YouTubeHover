console.log('Hello Developer');

$(document).ready(function($) {
    $(".yt-shelf-grid-item").hover(function() {
        var $video = $(this);
        var link = $video.find('a.yt-uix-sessionlink')[0].href;
        var id = getVideoID(link);
        var thumbnail = $video.find('.yt-thumb.video-thumb .yt-thumb-simple img');

        addIFrame($video, thumbnail, id);

    }, function() {
        removeIFrame($(this));
        console.log('exited');
    });

    /**
     * Parses a YouTube video URl and returns its ID
     * @param  {[String]} url [The URL of the YouTube Video]
     * @return {[String]}     [The ID of the YouTube Video]
     */
    function getVideoID (url) {
        var splitString = url.split("watch\?v=");
        var id = splitString[1];
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

        iframeHTML ='<iframe id="youtubeHover_frame" src="https://www.youtube.com/embed/' + vID + '?controls=0&autoplay=1&showinfo=0" frameborder="0"' +
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
});