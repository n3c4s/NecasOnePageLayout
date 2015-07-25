$(document).on("ready", main);

function main(){
	$("#menuweb a").on("click", irA);
}

function irA(){
	var seccion = $(this).attr("href");
	$("body, html").animate({
		scrollTop: $(seccion).offset().top
	}, 2000);
	return false;
}
