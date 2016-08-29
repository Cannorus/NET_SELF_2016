function Tiger() {
  this.energy = 100;
  this.direction = "w";
  
  this.preySeen = [];
}
Tiger.prototype.act = function(view) {

  var seenPerTurn = this.preySeen.reduce(function(a, b) {
    return a + b;
  }, 0) / this.preySeen.length;
  var prey = view.findAll("O");
  this.preySeen.push(prey.length);

  if (this.preySeen.length > 6)
    this.preySeen.shift();

  if (prey.length && seenPerTurn > 0.25)
    return {type: "eat", direction: randomElement(prey)};
    
  var space = view.find(" ");
  if (this.energy > 400 && space)
    return {type: "reproduce", direction: space};
  if (view.look(this.direction) != " " && space)
    this.direction = space;
  return {type: "move", direction: this.direction};
};