gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.5,
	effects: true,
});

gsap.fromTo(
	'.promo',
	{ opacity: 1 },
	{
		opacity: 0,
		scrollTrigger: {
			trigger: '.promo',
			start: '300',
			end: '900',
			scrub: true,
		},
	}
);

gsap.fromTo(
	'.offers__natural',
	{ opacity: 0.7, x: -100 },
	{
		opacity: 1,
		x: 0,
		scrollTrigger: {
			trigger: '.offers__container',
			scrub: true,
		},
	}
);

gsap.fromTo(
	'.offers__offer',
	{ opacity: 0.7, x: 100 },
	{
		opacity: 1,
		x: 0,
		scrollTrigger: {
			trigger: '.offers__container',
			scrub: true,
		},
	}
);

gsap.fromTo(
	'.about__content',
	{ opacity: 0.7, x: 100 },
	{
		opacity: 1,
		x: 0,
		scrollTrigger: {
			trigger: '.about__content',
			scrub: true,
		},
	}
);

gsap.fromTo(
	'.about__img',
	{ opacity: 0.7, x: -100 },
	{
		opacity: 1,
		x: 0,
		scrollTrigger: {
			trigger: '.about__img',
			scrub: true,
		},
	}
);

gsap.fromTo(
	'.products .products__item:nth-child(even)',
	{ opacity: 0.7, x: -200 },
	{
		opacity: 1,
		x: 0,
		scrollTrigger: {
			trigger: '.products__item',
			scrub: true,
		},
	}
);

gsap.fromTo(
	'.products .products__item:nth-child(odd)',
	{ opacity: 0.7, x: 500 },
	{
		opacity: 1,
		x: 0,
		scrollTrigger: {
			trigger: '.products__item',
			scrub: true,
		},
	}
);

gsap.fromTo(
	'.offer .products__item:nth-child(even)',
	{ opacity: 0.7, x: -200 },
	{
		opacity: 1,
		x: 0,
		scrollTrigger: {
			trigger: '.offer',
			scrub: true,
		},
	}
);

gsap.fromTo(
	'.offer .products__item:nth-child(odd)',
	{ opacity: 0.7, x: 500 },
	{
		opacity: 1,
		x: 0,
		scrollTrigger: {
			trigger: '.offer',
			scrub: true,
		},
	}
);

gsap.fromTo(
	'.eco__content',
	{ x: 50 },
	{
		x: 0,
		scrollTrigger: {
			trigger: '.eco__content',
			scrub: true,
		},
	}
);
