function Calc() {
  this.sub = function(a, b) {
    if ((typeof a == 'number') && (typeof b == 'number')) {
      c = a - b;
    }
    return (c);
  };
  this.mul = function(a, b) {
    return (a * b);
  };
};

var calc = new Calc();
console.log("Res:" + calc.sub(10, 7));
