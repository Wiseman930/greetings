"use strict";

describe("The bill with settings factory function", function () {
  it("should ask me to enter a name when the textbox and buttons are empty at greet click button", function () {
    var greetings = greetMeInLangage();
    greetings.enterNameAndLanguage("");
    greetings.notCheckedbutton('emptyRdio');
    assert.equal("Please enter your name", greetings.notCheckedLanguage());
  });
  it("should ask me to select a button when a button is not selected and the textbox is not empty ", function () {
    var greetings = greetMeInLangage();
    greetings.enterNameAndLanguage("Wiseman");
    greetings.notCheckedbutton('emptyRdio');
    assert.equal("Please choose a Language button", greetings.notCheckedLanguage());
  });
  it("should ask me to enter a name when the english button selected and the textbox is empty ", function () {
    var greetings = greetMeInLangage();
    greetings.enterNameAndLanguage("", "english");
    assert.equal("Please enter your name", greetings.returnChosenLanguage());
  });
  it("should ask me to enter a name when the isiXhosa button selected and the textbox is empty ", function () {
    var greetings = greetMeInLangage();
    greetings.enterNameAndLanguage("", "isiXhosa");
    assert.equal("Please enter your name", greetings.returnChosenLanguage());
  });
  it("should ask me to enter a name when the afrikaans button selected and the textbox is empty ", function () {
    var greetings = greetMeInLangage();
    greetings.enterNameAndLanguage("", "afrikaans");
    assert.equal("Please enter your name", greetings.returnChosenLanguage());
  });
  it("should be able to return a name taken", function () {
    var greetings = greetMeInLangage();
    greetings.enterNameAndLanguage("Wiseman");
    assert.equal("Wiseman", greetings.returnName());
    greetings.enterNameAndLanguage("Linda");
    assert.equal("Linda", greetings.returnName());
  });
  it("should be able to count the names greeted", function () {
    var greetings = greetMeInLangage();
    greetings.enterNameAndLanguage("Wiseman");
    greetings.enterNameAndLanguage("Linda");
    assert.equal(2, greetings.getMyCount());
  });
  it("should be able to count the names greeted but not twice", function () {
    var greetings = greetMeInLangage();
    greetings.enterNameAndLanguage("Wiseman");
    greetings.enterNameAndLanguage("Wiseman");
    greetings.enterNameAndLanguage("Linda");
    assert.equal(2, greetings.getMyCount());
  });
  it("should be able to greet a person in english when a person enters their name and count", function () {
    var greetings = greetMeInLangage();
    greetings.enterNameAndLanguage('Wiseman', "english");
    assert.equal(1, greetings.getMyCount());
    assert.equal('Hello, Wiseman', greetings.returnChosenLanguage());
  });
  it("should be able to greet a person in isiXhosa when a person enters their name and count", function () {
    var greetings = greetMeInLangage();
    greetings.enterNameAndLanguage('Wiseman', "isiXhosa");
    assert.equal(1, greetings.getMyCount());
    assert.equal('Molo, Wiseman', greetings.returnChosenLanguage());
  });
  it("should be able to greet a person in afrikaans when a person enters their name and count", function () {
    var greetings = greetMeInLangage();
    greetings.enterNameAndLanguage('Wiseman', "afrikaans");
    greetings.enterNameAndLanguage('Mabusela', "afrikaans");
    assert.equal(2, greetings.getMyCount());
    assert.equal('Hallo, Mabusela', greetings.returnChosenLanguage());
  });
});