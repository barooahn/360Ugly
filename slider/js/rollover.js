var framesArray = {
    elephant: {
        path: 'slider/images/elephant/DSC_{frame}.jpg',
        start: 407,
        end: 436,
        digits: 4
    },
    flower2: {
        path: 'slider/images/flower2/DSC_{frame}.jpg',
        start: 913,
        end: 956,
        digits: 4
    },
    fireTruck: {
        path: 'slider/images/fireTruck/DSC_{frame}.jpg',
        start: 507,
        end: 536,
        digits: 4
    },
    baji: {
        path: 'slider/images/baji/DSC_{frame}.jpg',
        start: 859,
        end: 902,
        digits: 4
    },
    book: {
        path: 'slider/images/book/DSC_{frame}.jpg',
        start: 805,
        end: 848,
        digits: 4
    },
    braclet: {
        path: 'slider/images/braclet/DSC_{frame}.jpg',
        start: 697,
        end: 741,
        digits: 4
    },
    flowers3: {
        path: 'slider/images/flowers3/DSC_{frame}.jpg',
        start: 968,
        end: 1010,
        digits: 4
    },
    tmnt: {
        path: 'slider/images/tmnt/DSC_{frame}.jpg',
        start: 755,
        end: 797,
        digits: 4
    },
}
$(".rollover-modal").mouseover(function() {
    $(this).addClass("blue");
}).mouseout(function() {
    $(this).removeClass("blue");
});
$(".rollover-modal").click(function(e) {
    $('.spinner').css({
            opacity: 1,
            display: "show"
        }).animate({
            opacity: 0
        }, 'slow');
    e.preventDefault();
    var width = $("#360Modal").width() - 20;
    var id360 = $(this).attr("id");
    console.log("ID of rollover = " + id360);
    $(".modal-spin").addClass(id360);
    // use helper method to generate an array of image urls. We have 34 frames in total
    var frames = SpriteSpin.sourceArray(framesArray[id360]['path'], {
        frame: [framesArray[id360]['start'], framesArray[id360]['end']],
        digits: framesArray[id360]['digits']
    });
    var spin = $('.' + id360);
    // initialise spritespin
    spin.spritespin({
        source: frames,
        width: width,
        height: 334,
        sense: 2,
        sizeMode: 'fit',
        scrollThreshold: 3000,
        frameTime: 100, // Time in ms between updates. 40 is exactly 25 FPS
        detectSubsampling: false,
        animate: true,
    });
    spin.bind("onLoad", function() {
        $('.spinner').css({
            opacity: 0,
            display: "none"
        }).animate({
            opacity: 1
        }, 'slow');
    });
    $("#360Modal").modal();
    $('#360Modal').on('hidden.bs.modal', function() {
        spin.spritespin("destroy");
        console.log('destroyed');
    });
});