const button = document.querySelector("#btn");
const title = document.getElementById("title");
var selectElement = document.getElementById('mySelect1');
var selectedValue = selectElement.value;
var result = eval(selectedValue);
console.log(result); 


function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    title.innerText = result;
    
  }