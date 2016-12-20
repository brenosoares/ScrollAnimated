class ScrollAnimated{

	constructor(element, effect, duration){
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

			window.addEventListener('scroll', () => {this.windowScroll = window.scrollY; this.animation();});

		}
	}
	preAnimation(){
		Array.from(this.elementSelectAll).forEach(el => {
			el.classList.add('animated');
			el.style.opacity = 0;
		});

	}

	animation() {
		let self = this;
		if (this.windowScroll >= this.elementAnimation && this.valida == true) {
			Array.from(this.elementSelectAll).forEach((el, i) => {
				setTimeout(function(){
					el.classList.add(self.effect)
				},i * self.duration);
			});
			this.valida = false;
		}
	}

}

	var obj = new ScrollAnimated('.diferenciais__item', 'fadeInUp', 300);
	var objs = new ScrollAnimated('.portaria__texto', 'fadeInLeft', 300);
	var objss = new ScrollAnimated('.portaria__image', 'fadeInRight', 300);
	var objsss = new ScrollAnimated('.clientes__item', 'fadeInUp', 300);
