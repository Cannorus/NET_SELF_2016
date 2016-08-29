function Vector(x,y)
{
  this.x = x;
  this.y = y;
}

Object.defineProperty(Vector.prototype,"length",{
	get: function() {
      return Math.sqrt(this.x*this.x+this.y*this.y);
    }
});

Vector.prototype.plus = function(summand){
  return new Vector(this.x+summand.x,this.y+summand.y);
};

Vector.prototype.minus = function(summand){
  return new Vector(this.x-summand.x,this.y-summand.y);
};

console.log(new Vector(1, 2).plus(new Vector(2, 3)));

console.log(new Vector(1, 2).minus(new Vector(2, 3)));

console.log(new Vector(3, 4).length);