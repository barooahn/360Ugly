/*
onclick 
get the name
load file
open modal
start animation
*/

var framesArray = { 
    elephant: { path: 'slider/images/elephant/DSC_{frame}.jpg', start: 407, end: 436, digits: 4 }, 
    flowers: { path: 'slider/images/flowers/DSC_{frame}.jpg', start: 457, end: 485, digits: 4 },
    fireTruck: { path: 'slider/images/fireTruck/DSC_{frame}.jpg', start: 507, end: 536, digits: 4 },
}


$(".rollover-modal").click(function(e) {
	e.preventDefault();

	var id360 = $(this).attr("id");
	console.log("ID of rollover = " + id360);	
    $(".modal-spin").addClass(id360);

    // use helper method to generate an array of image urls. We have 34 frames in total
	var frames = SpriteSpin.sourceArray(framesArray[id360]['path'], {
	    frame: [framesArray[id360]['start'], framesArray[id360]['end']],
	    digits: framesArray[id360]['digits']
	});

	var spin = $('.'+id360);
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

    $("#360Modal").modal();
});
