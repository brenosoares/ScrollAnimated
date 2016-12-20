class ScrollAnimated{

	constructor(element, effect, duration, delay){
		this.element = element;
		this.effect = effect;
		this.duration = duration;
		this.delay = delay;
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
		let self = this;
		Array.from(this.elementSelectAll).forEach(el => {
			el.classList.add('animated');
			el.style.animationDelay = self.delay+"s";
			el.style.animationDuration = self.duration+"s";
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
