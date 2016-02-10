describe("Test du controller Todo", function() {
  it('should add a todo', function(){
    browser.get('http://localhost:3000');

    element(by.model('todo')).sendKeys('Une autre action');
    element(by.id('send')).click();

    var tdl = element.all(by.repeater('t in todos'));
    expect(tdl.count()).toEqual(5);
    expect(tdl.get(4).getText()).toEqual('Une autre action');
  });
  });
