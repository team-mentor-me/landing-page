document.on('load', function(e){
	event.preventDefault();
	let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
	let sectionTab = document.querySelectorAll('.section-tab')
	console.log(sectionTab)
	// $('html, body').animate({ scrollTop: scrollTop }, 600);
	
	//function onTabClick()	{
	
	// 	event.preventDefault();
	// 	let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
	// 	$('html, body').animate({ scrollTop: scrollTop }, 600);
	// }
	
}
