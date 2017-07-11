var GroovyCat = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="groove"><img src="src/groove.gif"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  
};

GroovyCat.prototype = Object.create(Dancer.prototype);
GroovyCat.prototype.constructor = GroovyCat;


