const elHamurgerIcon = document.querySelector('.hamburger-icon');
const elNavbar = document.querySelector('.site-nav');
const elCloseNavbar = document.querySelector('.site-nav__header-btn');

function removeItem() {
	elFeaturesInners.forEach(elFeaturesInner => {
		elFeaturesInner.classList.remove('active');
		document.body.style.overflow = 'auto'
	});
}

elHamurgerIcon.addEventListener('click', () => {
	elNavbar.classList.toggle('active');
	document.body.style.overflow = 'hidden'
});

elCloseNavbar.addEventListener('click', () => {
	elNavbar.classList.toggle('active');
	document.body.style.overflow = 'auto'

});

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
	pagination: {
		el: '.swiper-pagination1',
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 3.5,
			spaceBetween: 50,
		},
	},
});

var Emblem = {
	init: function (el, str) {
		var element = document.querySelector(el);
		var text = str ? str : element.innerHTML;
		element.innerHTML = '';
		var radius = element.offsetWidth / 2;
		for (var i = 0; i < text.length; i++) {
			var letter = text[i];
			var span = document.createElement('span');
			var angle = (360 / text.length) * i;
			span.textContent = letter;
			span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
			element.appendChild(span);
		}
	},
};

Emblem.init('.emblem');
