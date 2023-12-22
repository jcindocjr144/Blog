function home(){
  document.getElementById("church").style.display="none";
  document.getElementById("home").style.display="block";
  document.getElementById("roses").style.display="none";
  document.getElementById("municipal").style.display="none";
  document.getElementById("environment").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
}
function municipal(){
  document.getElementById("municipal").style.display="block";
  document.getElementById("environment").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("church").style.display="none";
  document.getElementById("roses").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("home").style.display="none";
}
function roses(){
  document.getElementById("roses").style.display="block";
  document.getElementById("environment").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("municipal").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("home").style.display="none";
  document.getElementById("church").style.display="none";
}
function environment(){
  document.getElementById("environment").style.display="block";
  document.getElementById("municipal").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("church").style.display="none";
  document.getElementById("roses").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("home").style.display="none";
}
function next(){
  document.getElementById("centennial").style.display="block";
  document.getElementById("roses").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("church").style.display="none";
}
function previous(){
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="block";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("church").style.display="none";
}
function next1(){
  document.getElementById("bakasihan").style.display="block";
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("church").style.display="none";
}
function previous1(){
  document.getElementById("centennial").style.display="block";
  document.getElementById("roses").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("church").style.display="none";
}
function next2(){
  document.getElementById("museum").style.display="block";
  document.getElementById("municipal").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="none";
  document.getElementById("church").style.display="none";
}
function previous2(){
  document.getElementById("bakasihan").style.display="block";
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("church").style.display="none";
}
function next3(){
  document.getElementById("cclex").style.display="block";
  document.getElementById("museum").style.display="none";
  document.getElementById("municipal").style.display="none";
  document.getElementById("church").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="none";
}
function previous3(){
  document.getElementById("municipal").style.display="block";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("church").style.display="none";
  document.getElementById("roses").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("home").style.display="none";
  document.getElementById("cclex").style.display="none";
}

function next4(){
  document.getElementById("church").style.display="block";
  document.getElementById("cclex").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("municipal").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="none";
}

function previous4(){
  document.getElementById("cclex").style.display="block";
  document.getElementById("museum").style.display="none";
  document.getElementById("municipal").style.display="none";
  document.getElementById("church").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="none";
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
