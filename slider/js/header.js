var frames = SpriteSpin.sourceArray('slider/images/uglyman2_small/DSC_{frame}.jpg', {
    frame: [329, 371],
    digits: 4
});

var width = $(window).width() - 20;
var spin = $('.uglyman');
// initialise spritespin
spin.spritespin({
    source: frames,
    width: width,
    sense: 2,
    sizeMode: 'fit',
    scrollThreshold: 3000,
    frameTime: 100, // Time in ms between updates. 40 is exactly 25 FPS
    detectSubsampling: false,
    animate: true,
});
spin.bind("onLoad", function() {
    $('.loader').css({
        opacity: 1,
        display: "none"
    }).animate({
        opacity: 0
    }, 'slow');
});