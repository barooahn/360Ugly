var frames = SpriteSpin.sourceArray('slider/images/uglyman2_small/DSC_{frame}.jpg', {
    frame: [329, 371],
    digits: 4
});

var width = $('.uglyman').width() - 10;
var height = width / 1.5;
var spin = $('.uglyman');
// initialise spritespin
spin.spritespin({
      source: frames,
        width: width,
        height: height,

});
spin.bind("onLoad", function() {
    $('.loader').css({
        opacity: 1,
        display: "none"
    }).animate({
        opacity: 0
    }, 'slow');
});