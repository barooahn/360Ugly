var nextMove = 'back';


// use helper method to generate an array of image urls. We have 34 frames in total
var frames = SpriteSpin.sourceArray('slider/images/flowers/DSC_{frame}.jpg', {
    frame: [457, 485],
    digits: 4
});

// these are the frame numbers that will show a detail bubble
var details = [457, 485];
// the current index in the details array
var detailIndex = 0;
var spin = $('#flowers');
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
        if (data.frame == 371) {
            setTimeout(showHideOverLay(false), 1000);
            console.log('data reverse:' + data.reverse);
            data.reverse = true;
        }
        else if (data.frame == 0) {
            data.reverse = false;
        }
        else if (data.frame == 12) {
            showHideOverLay(true);
        }
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

$('.rotateButton').click(function() {
    if (nextMove == 'forward') {
        buildingSpin(0, true);
        nextMove = 'back';
    }
    else {
        buildingSpin(14, false);
        nextMove = 'forward';
    }
});


function showHideOverLay(reverse) {
    if (reverse) {
        $('#frontOverlayContainer').css({
            opacity: 0,
            display: "none"
        });
    }
    else {
        $('#frontOverlayContainer').css({
            opacity: 0,
            display: "block"
        }).animate({
            opacity: 1
        }, 'slow');
    }

}

$('.hotspotFront').mousemove(function(e) {
    $('span', this).css({
        left: e.pageX - 700,
        top: e.pageY - 300
    });
});

buildingSpin(0, true);

$('.li1').click(function(e) {
    $('#myModal').modal('show');
});
