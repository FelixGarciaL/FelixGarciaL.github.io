$(document).ready(function (){


  $(window).load(function (){

    $('#loader').fadeOut();

  });



	$('#datepicker').datepicker();

	var display = false;


		function close_Menu(){

				$('.menu-item').removeClass('menu-active').addClass('menu-inactive');

				$('.menu-wrapper').animate({
					opacity: 0,
				}, 600, function (){

					$('.menu-wrapper').css('zIndex', '-9998');

				});

				display = false;

		}


		function open_Menu (){

				$('.menu-wrapper').css('zIndex', '9998');
				
				$('.menu-wrapper').animate({
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


		
		function selector_(e){
			return document.querySelectorAll(e);
		}


		var sections = selector_('.section-part');

		for(var i = 0; i < sections.length; i++){

				selector_('.menu-item')[i].setAttribute('data-top', sections[i].offsetTop);

		}



		function menu_scroll(){

			$('.menu-item').bind('click', function (){

				close_Menu();
				menu_button();

				var that = $(this);

				$('body, html').animate({
					scrollTop : that.attr('data-top')
				}, 600);

			});




		}


		menu_scroll();


      $("#svg-anchor-wrapper").bind('click', function (e){
          
          e.preventDefault();

          var table = parseInt($('#four').offset().top);

          $('body, html').animate({
            scrollTop : table
          }, 500);

      });



      $('.company-size').bind('click', function (){

          $('.cube-3D > .back-cube').removeClass('back-backed').addClass('fronted');
          $('.cube-3D > .front-cube').removeClass('fronted').addClass('backed');


      });


      $('#go-back').bind('click', function (){

          $('.cube-3D > .back-cube').removeClass('fronted').addClass('back-backed');
          $('.cube-3D > .front-cube').removeClass('backed').addClass('fronted');


      });

/*

		$('.company-size').bind('click', function (){

			$('.cube-3D > .back-cube').css({
     			 'transform': 'perspective( 1000px ) rotateY(0deg)',
     			 '-webkit-transform': 'perspective( 1000px ) rotateY(0deg)',
           '-moz-transform': 'perspective( 1000px ) rotateY(0deg)',
           '-ms-transform': 'perspective( 1000px ) rotateY(0deg)'
			});

			$('.cube-3D > .front-cube').css({
     			 'transform': 'perspective( 1000px ) rotateY(-180deg)',
     			 '-webkit-transform': 'perspective( 1000px ) rotateY(-180deg)',
           '-moz-transform': 'perspective( 1000px ) rotateY(-180deg)',
           '-ms-transform': 'perspective( 1000px ) rotateY(-180deg)'
			});

		});

		$('#go-back').bind('click', function (){


			$('.cube-3D > .back-cube').css({
     			 'transform': 'perspective( 1000px ) rotateY(180deg)',
     			 '-webkit-transform': 'perspective( 1000px ) rotateY(180deg)',
           '-moz-transform': 'perspective( 1000px ) rotateY(180deg)',
           '-ms-transform': 'perspective( 1000px ) rotateY(180deg)'
			});

			$('.cube-3D > .front-cube').css({
     			 'transform': 'perspective( 1000px ) rotateY(0deg)',
     			 '-webkit-transform': 'perspective( 1000px ) rotateY(0deg)',
           '-moz-transform': 'perspective( 1000px ) rotateY(0deg)',
           '-ms-transform': 'perspective( 1000px ) rotateY(0deg)'
			});

		});


*/








});







  function initialize () {
    var styles = 
[
  {
    "featureType": "landscape",
    "stylers": [
      { "color": "#808080" },
      { "lightness": -53 },
      { "saturation": -81 }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      { "weight": 0.5 },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "weight": 0.3 }
    ]
  },{
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" },
      { "color": "#088080" },
      { "weight": 0.1 }
    ]
  },{
    "featureType": "poi.business",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "color": "#808080" },
      { "lightness": -100 },
      { "gamma": 0.62 }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      { "gamma": 0.44 },
      { "color": "#080b5c" },
      { "hue": "#ff00cc" },
      { "visibility": "off" },
      { "lightness": 100 },
      { "saturation": -21 }
    ]
  }
]


      


      var styledMap = new google.maps.StyledMapType(styles,
        {name: "StyledMap"});


    var mapProp = {
        center: new google.maps.LatLng(51.515009, -0.113080),
        zoom: 16,
        disableDefaultUI: true,
        mapTypeControlOptions:{
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }

    };

    var map = new google.maps.Map(document.getElementById('gmap'), mapProp);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    //MARKER

    var marker = new google.maps.Marker({
      position: mapProp.center,
      
    });

    marker.setMap(map);

    //INFOWINDOW

    var infowindow = new google.maps.InfoWindow({

      content: 'Michelin Restaurant',
    });

    google.maps.event.addListener(marker, 'click', function(){

        infowindow.open(map,marker);

    });

    //NEARBY

    


  }



google.maps.event.addDomListener(window, 'load', initialize);











