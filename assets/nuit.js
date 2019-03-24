/*const button = document.querySelector('.slider');
const section2 = document.querySelector('.panel:nth-child(2)');

button.onclick = e => {
    section2.classList.toggle('active')
};*/
/*let theButton = document.getElementById('btn');
let theText = document.querySelectorAll('.panel:nth-child(2)');

theButton.onclick = function () { 
  for(let x of theText) {
    x.classList.toggle('active');
  }
};*/
function myFunction() {
  document.getElementById("section2").classList.toggle("active");
  document.getElementById("section3").classList.toggle("active");
  document.getElementById("section4").classList.toggle("active");
  document.getElementById("section5").classList.toggle("active");
}