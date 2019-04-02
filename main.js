  	$(document).ready(function($) {






	var one_page_scroll = function (){



		// KEY VARIABLES
		var target = 0; //$('section .active').index();
		var timeNow = 0;
		var num_of_sections = $('section').length;
		var transitionEndType = whatTransition();
		var sections = document.getElementsByTagName('section');


		var init = function (){

				if($('section').attr('data-height') == null){

					sections_data();
				}

					initPageScroll();
					disable_arrow();
					responsive_section();
					menu_scroll();
					space_bar();


		}

		// CONFIG HEIGHT AND TOP POSITION
		
			var config = function (){

				$('section').each(function (index){

					$(this).css({
						'top': index*window.innerHeight+'px',
						'height': window.innerHeight+'px'
					});

					$(this).find('.animator').css({
						'height': '90%'
					})

				});

			}


			config();

			$(window).resize(function (){
				config();
			});

		var menu_scroll = function (){

			$('.menu-item').bind('click', function (){

				close_Menu();

				var that = $(this);


				target = parseInt($(this).attr('data-page'));
				classChange(target);
				pageTrans();

			});

		}




//// Initializes main page scroll action.

	var initPageScroll =  function (){

			$(document).bind('mousewheel  DomMouseScroll MozMousePixelScroll', function (event){
				$('body').css('overflow', 'hidden');
				event.preventDefault();
				event.stopPropagation();

				var delta  = event.originalEvent.wheelDelta || -event.originalEvent.detail;

				var animationStart = new Date().getTime();

					if((timeNow+1400) > animationStart){
						event.preventDefault();
						event.stopPropagation();
						return false;

						return;
					}
				
					else{
							delta < 0 ? moveUp() : moveDown();
					}
				
				timeNow = animationStart;

			});

	}



			var transition_end_animations = function (element, element2, class1, target){
					$(element).bind('webkitAnimationEnd animationend oAnimationEnd msAnimationEnd', function (){
						$(element2).removeClass(class1).eq(target).addClass(class1);
					});
			}



			var classChange = function (target){

				$('section').removeClass('active').eq(target).addClass('active');


				//$('.title-itself').removeClass('dash').eq(target).addClass('dash');

				transition_end_animations('.container', '.absolute-text', 'absolute-shown', target);
				$('.container').bind('webkitTransitionEnd transitionend  oTransitionEnd msTransitionEnd', function(){

						$('.animator').removeClass('flipIn').eq(target).addClass('flipIn');
						$('.ipad-wrapper img').removeClass('imgshown').eq(target).addClass('imgshown');
						//$('.title-itself').removeClass('dash').eq(target).addClass('dash');
						transition_end_animations('.animator', '.title-itself', 'dash', target);
						transition_end_animations('.animator', '.intro-desc', 'text-shown', target);
						

				});


			}


			var animation_fun = function (number){

				$('.title-itself').bind('webkitAnimationEnd animationEnd', function (number){

						console.log(number);

						if(target == 1){
							$('.intro-desc').removeClass('hideme').addClass('showme');
							$('.ipad-wrapper img').removeClass('imghidden').addClass('imgshown');
						}

						else{
							$('.intro-desc').removeClass('showme').addClass('hideme');
							$('.ipad-wrapper img').removeClass('imgshown').addClass('imghidden');

						}

				});
			}





			var moveUp = function (){

				
				target === num_of_sections ? target = 0 : target = target + 1;
				//console.log(target);
				classChange(target);
				pageTrans();

			}


			var moveDown = function (){
			
				target === num_of_sections ? target = 0 : target = target - 1;
				classChange(target);
				pageTrans();	

			}



			var pageTrans = function (){
				var pos = $('section.active').attr('data-height');
				$('.container').css({'transform': 'translate3d(0,-'+pos+'px, 0)'});
				$('.container').css({'-webkit-transform': 'translate3d(0,-'+pos+'px, 0)'});
				$('.container').css({'-moz-transform': 'translate3d(0,-'+pos+'px, 0)'});
				$('.container').css({'-ms-transform': 'translate3d(0,-'+pos+'px, 0)'});

			}


			var sections_data = function (){

				var sections = document.getElementsByTagName('section');
				for(var i = 0; i < sections.length; i++){
					sections[i].setAttribute('data-height', sections[i].offsetTop);
				}

			}

			$(window).resize(function(){
				sections_data();
			})



			function whatTransition(){
				var e = document.createElement('div');
				if(e.style.webkitTransition) return 'webkitTransitionEnd';
			
				if(e.style.oTransition) return 'oTransitionEnd';
				
				return 'transtionEnd';
				
			}




/////// Arrow keyboards event

		var arrow_events = function (){

			$(document).keydown(function (e){
				var tag = e.target;
				console.log(tag);
			});
		}

		arrow_events();



/////// Adds responsiveness via window.height.


		var responsive_section = function (){

				window.addEventListener('resize', function (){

					for(var i = 0; i < sections.length; i++){
						sections[i].style.height = window.outterHeight+'px';
						sections[i].style.width = window.innerWidth+'px';

					}

				});

		}




/////// Disable_arrow : disables arrow key board and space bar navigation. 

		var disable_arrow = function (){

				$(window).keydown(function (e){

					if([30].indexOf(e.keyCode) > -1){
							e.preventDefault();
					}

					else if([40].indexOf(e.keyCode) > -1){

						if($('#message_body').is(':focus')){
							return true;
						}

						else{
							e.preventDefault();
							moveUp();						
					}

					}
					else if([38].indexOf(e.keyCode) > -1){
						if($('#message_body').is(':focus')){
							return true;
						}

						else{
							e.preventDefault();
							moveDown();						
						}
					}


				});
		}


		var space_bar = function (){

			$(window).keydown(function (e){
				if([32].indexOf(e.keyCode) > -1){
					if($('#message_body').is(':focus')){
						return true;
					}

					else{
						e.preventDefault();
						moveUp();						
					}

				}

			})

		}


////// Init 





			var start_touch = function (event){
				event.preventDefault();

				var touches = event.touches[0];

					y_start =  touches.pageY;
					//console.log(event.changedTouches[0]);	
					
					var container = document.getElementsByClassName('container')[0];
					container.addEventListener('touchmove', swipe_move, false);

			}


			var swipe_move = function (event){
				//event.preventDefault();

				var touches = event.touches[0];
				var y_delta = y_start - touches.pageY;

				if(y_delta >= 1 && y_delta <= 10){
					moveUp();
					console.log('up swipe active')

				}

				if(y_delta <= -1 && y_delta >= -10){
					moveDown();
					console.log('down swipe active')
				}
			}



			document.body.addEventListener('touchstart', start_touch);



	init();



}

one_page_scroll();






//////				MENU 			///////////////
		

		function close_Menu(){

					$('#menu > div:nth-child(1)').removeClass('menu-child-1');

					$('#menu > div:nth-child(4)').removeClass('menu-child-4');

					$('#menu > div:nth-child(2)').removeClass('menu-child-0');

					$('#menu > div:nth-child(3)').removeClass('menu-child-0');

					$('#main-page-wrapper').removeClass('blurred');

					$('#menu-display').css('zIndex', -4999);

					$('#menu-display').animate({
						opacity : 0
					}, 400);		
		}


		$('#menu').bind('click', function (){

			$('#menu-display').toggleClass('active-menu');

				if($('#menu-display').hasClass('active-menu')){

					$('#menu > div:nth-child(1)').addClass('menu-child-1');

					$('#menu > div:nth-child(4)').addClass('menu-child-4');

					$('#menu > div:nth-child(2)').addClass('menu-child-0');

					$('#menu > div:nth-child(3)').addClass('menu-child-0');

					$('#main-page-wrapper').addClass('blurred');

					$('#menu-display').css({
						'zIndex' :  4999});

					$('#menu-display').animate({
						opacity : 1
					}, 400);

				}


				else{

						close_Menu();
				}
				

		});






		//menu_scroll();























	
});
