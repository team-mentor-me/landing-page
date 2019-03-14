let sectionTab = document.querySelectorAll('.section-tab')
let herocontainer = document.querySelector('.hero-section-container')
let activeTabIndicator = document.querySelector('.section-tab-active')
let logo = document.querySelector('.mk_header__logo')
let tabContainerHeight = 70;

logo.addEventListener('click', function(){
	let scrollTop = herocontainer.offsetTop - tabContainerHeight - 6;
	$('html, body').animate({ scrollTop: scrollTop }, 600);
	activeTabIndicator.style.transform = `translateX(${-5000}px)`;
})

sectionTab.forEach((tab, idx) => {
	tab.addEventListener('click', function(e){
		let el = e.target;
	    let tabContainerHeight = 75;
	    // Move Menu
	    let bottomNav = el.parentElement;
	    let contentTabId = el.getAttribute('href');
		let contentTabEl = document.querySelectorAll(contentTabId)[0]
		
		event.preventDefault();
		let scrollTop = contentTabEl.offsetTop - tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
		let width = tab.offsetWidth;
		let left = tab.offsetLeft;
		activeTabIndicator.style.width = `${width}px`;
		activeTabIndicator.style.transform = `translateX(${ left - width }px)`;
	})
})

window.addEventListener('scroll', function(e){
	// Get nav bar position
	let body = document.body;
	let docElem = document.documentElement;
	let offset = $('.hero-section-container').offset().top + $('.hero-section-container').height() - tabContainerHeight;
	if($(window).scrollTop() > offset){
		$('.bottom-nav').addClass('top-position');
	}else{
		$('.bottom-nav').removeClass('top-position');
	}
})
// window.addEventListener('resize', function(e){
// 		if(this.currentId) {
// 			this.setSliderCss();
// 		}
//
// }

// TOOLTIPS

