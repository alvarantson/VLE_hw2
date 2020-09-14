if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	$(".main-desktop").toggleClass("hidden");
	$(".footer").toggleClass("hidden");
	$(".main-phone").toggleClass("hidden");
	$(".footer-phone").toggleClass("hidden");
} else {
	// if want to add anything in the near future
};