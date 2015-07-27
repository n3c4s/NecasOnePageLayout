$(document).on("ready", main);

function main(){
	$("#menuweb a").on("click", irA);
	$(window).scroll(scrollMenu)
}

function irA(){
	var seccion = $(this).attr("href");
	$("body, html").animate({
		scrollTop: $(seccion).offset().top-50
	}, 2000);
	return false;
}

function scrollMenu(){
	var secciones = [$("#slider").offset().top,$("#quienes").offset().top,$("#trabajos").offset().top,$("#servicios").offset().top,$("#contacto").offset().top,]
	if($(this).scrollTop() > secciones[0]-140 && $(this).scrollTop() < secciones[1]-140) {
		$("#menuweb li").eq(0).addClass("active")
	}else {
		$("#menuweb li").eq(0).removeClass("active")
	}
	if($(this).scrollTop() > secciones[1]-140 && $(this).scrollTop() < secciones[2]-140) {
		$("#menuweb li").eq(1).addClass("active")
	}else {
		$("#menuweb li").eq(1).removeClass("active")
	}
	if($(this).scrollTop() > secciones[2]-140 && $(this).scrollTop() < secciones[3]-140) {
		$("#menuweb li").eq(2).addClass("active")
	}else {
		$("#menuweb li").eq(2).removeClass("active")
	}
	if($(this).scrollTop() > secciones[3]-140 && $(this).scrollTop() < secciones[4]-140) {
		$("#menuweb li").eq(3).addClass("active")
	}else {
		$("#menuweb li").eq(3).removeClass("active")
	}
	if($(this).scrollTop() > secciones[4]-140) {
		$("#menuweb li").eq(4).addClass("active")
	}else {
		$("#menuweb li").eq(4).removeClass("active")
	}
}
