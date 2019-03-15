let sectionTab = document.querySelectorAll('.section-tab')
let herocontainer = document.querySelector('.hero-section-container')
let activeTabIndicator = document.querySelector('.section-tab-active')
let logo = document.querySelector('.mk_header__logo')
let bottomNav = document.querySelector('.bottom-nav')
let tabContainerHeight = 76;
let activeTab;

logo.addEventListener('click', function(){
	let scrollTop = herocontainer.offsetTop - 76;
	$('html, body').animate({ scrollTop: scrollTop }, 600);
	activeTabIndicator.style.transform = `translateX(${-5000}px)`;
})

function setActiveTabIndicator(){
	let width = activeTab.offsetWidth;
	let left = activeTab.offsetLeft;
	activeTabIndicator.style.width = `${width}px`;
	activeTabIndicator.style.transform = `translateX(${ left - width }px)`;
}

sectionTab.forEach((tab, idx) => {
	tab.addEventListener('click', function(e){
		let el = e.target;
		let logoHeight = 76;
	    let tabContainerHeight = 76;
	    let activeTabHeight = 6;
	    let bottomNav = el.parentElement;
	    let contentTabId = el.getAttribute('href');
		let contentTabEl = document.querySelectorAll(contentTabId)[0]
		let offset;
		event.preventDefault();
		// The home page only have one level
		if(idx === 0){
			offset = contentTabEl.offsetTop  -  tabContainerHeight + 2;
		}else{
			offset = contentTabEl.offsetTop  - tabContainerHeight - logoHeight + 2 ;
		}
	
		activeTab = tab;
		// let scrollTop = contentTabEl.offsetTop - tabContainerHeight - logoHeight + activeTabHeight;
		$('html, body').animate({ scrollTop: offset }, 600);
		setActiveTabIndicator()
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
window.addEventListener('resize', function(e){
		if(activeTab) {
			setActiveTabIndicator();
		}
})

// TOOLTIPS

