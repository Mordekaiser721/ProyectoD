$(document).ready(main);

var contador = 1;
var contador2 = 1;

function main() {

	$('.menu_bar').click(function () {
		var iconmenu = document.getElementById('icon_menu');
		if (contador == 1) {
			iconmenu.className = 'icon-cross'
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			iconmenu.className = 'icon-menu'
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function () {
		$(this).children('.children1').slideToggle();
		$(document).on("click", function (e) {
			var container = $("#submenu1");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				$('.children1').css('display', 'none');
			}
		});
		$(this).children('.children2').slideToggle();
		$(document).on("click", function (e) {
			var container = $("#submenu2");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				$('.children2').css('display', 'none');
			}
		});
		$(this).children('.children3').slideToggle();
		$(document).on("click", function (e) {
			var container = $("#submenu3");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				$('.children3').css('display', 'none');
			}
		});
		$(this).children('.children4').slideToggle();
		$(document).on("click", function (e) {
			var container = $("#submenu4");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				$('.children4').css('display', 'none');
			}
		});
	});

	var icon1 = document.getElementById('iconAbajo1');
	var icon2 = document.getElementById('iconAbajo2');
	var icon3 = document.getElementById('iconAbajo3');
	var icon4 = document.getElementById('iconAbajo4');

	$('#submenu1').click(function () {
		if (contador2 == 1) {
			icon1.className = 'icon-circle-up';
			contador2 = 0;
		} else {
			contador2 = 1;
			icon1.className = 'icon-circle-down';
		}
	});
	$('#submenu2').click(function () {
		if (contador2 == 1) {
			icon2.className = 'icon-circle-up';
			contador2 = 0;
		} else {
			contador2 = 1;
			icon2.className = 'icon-circle-down';
		}
	});
	$('#submenu3').click(function () {
		if (contador2 == 1) {
			icon3.className = 'icon-circle-up';
			contador2 = 0;
		} else {
			contador2 = 1;
			icon3.className = 'icon-circle-down';
		}
	});
	$('#submenu4').click(function () {
		if (contador2 == 1) {
			icon4.className = 'icon-circle-up';
			contador2 = 0;
		} else {
			contador2 = 1;
			icon4.className = 'icon-circle-down';
		}
	});
}
