		






$(document).ready(function (){

	
	$(window).on('load', function (){

		$('#loader').fadeOut();

	});



	var display = false;


	function open_Menu(){

				$('.menu-wrapper').css('height', '100%');
				$('.menu-item').addClass('fixie');

				$('.menu-item').animate({
					marginLeft : 0,
					marginTop : 0,
				}, 400, function (){

					$(this).addClass('recto');

					$('.menu-item').bind('transitionend webkitTransitionEnd mozTransitionEnd', function (){

						$('.menu-item > img').css('top', 350);
						$('.menu-item > p').addClass('text-show');
						$('#page-wrapper').addClass('blurred');

					});
				
				});

			display = true;

	}


	function close_Menu(){
				

				$('.menu-item').animate({
					marginLeft : '1500px',
					marginTop: '100%'
				}, 400, function (){

					$(this).removeClass('recto');
					$('.menu-wrapper').css('height', '0%');

					$('.menu-item').bind('transitionend webkitTransitionEnd mozTransitionEnd', function (){

						$('.menu-item > img').css('top', 0);
						$('.menu-item > p').removeClass('text-show');
						$('#page-wrapper').removeClass('blurred');
						

					});
				});

			display = false;
	}


	function menu_button(){

			$('#site-menu-button .site-menu-bar:nth-child(1)').toggleClass('rot45');
			$('#site-menu-button .site-menu-bar:nth-child(2)').toggleClass('opacity');
			$('#site-menu-button .site-menu-bar:nth-child(3)').toggleClass('rot-45');

	}


	$('#site-menu-button').bind('click', function (){


			menu_button();

			if(display === false){

				open_Menu();

			}

			else{

				close_Menu();

			}	
		
	});




		function $_(e){
			return document.querySelectorAll(e);
		}

		function _$(e){
			return document.querySelector(e);
		}

		var sections = $_('.section-menu');

		for(var i = 0; i < sections.length; i++){

				$_('.menu-item')[i].setAttribute('data-top', sections[i].offsetTop);

		}



		function menu_scroll(){

			$('.menu-item').bind('click', function (){

				close_Menu();
				menu_button();

				var that = $(this);

				$('html, body').animate({
					scrollTop : that.attr('data-top') +'px'
				}, 700);

			});

		}


		menu_scroll();






	function android_hover_effect(hover, e1, e2){



			$(hover).bind('mouseover', function (){

		

				$(e1).css({
						strokeDasharray: '760',
						strokeDashoffset: '0',
						strokeWidth: '2px',
						opacity: 1
				});

				$(e2).css({
						opacity: 1
				});

			});

			$(hover).bind('mouseout', function (){

		

			$(e1).css({
				strokeDasharray: '140 540',
				strokeDashoffset: '-638',
				opacity: 0

			});

			$(e2).css({
				opacity: 0
			});


			});


	}

		android_hover_effect('.phone .menu', '.svg-web-wrapper.pos-1 .cuadrado', '.svg-web-wrapper .svg-anchor-1');

		android_hover_effect('.phone .main-1', '.svg-web-wrapper.pos-2 .cuadrado', '.svg-web-wrapper .svg-anchor-2');

		android_hover_effect('.phone .main-2', '.svg-web-wrapper.pos-3 .cuadrado', '.svg-web-wrapper .svg-anchor-3');



		$(document).bind('scroll', function (){

			var y = window.pageYOffset;


			if(y > $('#devices').offset().top){

				$('.iphone-audio').css({
					'top' : '20px',
					'left': 0,

				});

				$('.iphone-screen, .iphone-button').css({
					top: 0,
					left: 0
				})


			}
		});


	

		$('.company-size').bind('click', function (){

			$('.cube-3D > .back-cube').css({
     			 transform: 'perspective( 1000px ) rotateY(0deg)',
     			 backfaceVisibility : 'hidden !important'
			});

			$('.cube-3D > .front-cube').css({
     			 transform: 'perspective( 1000px ) rotateY(-180deg)',
     			 backfaceVisibility : 'hidden !important'
			});

		});

		$('#go-back').bind('click', function (){


			$('.cube-3D > .back-cube').css({
     			 transform: 'perspective( 1000px ) rotateY(180deg)',
     			 backfaceVisibility : 'hidden !important'
			});

			$('.cube-3D > .front-cube').css({
     			 transform: 'perspective( 1000px ) rotateY(0deg)',
     			 backfaceVisibility : 'hidden !important'
			});

		});



		






});







