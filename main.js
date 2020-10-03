	$(document).ready(function($) {


//////				ONE PAGE SCROLL		///////////////
		


	var one_page_scroll = function (){



		// KEY VARIABLES
		var transition_duration = '.4s';
		var target = 0;
		var timeNow = 0;
		var y_start;
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


		}

		// CONFIG HEIGHT AND TOP POSITION
		
			var config = function (){

				$('.container').css('transition', transition_duration);

				$('section').each(function (index){

					$(this).css({
						'top': index*window.innerHeight+'px',
						'height': window.innerHeight+'px'
					});

				});

			}


			config();


	

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




			var classChange = function (target){

				$('section').removeClass('active').eq(target).addClass('active');


				$('.title-itself').removeClass('dash').eq(target).addClass('dash');


				$('.container').bind('webkitTransitionEnd transitionend  oTransitionEnd msTransitionEnd', function(){

						$('.animator').removeClass('flipIn').eq(target).addClass('flipIn');

				});



				transition_end_animations('.title-itself', '.left_designer', 'flipMore', target);
				transition_end_animations('.title-itself', '.right_designer', 'opaque', target);




			}


			var transition_end_animations = function (element, element2, class1, target){
					$(element).bind('webkitAnimationEnd animationend', function (){
						$(element2).removeClass(class1).eq(target).addClass(class1);
					});
			}


			var moveUp = function (){

				target === num_of_sections ? target = 0 : target = target+1;
				console.log(target);
				console.log('total '+num_of_sections);
				classChange(target);
				pageTrans();

			}


			var moveDown = function (){

				target === num_of_sections ? target = 0 : target = target-1;
				console.log(target);
				console.log('total '+num_of_sections);
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




			function whatTransition(){
				var e = document.createElement('div');
				if(e.style.webkitTransition) return 'webkitTransitionEnd';
			
				if(e.style.oTransition) return 'oTransitionEnd';
				
				return 'transtionEnd';
				
			}




/////// Arrow keyboards event





/////// Adds responsiveness via window.height.


		var responsive_section = function (){

				window.addEventListener('resize', function (){

					for(var i = 0; i < sections.length; i++){
						sections[i].style.height = window.outterHeight+'px';
						sections[i].style.width = window.innerWidth+'px';

					}

				});

		}


/////  DOES ALL THE MENU SCROOLING ON CLICK AND TOUCH

			var menu_scroll = function (){

				$('.menu-item').bind('click', function (){

					close_Menu();

					var that = $(this);


					target = parseInt($(this).attr('data-page'));
					classChange(target);
					pageTrans();

				});

			}

			menu_scroll();


			var menu_scroll_touch = function (){

				close_Menu();

				var that = $(this);

					target = parseInt($(this).attr('data-page'));
					classChange(target);
					pageTrans();				

			}

			var item_a_menu = document.querySelectorAll('menu-item');


			for(var i = 0; i < item_a_menu.length; i++){
				item_a_menu.addEventListener('touchstart', menu_scroll_touch, false);
			}


				var menu_items = document.getElementsByClassName('menu-item');


				for(var i = 0; i < menu_items.length; i++){
					menu_items[i].addEventListener('touchstart', function (){

					close_Menu();

					var that = $(this);


					target = parseInt($(this).attr('data-page'));
					classChange(target);
					pageTrans();

					});
				}

/////// Disable_arrow : disables arrow key board and space bar navigation. 

		var disable_arrow = function (){

				$(window).keydown(function (e){

					if([40, 30, 32, 38].indexOf(e.keyCode) > -1){
							e.preventDefault();
					}						
				});
		}






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




////// Init 

		

	init();



		







}

one_page_scroll();







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


		function open_Menu(){

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

		}


		$('#menu').bind('click', open_Menu);


		var menu = document.getElementById("menu");

		menu.addEventListener('touchstart', open_Menu, false);


		var a_touch_tag = function (){
			var a_touch = document.querySelectorAll('menu-portfolio');

			for(var i = 0; i < a_touch.length; i++){

				a_touch[i].addEventListener('touchstart', function (){
					var loc = this.getAttribute('href');
					window.location = loc;
				})
			}

		}

		a_touch_tag();

		var touch_port = function (){
			var a = document.querySelectorAll('box-left');

			for(var i = 0; i < a.length; i++){
				a[i].addEventListener('touchstart', function (){
					var loc = this.getAttribute('href');
					window.location = loc;
				})
			}
		}

		touch_port();





	
});
