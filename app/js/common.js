$(function() {

	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		navText: "",
		drag: true
	});

	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	});
	$(".prev").click(function(){
		owl.trigger('next.owl.carousel');
	});

});
