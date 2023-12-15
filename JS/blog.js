function home(){
  document.getElementById("home").style.display="block";
}
function museum(){
  document.getElementById("museum").style.display="block";
  document.getElementById("centennial").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("roses").style.display="none";
  document.getElementById("home").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("contact").style.display="none";
  document.getElementById("footer").style.display="none";
  document.getElementById("bakasihan").style.display="none";
}
function roses(){
  document.getElementById("roses").style.display="block";
  document.getElementById("museum").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("home").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("contact").style.display="none";
  document.getElementById("footer").style.display="none";
  document.getElementById("centennial").style.display="none";
}
function next(){
  document.getElementById("centennial").style.display="block";
  document.getElementById("roses").style.display="none";
  document.getElementById("bakasihan").style.display="none";
}
function previous(){
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="block";
  document.getElementById("bakasihan").style.display="none";
}
function next1(){
  document.getElementById("bakasihan").style.display="block";
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="none";
}
function previous1(){
  document.getElementById("centennial").style.display="block";
  document.getElementById("roses").style.display="none";
  document.getElementById("bakasihan").style.display="none";
}
