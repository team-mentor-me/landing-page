let sectionTab = document.querySelectorAll('.section-tab')
let tabContainerHeight = 70;

sectionTab.forEach(tab => {
	tab.addEventListener('click', function(e){
	    let el = e.target;
	    // Move Menu
	    let bottomNav = el.parentElement;
	    
	    let contentTabId = el.getAttribute('href');
	    
		let contentTabEl = document.querySelectorAll(contentTabId)[0]
		bottomNav.classList.add('.top-position');
		//bottomNav.style.transform = `translateY((-${contentTabEl.offsetHeight}+79+56)px)`;
	})
})
