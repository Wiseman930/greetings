"use strict";

var enterNameTextBox = document.querySelector(".textName");
var countDisplay = document.querySelector(".count");
var greetingDisplay = document.querySelector(".greeting");
var greetButton = document.querySelector(".greetMeButton");
var resetCounterButton = document.querySelector(".resetCounterButton");
var getMystoredNames = localStorage.getItem("storedNames");
var getMystoredNames2 = JSON.parse(getMystoredNames);
var getmyStoredCount = localStorage.getItem('storingMyCount');
var getmyStoredCount2 = Number(getmyStoredCount);
var displayStoredCount = 0;

if (getmyStoredCount2) {
  displayStoredCount = getmyStoredCount2;
  countDisplay.innerHTML = displayStoredCount;
}

var getGreet = greetMeInLangage(getMystoredNames2, displayStoredCount);
greetButton.addEventListener("click", function () {
  var NotselectLanguageButton = document.querySelector('.languageTypeRadio').value;
  getGreet.enterNameAndLanguage(enterNameTextBox.value);
  getGreet.notCheckedbutton(NotselectLanguageButton);
  greetingDisplay.innerHTML = getGreet.notCheckedLanguage();
});
greetButton.addEventListener("click", function () {
  var selectLanguageButton = document.querySelector('.languageTypeRadio:checked').value;
  getGreet.enterNameAndLanguage(enterNameTextBox.value, selectLanguageButton);
  greetingDisplay.innerHTML = getGreet.returnChosenLanguage();
  countDisplay.innerHTML = getGreet.getMyCount();
  var myCountInLocalStorage = JSON.stringify(getGreet.returnStoredInArray());
  localStorage.setItem("storedNames", myCountInLocalStorage);
  localStorage.setItem('storingMyCount', getGreet.getMyCount());
});
resetCounterButton.addEventListener("click", function () {
  greetingDisplay.innerHTML = getGreet.returnLanguage();
  var myCountInLocalStorage = JSON.stringify(getGreet.getEmptyArray());
  localStorage.setItem("storedNames", myCountInLocalStorage);
  localStorage.setItem('storingMyCount', getGreet.getZeroCount());
  countDisplay.innerHTML = localStorage.getItem('storingMyCount');
  enterNameTextBox.value = '';
});