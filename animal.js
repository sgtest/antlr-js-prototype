// An Animal is a friendly creature that can say hello and make a noise.
function Animal(name) {
  this.name = name;
}

// sayHello greets the caller.
Animal.prototype.sayHello = function() {
  return 'Hello from ' + this.name;
};

// makeNoise emits the animal's characteristic noise.
Animal.prototype.makeNoise = function() {
  return this.noise || '<chirp>';
};

