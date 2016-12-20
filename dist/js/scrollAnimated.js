'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollAnimated = function () {
	function ScrollAnimated(element, effect, duration) {
		var _this = this;

		_classCallCheck(this, ScrollAnimated);

		this.element = element;
		this.effect = effect;
		this.duration = duration;
		// VERIFY IF ELEMENT HAS IN DOCUMENT
		if (document.querySelector(this.element)) {
			this.elementSelect = document.querySelector(this.element);
			this.elementSelectAll = document.querySelectorAll(this.element);
			this.valida = true;
			this.elementOffSetTop = this.elementSelect.offsetTop;
			this.windowScroll = window.scrollY;
			this.elementAnimation = this.elementOffSetTop - (window.innerHeight - 200);

			this.preAnimation();
			this.animation();

			window.addEventListener('scroll', function () {
				_this.windowScroll = window.scrollY;_this.animation();
			});
		}
	}

	_createClass(ScrollAnimated, [{
		key: 'preAnimation',
		value: function preAnimation() {
			Array.from(this.elementSelectAll).forEach(function (el) {
				el.classList.add('animated');
				el.style.opacity = 0;
			});
		}
	}, {
		key: 'animation',
		value: function animation() {
			var self = this;
			if (this.windowScroll >= this.elementAnimation && this.valida == true) {
				Array.from(this.elementSelectAll).forEach(function (el, i) {
					setTimeout(function () {
						el.classList.add(self.effect);
					}, i * self.duration);
				});
				this.valida = false;
			}
		}
	}]);

	return ScrollAnimated;
}();

var obj = new ScrollAnimated('.diferenciais__item', 'fadeInUp', 300);
var objs = new ScrollAnimated('.portaria__texto', 'fadeInLeft', 300);
var objss = new ScrollAnimated('.portaria__image', 'fadeInRight', 300);
var objsss = new ScrollAnimated('.clientes__item', 'fadeInUp', 300);