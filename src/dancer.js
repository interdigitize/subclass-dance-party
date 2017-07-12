// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  
  $('.line-up').on('click', Dancer.prototype.lineUp);

};

Dancer.prototype.constructor = Dancer;
Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  var dancer = this;
  setTimeout(dancer.step.bind(dancer), dancer.timeBetweenSteps);
  $('.exit').on('click', function() {
    $('.exit').css('animation-name', 'slideout');
    setTimeout(function() {
      $('.exit').remove();
    }, 3000);
  });
  
};

Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  //body width
  var bodyWidth = $('body').width();
  //how many dancers
  var numDancers = window.dancers.length;
  var spacePerDancer = (bodyWidth - 180) / numDancers;
  window.dancers.forEach(function(dancer, index) {
    $(dancer.$node).css('top', '55%');
    $(dancer.$node).css('left', spacePerDancer * index);
  });
};

