var colors = [
    '#ff0000',
    '#ff8000',
    '#ffff00',
    '#008000',
    '#00ffff',
    '#0080c0',
    '#8000ff'],
	logoBtn = $('.header__logo-img'), //кнопка лого
    logo = $('.header__logo-img'), // цвет лого
	socials = $('.socials-pic'), // цвет социалок
	order = $('.order__desc-btn-link'), // цвет кнопки заказа
	textShowreel = $('.order__showreel-title'), // цвет заголовка Showreel
	textAds = $('.videos__block__ads-title'), // цвет заголовка Рекламные ролики
    i = 0;

$('.header__logo-img').mouseenter(function() {
	logo.css('background-color', colors[i]);
	socials.css('fill', colors[i]);
	order.css('background-color', colors[i]);
	textShowreel.css('color', colors[i]);
	textAds.css('color', colors[i]);
    if((++i) >= 7) {
        i = 1;
        colors.reverse();
    }
} );

if ($(document).width() <= 960) {
	$('.header__logo-img').on('click', function() {
	logo.css('background-color', colors[i]);
	socials.css('fill', colors[i]);
	order.css('background-color', colors[i]);
	textShowreel.css('color', colors[i]);
	textAds.css('color', colors[i]);
		if((++i) >= 7) {
			i = 1;
			colors.reverse();
		}
	} );
};

/*
setInterval(function(){
    logo.css('background-color', colors[i]);
	socials.css('fill', colors[i]);
	order.css('background-color', colors[i]);
	textShowreel.css('color', colors[i]);
	textAds.css('color', colors[i]);
    if((++i) >= 7) {
        i = 1;
        colors.reverse();
    }
}, 2000);
*/