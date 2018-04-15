$(document).ready(function(){

    //waypoints
    //down
    $('.wp-zone').waypoint(function(direction) {
    if (direction === 'down') {
      $('nav a').removeClass('disable-click');
      // form the selector dynamically.
      // "this" keyword refers waypoint object and the element is located at "this.element"
      // using "this.element.id", get the nav anchor you want to target
      // example: "nav a[href='#landing']"
      var selector = "nav a[href='#" + this.element.id + "']"; 
      $(selector).addClass('disable-click');
    }
    }, {
    offset: '5%'
  });
  //up
    $('.wp-zone').waypoint(function(direction) {
      if (direction === 'up') {
        $('nav a').removeClass('disable-click');
        var selector = "nav a[href='#" + this.element.id + "']"; 
        $(selector).addClass('disable-click');
      }
    }, {
      offset: '-5%'
  }); 
    
  });