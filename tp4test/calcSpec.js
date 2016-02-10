

describe("Test de la calculatrice", function() {
  var calc;
  beforeEach( function(){
    calc = new Calc();
  });
  it("teste la soustraction", function() {
    var r = calc.sub(11,8);
    expect(r).toBe(3);
  });

  it("teste la multiplication", function() {
    var r = calc.mul(1,3);
    expect(r).toBe(3);
  });

});
