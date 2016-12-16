
var is_touch_device = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch;
$(function () {
  $('[data-toggle="popover"]').popover({ trigger: is_touch_device ? "focus" : "hover focus" });
})

// $(".icons").mouseover(function() {
// 	console.log('ére ' + this);
//     $(this +" a").popover('show');
// }).mouseout(function() {
//     $(this+" a").popover('hide');
// });