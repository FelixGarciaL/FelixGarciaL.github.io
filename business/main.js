$(document).ready(function($) {

	function clickButton(){

	for(var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener('click', function (){
			var target = this.getAttribute('data-index');
			console.log(target);
			classChange(target);
			pageTrans();
		});
		}
	}

	//clickButton();
	//
	//
	//	

	function responsive_height(){
		$('.container').css({
			height : window.innerHeight
		});
	}
	responsive_height();
	$(window).resize(responsive_height);



	function navigation_activation(target){

			$('#nav-wrapper div').removeClass('nav-active').eq(target).addClass('nav-active');
	}



	function classChange(target){
		$('section').removeClass('active').eq(target).addClass('active');	

		$('.container').bind('webkitTransitionEnd, transitionend mozTransitionEnd', function (){

			navigation_activation(target);

			$('.svg-effect-logo').removeClass('svg-dash').eq(target).addClass('svg-dash');
			
			$('.logo-svg').removeClass('rotateBox').eq(target).addClass('rotateBox');
		
			$('.svg-effect-2').removeClass('svg-dash-2').eq(target).addClass('svg-dash-2');

			$('.head-move').removeClass('text-mover').eq(target).addClass('text-mover');

					$('.head-move').bind('transitionend webkitTransitionEnd mozTransitionEnd', function (){
	
						$('.intro-text').removeClass('text-active').eq(target).addClass('text-active');
						$('.view-section').removeClass('view-active').eq(target).addClass('view-active');			

					})

			});

	}
	
	var target = 0;

	$('section').each(function (index){
		$(this).css({
			'top': index*window.innerHeight+'px',
			'height': window.innerHeight+'px'
		})
	})

	function classUp(){
		target === 5 ? target = 0 : target = target +1;
		console.log(target);
		classChange(target);
		pageTrans();
		
	}

	function classDown(){
		target === 5 ? target = 0 : target = target -1;
		console.log(target);
		classChange(target);
		pageTrans();

	
	}

	function pageTrans(){
		var pos = $('section.active').attr('data-height');
		console.log(pos);
		$('.container').css({'transform': 'translate3d(0,-'+ pos +'px, 0)'});
	}


	var sections = document.getElementsByTagName('section');
	for(var i = 0; i < sections.length; i++){
		sections[i].setAttribute('data-height', sections[i].offsetTop);
	}

	function transitionFinish(){

	}


	function whatTransition(){
		var e = document.createElement('div');
		if(e.style.webkitTransition) return 'webkitTransitionEnd';
	
		if(e.style.oTransition) return 'oTransitionEnd';
		
		return 'transtionEnd';
		
	}

	var transitionEndType = whatTransition();
	


	var timeNow = 0;
	

	

	function startPageScroll(){
	$(document).bind('mousewheel  DomMouseScroll MozMousePixelScroll', function (event){
		//event.preventDefault();
		var delta  = event.originalEvent.wheelDelta || -event.originalEvent.detail;

		var animationStart = new Date().getTime();
		

		if((timeNow+1400) > animationStart){
			//event.preventDefault();
			
			return false;
		}

	
		else{
		if(delta < 0){
			classUp();
			close_display();

		}

		else{
			classDown();
			close_display();

		}
		}
		

		timeNow = animationStart;


	});

	}


	startPageScroll();


	//// DISPLAY ACTIVATION 
	///


	$('.view-section').bind('click', function (){

			$('.left-display').removeClass('left-hide').addClass('left-show');
				$('.right-display').animate({
					width: '80%'
				}, 200);

			$('.section-contained-1').css({
				display: 'none'
			})

	});



	$('.close-display').bind('click', close_display);

	function close_display(){

					$('.right-display').animate({
						width: '0%'
					}, 200, function (){

						$('.left-display').removeClass('left-show').addClass('left-hide');


					});


					$('.section-contained-1').css({
						display: 'block'
					});

	}




	/// TABS
	/// 

	var $panels = $('.panel');
	var $tabs = $('.display-tabs');
 	
	$tabs.on('click', 'a', function (e){
		e.preventDefault();
		var id = $(this).attr('href');
		
		$panels.filter(':not([hidden])').attr('hidden', true);
		$(id).removeAttr('hidden');
		
		$tabs.find('.js-current').removeClass('js-current');
		$(this).addClass('js-current');
		
	});




	$(document.body).bind('mousemove', function (e){
			var posx = e.clientX / 12;
			var posy = e.clientY / 16;

			$('.big-back-letter').css({
				top: 250 - posy,
				left: 20 - posx,
			})

	});




	$('#nav-wrapper div').bind('click', function (){
			target = parseInt($(this).attr('data-page'));
			classChange(target);
			pageTrans();
	})


	
});