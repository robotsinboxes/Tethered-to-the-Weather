


var inputBox = document.querySelector('#inputBox');
var submitBtn = document.querySelector('#btn');

submitBtn.addEventListener('click', function() {
    console.log("The city is " + inputBox.value);
})