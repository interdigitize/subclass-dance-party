var GroovyCat = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="groove exit"><img src="src/groove.gif" loop=infinite ></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  
};

GroovyCat.prototype = Object.create(Dancer.prototype);
GroovyCat.prototype.constructor = GroovyCat;


