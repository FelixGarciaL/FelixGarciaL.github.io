


$(document).ready(function (e){



function id(e){
	return document.getElementById(e);
};


function tagname(e){
	return document.getElementsByTagName(e);
}



function scrolling(){

		window.scrollTo(0, 3400);


}


$('.slide').each(function (index){
	$(this).attr('data-left', $(this).offset().left);
});

	var target = 0;
	var slides = $('.slide');
	var slide_number = slides.length -1;

	function sliding(target){
		$('.slider').removeClass('active-slide').eq(target).addClass('active-slide');
	}


	function class_switch(target){
		target = $('.slide.active-slide').index();
		target === slides ? target = 0 : target = target + 1;
		console.log(target);
		sliding(target);
		slider_margin()
	}


	var slider_interval = setInterval(function (){

		class_switch(target);

		}, 2000);


	function slider_margin(){

		$('.slider-project').css({
			left: $('.slide').find('.slide_active').attr('data-left')
		})

	}







	var display = false;


		function close_Menu(){

				$('.menu-item').removeClass('menu-active').addClass('menu-inactive');

				$('#popup-menu').animate({
					opacity: 0,
				}, 600, function (){

					$('#popup-menu').css('zIndex', '-9998');

				});

				display = false;

		}


		function open_Menu (){

				$('#popup-menu').css('zIndex', '9998');
				
				$('#popup-menu').animate({
					opacity: 1,
				}, 600, function (){

					$('.menu-item').removeClass('menu-inactive').addClass('menu-active');
				});

				display = true;

		}


		function menu_button (){
			
			$('#menu-button .menu-bar:nth-child(1)').toggleClass('rot45');
			$('#menu-button .menu-bar:nth-child(2)').toggleClass('opacity');
			$('#menu-button .menu-bar:nth-child(3)').toggleClass('rot-45');
		}


		$('#menu-button').bind('click', function (){


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

		var sections = $_('section.menu-scroll');

		for(var i = 0; i < sections.length; i++){

				$_('.menu-item')[i].setAttribute('data-top', sections[i].offsetTop);

		}



		function menu_scroll(){

			$('.menu-item').bind('click', function (e){
				e.preventDefault();
				close_Menu();
				menu_button();

				var that = $(this);

				$('html, body').animate({
					scrollTop : that.attr('data-top')
				}, 700);

			});

		}


		menu_scroll();




})



