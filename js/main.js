//Smooth Scroll
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


// http://stackoverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	function submenu() {

		var menu = document.getElementById( 'main-menu' ),
			trigger = menu.querySelector( 'a.main-menu-trigger' ),
			// triggerPlay only for demo 6
			triggerPlay = document.querySelector( 'a.main-menu-trigger-out' ),
			// event type (if mobile use touch events)
			eventtype = mobilecheck() ? 'touchstart' : 'click',
			resetMenu = function() {
				classie.remove( menu, 'main-menu-open' );
				classie.add( menu, 'main-menu-close' );
			},
			closeClickFn = function( ev ) {
				resetMenu();
				overlay.removeEventListener( eventtype, closeClickFn );
			};

		var overlay = document.createElement('div');
		overlay.className = 'main-overlay';
		menu.appendChild( overlay );

		trigger.addEventListener( eventtype, function( ev ) {
			ev.stopPropagation();
			ev.preventDefault();
			
			if( classie.has( menu, 'main-menu-open' ) ) {
				resetMenu();
			}
			else {
				classie.remove( menu, 'main-menu-close' );
				classie.add( menu, 'main-menu-open' );
				overlay.addEventListener( eventtype, closeClickFn );
			}
		});

		if( triggerPlay ) {
			triggerPlay.addEventListener( eventtype, function( ev ) {
				ev.stopPropagation();
				ev.preventDefault();

				classie.remove( menu, 'main-menu-close' );
				classie.add( menu, 'main-menu-open' );
				overlay.addEventListener( eventtype, closeClickFn );
			});
		}

	}

submenu();





$( document ).ready(function() {

// call isotope

var $container = jQuery('#work');


$('#work').isotope({
  // options
  itemSelector : '.item',
  layoutMode : 'fitRows'
});



// filter items when filter link is clicked
$('#filters li a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});

// Isotope


/**
 var $container = jQuery('#works');
   // initialize isotope
   $container.isotope({
   filter: '.web',
   itemSelector : '.work-item'
   
  });
   
  **/ 
  
  //$container.isotope({ filter: '.marketing' }); 
  // filter items when filter link is clicked
  jQuery('#filters a').click(function(){
  
  //start of edit
  jQuery('#filters a').removeClass("active");
  //adds the class to whichever item you clicked
  jQuery(this).addClass("active");  
  //end of edit
  
  var selector = jQuery(this).attr('data-filter');
  
  if(selector=='*'){
  $container.isotope({ filter: selector });
  }
  else {
  $container.isotope({ filter: ''+selector });
  }
  //alert(selector);
  return false;
  });


  
  //Hover Aware
  
  $.HoverDir = function( options, element ) {

		this.$el = $( element );
		this._init( options );

	};

	// the options
	$.HoverDir.defaults = {
		speed : 300,
		easing : 'ease',
		hoverDelay : 0,
		inverse : false,
		hoverElem : 'div'
	};

	$.HoverDir.prototype = {

		_init : function( options ) {

			// options
			this.options = $.extend( true, {}, $.HoverDir.defaults, options );
			// transition properties
			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
			// support for CSS transitions
			this.support = Modernizr.csstransitions;
			// load the events
			this._loadEvents();

		},
		_loadEvents : function() {

			var self = this;


			this.$el.on( 'mouseenter.hoverdir mouseleave.hoverdir', function( event ) {

				var $el = $( this ),
					$hoverElem = $el.find( self.options.hoverElem ),
					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					styleCSS = self._getStyle( direction );

				if( event.type === 'mouseenter' ) {

					if( self.support ) {
						$hoverElem.css( 'transition', '' );
					}

					$hoverElem.hide().css( styleCSS.from );
					clearTimeout( self.tmhover );

					self.tmhover = setTimeout( function() {

						$hoverElem.show( 0, function() {

							var $el = $( this );
							if( self.support ) {
								$el.css( 'transition', self.transitionProp );
							}
							self._applyAnimation( $el, styleCSS.to, self.options.speed );

						} );

					}, self.options.hoverDelay );

				}
				else {

					if( self.support ) {
						$hoverElem.css( 'transition', self.transitionProp );
					}
					clearTimeout( self.tmhover );
					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );

				}

			} );

		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir : function( $el, coordinates ) {

			// the width and height of the current div
			var w = $el.width(),
				h = $el.height(),

				// calculate the x and y to get an angle to the center of the div from that x and y.
				// gets the x value relative to the center of the DIV and "normalize" it
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),

				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
				// first calculate the angle of the point,
				// add 180 deg to get rid of the negative values
				// divide by 90 to get the quadrant
				// add 3 and do a modulo by 4 to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;

			return direction;

		},
		_getStyle : function( direction ) {

			var fromStyle, toStyle,
				slideFromTop =    { 'left' : '0', 'top' : '-100%' },
				slideFromBottom = { 'left' : '0', 'top' : '100%' },
				slideFromLeft =   { 'left' : '-100%', 'top' : '0' },
				slideFromRight =  { 'left' : '100%', 'top' : '0' },
				slideTop =        { 'top'  : '0' },
				slideLeft =       { 'left' : '0' };

			switch( direction ) {
				case 0:
					// from top
					fromStyle = ! this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = ! this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = ! this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = ! this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			}

			return { from : fromStyle, to : toStyle };

		},
		// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
		_applyAnimation : function( el, styleCSS, speed ) {

			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed } ) );

		}

	};

	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );

		}

	};

	$.fn.hoverdir = function( options ) {

		var instance = $.data( this, 'hoverdir' );

		if ( typeof options === 'string' ) {

			var args = Array.prototype.slice.call( arguments, 1 );

			this.each( function() {

				if ( ! instance ) {

					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;

				}

				if ( ! $.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for hoverdir instance" );
					return;

				}

				instance[ options ].apply( instance, args );

			});

		} 
		else {

			this.each( function() {

				if ( instance ) {

					instance._init();

				}
				else {

					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );

				}

			});

		}

		return instance;

	};
  
  
  
  
$('#work section').each( function() { $(this).hoverdir(); } );  







//Overlays


//overlay 1
var item1triggerBttn = document.getElementById( 'item1-open' ),
		overlay1 = document.querySelector( 'div.item1' ),
		closeBttn = overlay1.querySelector( 'button.item-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay1, 'open' ) ) {
			classie.remove( overlay1, 'open' );
			classie.add( overlay1, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay1, 'close' );
			};
			if( support.transitions ) {
				overlay1.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay1, 'close' ) ) {
			classie.add( overlay1, 'open' );
		}
	}

	item1triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );	
	
	
	//overlay 2
var item2triggerBttn = document.getElementById( 'item2-open' ),
		overlay2 = document.querySelector( 'div.item2' ),
		closeBttn2 = overlay2.querySelector( 'button.item-close2' );
		transEndEventNames2 = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName2 = transEndEventNames2[ Modernizr.prefixed( 'transition' ) ],
		support2 = { transitions : Modernizr.csstransitions };

	function overlayB() {
		if( classie.has( overlay2, 'open' ) ) {
			classie.remove( overlay2, 'open' );
			classie.add( overlay2, 'close' );
			var onEndTransitionFn2 = function( ev ) {
				if( support2.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName2, onEndTransitionFn2 );
				}
				classie.remove( overlay2, 'close' );
			};
			if( support2.transitions ) {
				overlay2.addEventListener( transEndEventName2, onEndTransitionFn2 );
			}
			else {
				onEndTransitionFn2();
			}
		}
		else if( !classie.has( overlay2, 'close' ) ) {
			classie.add( overlay2, 'open' );
		}
	}

	item2triggerBttn.addEventListener( 'click', overlayB );
	closeBttn2.addEventListener( 'click', overlayB );	
	



	//overlay 3
var item3triggerBttn = document.getElementById( 'item3-open' ),
		overlay3 = document.querySelector( 'div.item3' ),
		closeBttn3 = overlay3.querySelector( 'button.item-close3' );
		transEndEventNames3 = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName3 = transEndEventNames3[ Modernizr.prefixed( 'transition' ) ],
		support3 = { transitions : Modernizr.csstransitions };

	function overlayC() {
		if( classie.has( overlay3, 'open' ) ) {
			classie.remove( overlay3, 'open' );
			classie.add( overlay3, 'close' );
			var onEndTransitionFn3 = function( ev ) {
				if( support3.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName3, onEndTransitionFn3 );
				}
				classie.remove( overlay3, 'close' );
			};
			if( support3.transitions ) {
				overlay3.addEventListener( transEndEventName3, onEndTransitionFn3 );
			}
			else {
				onEndTransitionFn3();
			}
		}
		else if( !classie.has( overlay3, 'close' ) ) {
			classie.add( overlay3, 'open' );
		}
	}

	item3triggerBttn.addEventListener( 'click', overlayC );
	closeBttn3.addEventListener( 'click', overlayC );	
	
	
//overlay 4
var item4triggerBttn = document.getElementById( 'item4-open' ),
		overlay4 = document.querySelector( 'div.item4' ),
		closeBttn4 = overlay4.querySelector( 'button.item-close4' );
		transEndEventNames4 = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName4 = transEndEventNames4[ Modernizr.prefixed( 'transition' ) ],
		support4 = { transitions : Modernizr.csstransitions };

	function overlayD() {
		if( classie.has( overlay4, 'open' ) ) {
			classie.remove( overlay4, 'open' );
			classie.add( overlay4, 'close' );
			var onEndTransitionFn4 = function( ev ) {
				if( support4.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName4, onEndTransitionFn4 );
				}
				classie.remove( overlay4, 'close' );
			};
			if( support4.transitions ) {
				overlay4.addEventListener( transEndEventName4, onEndTransitionFn4 );
			}
			else {
				onEndTransitionFn4();
			}
		}
		else if( !classie.has( overlay4, 'close' ) ) {
			classie.add( overlay4, 'open' );
		}
	}

	item4triggerBttn.addEventListener( 'click', overlayD );
	closeBttn4.addEventListener( 'click', overlayD );	
	

//overlay 5
var item5triggerBttn = document.getElementById( 'item5-open' ),
		overlay5 = document.querySelector( 'div.item5' ),
		closeBttn5 = overlay5.querySelector( 'button.item-close5' );
		transEndEventNames5 = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName5 = transEndEventNames5[ Modernizr.prefixed( 'transition' ) ],
		support5 = { transitions : Modernizr.csstransitions };

	function overlayE() {
		if( classie.has( overlay5, 'open' ) ) {
			classie.remove( overlay5, 'open' );
			classie.add( overlay5, 'close' );
			var onEndTransitionFn5 = function( ev ) {
				if( support5.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName5, onEndTransitionFn5 );
				}
				classie.remove( overlay5, 'close' );
			};
			if( support5.transitions ) {
				overlay5.addEventListener( transEndEventName5, onEndTransitionFn5 );
			}
			else {
				onEndTransitionFn5();
			}
		}
		else if( !classie.has( overlay5, 'close' ) ) {
			classie.add( overlay5, 'open' );
		}
	}

	item5triggerBttn.addEventListener( 'click', overlayE );
	closeBttn5.addEventListener( 'click', overlayE );
	

	
//overlay 6
var item6triggerBttn = document.getElementById( 'item6-open' ),
		overlay6 = document.querySelector( 'div.item6' ),
		closeBttn6 = overlay6.querySelector( 'button.item-close6' );
		transEndEventNames6 = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName6 = transEndEventNames6[ Modernizr.prefixed( 'transition' ) ],
		support6 = { transitions : Modernizr.csstransitions };

	function overlayF() {
		if( classie.has( overlay6, 'open' ) ) {
			classie.remove( overlay6, 'open' );
			classie.add( overlay6, 'close' );
			var onEndTransitionFn6 = function( ev ) {
				if( support6.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName6, onEndTransitionFn6 );
				}
				classie.remove( overlay6, 'close' );
			};
			if( support6.transitions ) {
				overlay6.addEventListener( transEndEventName6, onEndTransitionFn6 );
			}
			else {
				onEndTransitionFn6();
			}
		}
		else if( !classie.has( overlay6, 'close' ) ) {
			classie.add( overlay6, 'open' );
		}
	}

	item6triggerBttn.addEventListener( 'click', overlayF );
	closeBttn6.addEventListener( 'click', overlayF );		
	


//overlay 7
var item7triggerBttn = document.getElementById( 'item7-open' ),
		overlay7 = document.querySelector( 'div.item7' ),
		closeBttn7 = overlay7.querySelector( 'button.item-close7' );
		transEndEventNames7 = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName7 = transEndEventNames7[ Modernizr.prefixed( 'transition' ) ],
		support7 = { transitions : Modernizr.csstransitions };

	function overlayG() {
		if( classie.has( overlay7, 'open' ) ) {
			classie.remove( overlay7, 'open' );
			classie.add( overlay7, 'close' );
			var onEndTransitionFn7 = function( ev ) {
				if( support7.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName7, onEndTransitionFn7 );
				}
				classie.remove( overlay7, 'close' );
			};
			if( support7.transitions ) {
				overlay7.addEventListener( transEndEventName7, onEndTransitionFn7 );
			}
			else {
				onEndTransitionFn7();
			}
		}
		else if( !classie.has( overlay7, 'close' ) ) {
			classie.add( overlay7, 'open' );
		}
	}

	item7triggerBttn.addEventListener( 'click', overlayG );
	closeBttn7.addEventListener( 'click', overlayG );
	
	
	
//overlay 8
var item8triggerBttn = document.getElementById( 'item8-open' ),
		overlay8 = document.querySelector( 'div.item8' ),
		closeBttn8 = overlay8.querySelector( 'button.item-close8' );
		transEndEventNames8 = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName8 = transEndEventNames8[ Modernizr.prefixed( 'transition' ) ],
		support8 = { transitions : Modernizr.csstransitions };

	function overlayH() {
		if( classie.has( overlay8, 'open' ) ) {
			classie.remove( overlay8, 'open' );
			classie.add( overlay8, 'close' );
			var onEndTransitionFn8 = function( ev ) {
				if( support8.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName8, onEndTransitionFn8 );
				}
				classie.remove( overlay8, 'close' );
			};
			if( support8.transitions ) {
				overlay8.addEventListener( transEndEventName8, onEndTransitionFn8 );
			}
			else {
				onEndTransitionFn8();
			}
		}
		else if( !classie.has( overlay8, 'close' ) ) {
			classie.add( overlay8, 'open' );
		}
	}

	item8triggerBttn.addEventListener( 'click', overlayH );
	closeBttn8.addEventListener( 'click', overlayH );



//Faces 2

var className;
var imageTop;
var imageLeft;
var imageBottom;
var imageRight;

function HeadImage(className){
    
    /* Setting the global instance of classname to the given parameter*/
    this.className = className;
    
    /* Calculating the borders of the image */
    this.imageLeft = $("."+this.className+">.head-image").offset().left;
    this.imageRight = this.imageLeft + $("."+this.className+">.head-image").width();
    this.imageTop = $("."+this.className+">.head-image").offset().top;
    this.imageBottom = this.imageTop + $("."+this.className+">.head-image").height();
    
    /* This function determines where the mouse pointer is relative to the image
     * and displays the correct image accordingly. */
    this.setImageDirection = function(){
        $("."+this.className+">.head-image").css({"z-index":"0", "opacity":"0"});
        if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY <= this.imageTop){
            $("."+this.className+">.up").css({"z-index":"1", "opacity":"1"});
        } else if(mouseX < this.imageLeft && mouseY < this.imageTop){
            $("."+this.className+">.up-left").css({"z-index":"1", "opacity":"1"});
        } else if(mouseX <= this.imageLeft && mouseY >= this.imageTop && mouseY <= this.imageBottom){
            $("."+this.className+">.left").css({"z-index":"1", "opacity":"1"});
        } else if(mouseX < this.imageLeft && mouseY > this.imageBottom){
            $("."+this.className+">.down-left").css({"z-index":"1", "opacity":"1"});
        } else if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY >= this.imageBottom){
            $("."+this.className+">.down").css({"z-index":"1", "opacity":"1"});
        } else if(mouseX > this.imageRight && mouseY > this.imageBottom){
            $("."+this.className+">.down-right").css({"z-index":"1", "opacity":"1"});
        } else if(mouseX >= this.imageRight && mouseY >= this.imageTop && mouseY <= this.imageBottom){
            $("."+this.className+">.right").css({"z-index":"1", "opacity":"1"});
        } else if(mouseX > this.imageRight && mouseY < this.imageTop){
            $("."+this.className+">.up-right").css({"z-index":"1", "opacity":"1"});
        } else{
            $("."+this.className+">.front").css({"z-index":"1", "opacity":"1"});
            $(".text-holder").css("display","none");
            $("."+this.className+".text-holder").css("display","block");
        }
    };
}







/* Declaring the global variables */
            var mouseX;
            var mouseY;
            var imageOne;
            var imageTwo;
            var imageThree;
            var imageFour;
            var imageFive;
            
            /* Calling the initialization function */
            $(init);
            
            /* The images need to re-initialize on load and on resize, or else the areas
             * where each image is displayed will be wrong. */
            $(window).load(init);
            $(window).resize(init);
            
            /* Setting the mousemove event caller */
            $(window).mousemove(getMousePosition);
            
            /* This function is called on document ready, on load and on resize
             * and initiallizes all the images */
            function init(){
                
                /* Instanciate the mouse position variables */
                mouseX = 0;
                mouseY = 0;
                
                /* Instanciate a HeadImage class for every image */
                imageOne = new HeadImage("one");
                imageTwo = new HeadImage("two");
            //    imageThree = new HeadImage("three");
            //    imageFour = new HeadImage("four");
            //    imageFive = new HeadImage("five");
            }
            
            /* This function is called on mouse move and gets the mouse position. 
             * It also calls the HeadImage function to display the correct image*/
            function getMousePosition(event){
                
                /* Setting the mouse position variables */
                mouseX = event.pageX;
                mouseY = event.pageY;
                
                /*Calling the setImageDirection function of the HeadImage class
                 * to display the correct image*/
                imageOne.setImageDirection();
                imageTwo.setImageDirection();
            //    imageThree.setImageDirection();
            //    imageFour.setImageDirection();
            //    imageFive.setImageDirection();
            }

/**
$("div.pager").jPages({
    containerID : "work",
	perPage : 4,
	links       : "blank",
	animation   : "flipInY"
  });

  
/**
  $("div.pager").jPages({
        containerID : "g-container",
        perPage : 2
    });
   
  **/
  
 //Box lines 
  
$('.about, .portfolio, .blog, .contact').prepend( '<span class="topIn"></span> <span class="topOut"></span> <span class="leftIn"></span> <span class="leftOut"></span> <span class="rightIn"></span> <span class="rightOut"></span> <span class="bottomIn"></span> <span class="bottomOut"></span>' );
  
 
function linesIn() {
//lines In
var t1 = $('.topIn');	
var t2 = $('.topOut');
var l1 = $('.leftIn');
var l2 = $('.leftOut');
var r1 = $('.rightIn');
var r2 = $('.rightOut');
var b1 = $('.bottomIn');
var b2 = $('.bottomOut');

TweenMax.to(t1, 0.6, {width: '1%'});
TweenMax.to(t2, 0.8, {width: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(l1, 0.8, {height: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(l2, 0.6, {height: '1%'});
TweenMax.to(r1, 0.8, {height: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(r2, 0.6, {height: '1%'});
TweenMax.to(b1, 0.8, {width: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(b2, 0.6, {width: '1%'});

}; 
  
function linesOut() {
//lines Out
var t1 = $('.topIn');	
var t2 = $('.topOut');
var l1 = $('.leftIn');
var l2 = $('.leftOut');
var r1 = $('.rightIn');
var r2 = $('.rightOut');
var b1 = $('.bottomIn');
var b2 = $('.bottomOut');

TweenMax.to(t1, 0.8, {width: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(t2, 0.6, {width: '1%'});
TweenMax.to(l1, 0.6, {height: '1%'});
TweenMax.to(l2, 0.8, {height: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(r1, 0.6, {height: '1%'});
TweenMax.to(r2, 0.8, {height: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(b1, 0.6, {width: '1%'});
TweenMax.to(b2, 0.8, {width: '100%', delay: 0.2, ease: "Expo.easeInOut"});


}; 
 
 
$('.about').hover( linesIn, linesOut );
$('.portfolio').hover( linesIn, linesOut );
$('.blog').hover( linesIn, linesOut );
$('.contact').hover( linesIn, linesOut );
  
/**  
  
$('.about').hover(

function(){
var t1 = $('.topIn');	
var t2 = $('.topOut');
var l1 = $('.leftIn');
var l2 = $('.leftOut');
var r1 = $('.rightIn');
var r2 = $('.rightOut');
var b1 = $('.bottomIn');
var b2 = $('.bottomOut');

	
TweenMax.to(t1, 0.6, {width: '1%'});
TweenMax.to(t2, 0.8, {width: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(l1, 0.8, {height: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(l2, 0.6, {height: '1%'});
TweenMax.to(r1, 0.8, {height: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(r2, 0.6, {height: '1%'});
TweenMax.to(b1, 0.8, {width: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(b2, 0.6, {width: '1%'});

},
function(){
var t1 = $('.topIn');	
var t2 = $('.topOut');
var l1 = $('.leftIn');
var l2 = $('.leftOut');
var r1 = $('.rightIn');
var r2 = $('.rightOut');
var b1 = $('.bottomIn');
var b2 = $('.bottomOut');
		
TweenMax.to(t1, 0.8, {width: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(t2, 0.6, {width: '1%'});
TweenMax.to(l1, 0.6, {height: '1%'});
TweenMax.to(l2, 0.8, {height: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(r1, 0.6, {height: '1%'});
TweenMax.to(r2, 0.8, {height: '100%', delay: 0.2, ease: "Expo.easeInOut"});
TweenMax.to(b1, 0.6, {width: '1%'});
TweenMax.to(b2, 0.8, {width: '100%', delay: 0.2, ease: "Expo.easeInOut"});
}

);
  
**/ 


//Text typing for code wall

//$('.code-wall').prepend( '' );
var codearray = [];

codearray.push( '<pre>' );
codearray.push( 'meta name="description" content=""' );
codearray.push( '<br />' );
codearray.push( 'meta name="viewport" content="width=device-width"' );
codearray.push( '<br />' );
codearray.push( 'link rel="stylesheet" href="css/bootstrap.min.css"' );
codearray.push( '<br />' );
codearray.push( 'link rel="stylesheet" href="css/font-awesome.min.css"' );
codearray.push( '<br />' );
codearray.push( 'link rel="stylesheet" href="css/bootstrap.min.css"' );
codearray.push( '<br />' );
codearray.push( 'link rel="stylesheet" href="css/font-awesome.min.css"' );
codearray.push( '<br />' );
codearray.push( 'link rel="stylesheet" href="css/bootstrap.min.css"' );
codearray.push( '<br />' );
codearray.push( 'link rel="stylesheet" href="css/bootstrap.min.css"' );
codearray.push( '<br />' );
codearray.push( 'link rel="stylesheet" href="css/bootstrap.min.css"' );
codearray.push( '<br />' );
codearray.push( 'link rel="stylesheet" href="css/font-awesome.min.css"' );
codearray.push( '<br />' );
codearray.push( 'border-top: 15px solid transparent; ' );
codearray.push( '<br />' );
codearray.push( 'border-bottom: 45px solid transparent; ' );
codearray.push( '<br />' );
codearray.push( 'var r1 = $(".rightIn, .rightOut, .leftIn, .leftOut, .topIn, .topOut")\;' );
codearray.push( '<br />' );
codearray.push( 'script src="js/someotherjavscricpt.js"' );
codearray.push( "</pre>" );

var codes = codearray.join( " " );

//$('.code-wall').prepend(codes);
$('.code-wall').append(codes);

 $('div.code-wall').textTyper({repeatAnimation:true,repeatTimes:0});
 

 
 
 //Contact
 /**
 $('#form-trigger').click(function(){
    $('.contact-right').addClass('flip');
 });
 
 $('#form-close').click(function(){
    $('.contact-right').removeClass('flip');
 });
 **/
 
        $('.open-contact').click(function(e){
			$('.contact-right').addClass('flip');
			e.preventDefault();
		});
		$('.close-contact').click(function(e){
			$('.contact-right').removeClass('flip');
			e.preventDefault();
		});
 
 
 // Contact Form
    $("#contact-form").submit(function(e){
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
		
    function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
    };

    if (isValidEmail(email) && (name.length > 2)){
    $.ajax({
    type: "POST",
    url: "contact.php",
	data: $('#contact-form').serialize(),
    success: function(){
    $('.success').show('fast');
	setTimeout(function(){ $('.success').hide();}, 3000);
//	$("#contact-form")[0].reset();
    }
    });
    } else{
    $('.error').show('fast');
	setTimeout(function(){ $('.error').hide();}, 3000);
    }
    return false;
	
    });
 
 //Fly in boxes
 
 
  
});





