var BowCat = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="thankyou exit"><img src="src/thankyou.gif"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  
};

BowCat.prototype = Object.create(Dancer.prototype);
BowCat.prototype.constructor = BowCat;

