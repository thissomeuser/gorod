var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1')
function setUserName() {
    var myName = promt('Введите свое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожаловать' + myName
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
var storedName = localStorage.getItem('name');
myHeading.textContent = 'Привет' + storedName;
}
myButton.onclick = function(){
    setUseerName();
}