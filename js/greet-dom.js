const enterNameTextBox = document.querySelector(".textName")
const countDisplay = document.querySelector(".count")
const greetingDisplay = document.querySelector(".greeting")
const greetButton = document.querySelector(".greetMeButton")
const resetCounterButton = document.querySelector(".resetCounterButton")


let getMystoredNames = localStorage.getItem("storedNames")
let getMystoredNames2 = JSON.parse(getMystoredNames)

let getmyStoredCount = localStorage.getItem('storingMyCount')
let getmyStoredCount2 = Number(getmyStoredCount)

var displayStoredCount = 0;
if(getmyStoredCount2){
    displayStoredCount = getmyStoredCount2
    countDisplay.innerHTML = displayStoredCount
}
const getGreet = greetMeInLangage(getMystoredNames2, displayStoredCount);

greetButton.addEventListener("click", function(){
    const NotselectLanguageButton = document.querySelector('.languageTypeRadio').value
    getGreet.enterNameAndLanguage(enterNameTextBox.value)
    getGreet.nocheck(NotselectLanguageButton)
    greetingDisplay.innerHTML = getGreet.notCheckedLanguage();

})

greetButton.addEventListener("click", function(){
    const selectLanguageButton = document.querySelector('.languageTypeRadio:checked').value
    getGreet.enterNameAndLanguage(enterNameTextBox.value, selectLanguageButton)
    greetingDisplay.innerHTML = getGreet.returnChosenLanguage();
    countDisplay.innerHTML = getGreet.getMyCount()
    var myCountInLocalStorage = JSON.stringify(getGreet.returnStoredInArray())
    localStorage.setItem("storedNames", myCountInLocalStorage)
    localStorage.setItem('storingMyCount', (getGreet.getMyCount()))

})

resetCounterButton.addEventListener("click", function(){

    greetingDisplay.innerHTML = getGreet.returnLanguage()

    var myCountInLocalStorage = JSON.stringify(getGreet.getEmptyArray())
    localStorage.setItem("storedNames", myCountInLocalStorage)
    localStorage.setItem('storingMyCount', (getGreet.getZeroCount()))
    countDisplay.innerHTML = localStorage.getItem('storingMyCount')

})




