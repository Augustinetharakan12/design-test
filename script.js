//scorll effect
$(document).ready(function(){
  //preloader
  $(window).on("load", function() {
    preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });


    $('.wp-zone').waypoint(function(direction) {
    if (direction === 'down') {
      $('nav a').removeClass('disable-click');
      var selector = "nav a[href='#" + this.element.id + "']";
      $(selector).addClass('disable-click');
    }
    }, {
    offset: '5%'
  });
  
    $('.wp-zone').waypoint(function(direction) {
      if (direction === 'up') {
        $('nav a').removeClass('disable-click');
        var selector = "nav a[href='#" + this.element.id + "']";
        $(selector).addClass('disable-click');
      }
    }, {
      offset: '-5%'
  });

  
  //navbar
 $('#trigger').click( function(event) {
    if($(window).width() < 786){
      event.stopPropagation();
      $('#navid').addClass('solid');
      $('#navid').toggle();
      $(document).click( function() {
        $('#navid').hide();
        
     });  
    
    }  
   });

   $(window).resize(function (){
    if($(window).width() < 786){
      $('#navid').hide();
      $('.Navbar').addClass('white-text');
    }
});

$(window).scroll(function() {
  // checks if window is scrolled more than certain px, adds/removes solid class

  if($(this).scrollTop() > 690) { 
      $('.Navbar').addClass('solid');
      $('.Navbar').removeClass('white-text');
      $('.Navbar-Link a').css("color","black");
    } else {
      $('.Navbar').removeClass('solid');
      $('.Navbar').addClass('white-text');
      $('.Navbar-Link a').css("color","white");
      
  }

});

//transparency effect
$(window).scroll(
  {
      previousTop: 0
  }, 
  function () {
  var currentTop = $(window).scrollTop();
  if (currentTop < this.previousTop) {
    $('.Navbar').removeClass("slideUp");
    $('.Navbar').addClass("slideDown");
  } else {
    $('.Navbar').removeClass("slideDown");
    $('.Navbar').addClass("slideUp");
  }
  this.previousTop = currentTop;
});



$(window).resize(function (){
  if($(window).width()>786){
    $('#navid').toggle();
     $('#navid').show();
  }
});

//experience
$('.quotes').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 800,
  slidesToShow: 1,
  adaptiveHeight: false
});


  });
