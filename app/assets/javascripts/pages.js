// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('ready page:load', function (){
  $(".main").UIPageScrolling({
      sectionsControl:".page-control__item",
      captureTouch: true
  });

  $("#to-the-end").on('click', function(){
      $('.main').moveTo(3);
  });

  $("#to-the-begin").on('click', function(){
      $('.main').moveTo(0);
  });

  function slider(){
    var slider = $('.js-slider-items-wrap');
    slider.each(function() {
      var cycle = $(this),
      pager = cycle.parent().find('.js-pager'),
      fx = cycle.data('scrollHorz'),
      speed = cycle.data('fast') || 200;
      if (cycle.children().size() > 0) {
        cycle.cycle({
          timeout:   5000,
          speed:     speed,
          fx:        fx,
          pause: true,
          containerResize: true,
	        slideResize: false,
          slides:'.js-slider-item',
          fit: 1,
          pager: pager,
          pagerAnchorBuilder: function(idx, slide) {
            return '<li><a href="#"></a></li>';
          }
        });
      }
    });
  }
  slider();

  $(window).resize(function(){
    var slider = $('.js-slider-items-wrap');
    slider.css({
    	width: $(".improved-business").outerWidth()
    });
    slider.height = $(".js-slider-items-wrap div:first-child").outerHeight();
  });

//lang
  $('.lang > ul li').click(function(e) {
      $('li.active').removeClass('active');
      var $this = $(this);
      $this.addClass('active');
      e.preventDefault();
  });

// slogan begin ----------------------------------------------------------------
  var super_name = $('h2#super_name');
  super_name.fadeTo(4500 , 0.9);
  super_name.fadeTo(1000 , 0.5);
  super_name.fadeTo(1500 , 1);

  var show_slogan = function() {
    var slogan = $('h3#slogan');
    slogan.hide().contents().each(function() {
      var words;
      if (this.nodeType === 3) {
          words = '<span> ' + this.data.split(/\s+/).join(' </span><span> ') + ' </span>';
          $(this).replaceWith(words);
      } else if (this.nodeType === 1) {
          this.innerHTML = '<span> ' + this.innerHTML.split(/\s+/).join(' </span><span> ') + ' </span>';
      }
    });
    slogan.find('span').hide().each(function() {
        if( !$.trim(this.innerHTML) ) {
            $(this).remove();
        }
    });
    slogan.show().find('span').each(function(i) {
        $(this).delay(500 * i).fadeIn(600);
    });
  }
  setTimeout(show_slogan, 4200);

  // $("#toggle_contacts").on('click', function(){
  //   //some code
  // });
// slogan end ------------------------------------------------------------------

//page-loader ???
  // $(document.body).append('<div id="page-loader">Loading...</div>');
  // $(window).on("beforeunload", function() {
  //     $('#page-loader').fadeIn(1000);
  // });

});
