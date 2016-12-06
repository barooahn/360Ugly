// use helper method to generate an array of image urls. We have 34 frames in total
var frames = SpriteSpin.sourceArray('slider/images/elephant/DSC_{frame}.jpg', {
    frame: [407, 436],
    digits: 4
});

// these are the frame numbers that will show a detail bubble
var details = [407, 436];
// the current index in the details array
var detailIndex = 0;
var spin = $('.elephant');
// initialise spritespin
spin.spritespin({
    source: frames,
    width: 500,
    sense: 2,
    height: 334,
    sizeMode: 'fit',
    scrollThreshold: 3000,
    frameTime: 100, // Time in ms between updates. 40 is exactly 25 FPS
    detectSubsampling: false,
    animate: true
});

// get the api object. This is used to trigger animation to play up to a specific frame
var api = spin.spritespin("api");

function buildingSpin(frameToPlayTo, ReverseTF) {

    spin.bind("onLoad", function() {
        var data = api.data;
        console.log('loaded');
        $('.rotateButton').css({
            opacity: 0,
            display: "inline-block"
        }).animate({
            opacity: 1
        }, 'slow');
        $('.spinner').css({
            opacity: 1,
            display: "none"
        }).animate({
            opacity: 0
        }, 'slow');
    }).bind("onFrame", function(e, data) {

    });

    function setDetailIndex(index) {
        detailIndex = index;
        if (detailIndex < 0) {
            detailIndex = details.length - 1;
        }
        if (detailIndex >= details.length) {
            detailIndex = 0;
        }
        api.playTo(details[detailIndex]);
    }
    api.playTo(frameToPlayTo);
}

