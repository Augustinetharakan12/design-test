//scorll effect
$(document).ready(function(){
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
  // checks if window is scrolled more than 500px, adds/removes solid class

  if($(this).scrollTop() > 690) { 
      $('.Navbar').addClass('solid');
      $('.Navbar').removeClass('white-text');
  } else {
      $('.Navbar').removeClass('solid');
      $('.Navbar').addClass('white-text');
      
  }

});
$(window).resize(function (){
  if($(window).width()>786){
    $('#navid').toggle();
     $('#navid').show();
  }
});

  });
