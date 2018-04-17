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
  if($(window).width() > 786){
    $('#navid').show();
  }
});

  });
