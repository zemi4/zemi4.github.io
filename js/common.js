$(function() {

	// Custom JS

//jQuery.mmenu
	$('#my-menu').mmenu({
		extensions: ['theme-black','pagedim-black','position-right','border-none','fx-menu-fade','fx-panels-100',
		'fx-listitems-slide',],
		navbar: {
			title: '<img src="img/logoser.png" alt="logo">'
		},
	});


//hamburger
	var api = $('#my-menu').data('mmenu');

	 api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	 });
	 api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});


//owl-carousel
	$('.owl-carousel').owlCarousel({
		items:1,
		margin:0,
		loop: true,
		//smartSpeed: 1000,
		autoHeight:true,
		nav: true,
		navText: ['<i class="fa fa-chevron-circle-left"></i>','<i class="fa fa-chevron-circle-right"></i>'],
		animateOut: 'fadeOut',
		
	});


	//ЗАКАЗАТЬ ЗВОНОК
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});


	//E-mail Ajax Send
	$('.callback').submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: 'POST',
			url: 'mail.php', //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger('reset');
				$.magnificPopup.close();
			}, 2000);
		});
		return false;
	});

	
	//equalheights
		$('.section-services .servic-col .boxImg .h3').equalHeights();
		

});

