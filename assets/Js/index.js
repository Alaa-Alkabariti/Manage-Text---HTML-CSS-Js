let inputName = document.getElementById("username");
let inputSize = document.getElementById("fontsize");
let inputColor = document.getElementById("color");

const element = document.getElementById("Update");
element.addEventListener("click", handleForm);

function handleForm() {
  document.getElementById("output").innerHTML = inputName.value;
  document.getElementById("output").style.fontSize = inputSize.value + "px"   ;
  document.getElementById("output").style.color = inputColor.value;
} 
