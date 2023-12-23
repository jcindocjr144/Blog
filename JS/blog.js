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
  document.getElementById("react1").style.display="none";
  document.getElementById("react2").style.display="none";
  document.getElementById("react3").style.display="none";
  document.getElementById("react4").style.display="none";
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
  document.getElementById("react1").style.display="none";
  document.getElementById("react2").style.display="none";
  document.getElementById("react3").style.display="none";
  document.getElementById("react4").style.display="none";
}
function roses(){
  document.getElementById("roses").style.display="block";
  document.getElementById("react1").style.display="block";
  document.getElementById("environment").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("municipal").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("home").style.display="none";
  document.getElementById("church").style.display="none";
  document.getElementById("react2").style.display="none";
  document.getElementById("react3").style.display="none";
  document.getElementById("react4").style.display="none";
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
  document.getElementById("react1").style.display="none";
  document.getElementById("react2").style.display="none";
  document.getElementById("react3").style.display="none";
  document.getElementById("react4").style.display="none";
}
function next(){
  document.getElementById("centennial").style.display="block";
  document.getElementById("react2").style.display="block";
  document.getElementById("roses").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("church").style.display="none";
  document.getElementById("react1").style.display="none";
  document.getElementById("react3").style.display="none";
  document.getElementById("react4").style.display="none";
}
function next1(){
  document.getElementById("bakasihan").style.display="block";
  document.getElementById("react3").style.display="block";
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("church").style.display="none";
  document.getElementById("react1").style.display="none";
  document.getElementById("react2").style.display="none";
  document.getElementById("react4").style.display="none";
}
function next2(){
  document.getElementById("museum").style.display="block";
  document.getElementById("react4").style.display="block";
  document.getElementById("municipal").style.display="none";
  document.getElementById("cclex").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="none";
  document.getElementById("church").style.display="none";
  document.getElementById("react1").style.display="none";
  document.getElementById("react2").style.display="none";
  document.getElementById("react3").style.display="none";
}
function next3(){
  document.getElementById("cclex").style.display="block";
  document.getElementById("museum").style.display="none";
  document.getElementById("municipal").style.display="none";
  document.getElementById("church").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="none";
  document.getElementById("react1").style.display="none";
  document.getElementById("react2").style.display="none";
  document.getElementById("react3").style.display="none";
  document.getElementById("react4").style.display="none";
}
function next4(){
  document.getElementById("church").style.display="block";
  document.getElementById("cclex").style.display="none";
  document.getElementById("museum").style.display="none";
  document.getElementById("municipal").style.display="none";
  document.getElementById("bakasihan").style.display="none";
  document.getElementById("centennial").style.display="none";
  document.getElementById("roses").style.display="none";
  document.getElementById("react1").style.display="none";
  document.getElementById("react2").style.display="none";
  document.getElementById("react3").style.display="none";
  document.getElementById("react4").style.display="none";
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
function myFunction() {
  document.getElementById("demo").style.background="BLUE";
  document.getElementById("demo2").style.color="BLACK";
  document.getElementById("demo1").style.background="WHITE";
  document.getElementById("demo2").style.background="WHITE";
  document.getElementById("demo3").style.background="WHITE";
  document.getElementById("demo4").style.background="WHITE";
}
function myFunction1() {
  document.getElementById("demo1").style.background="RED";
  document.getElementById("demo2").style.color="BLACK";
  document.getElementById("demo2").style.background="WHITE";
  document.getElementById("demo3").style.background="WHITE";
  document.getElementById("demo").style.background="WHITE";
  document.getElementById("demo4").style.background="WHITE";
}
function myFunction2() {
  document.getElementById("demo2").style.background="GREEN";
  document.getElementById("demo2").style.color="WHITE";
  document.getElementById("demo3").style.background="WHITE";
  document.getElementById("demo1").style.background="WHITE";
  document.getElementById("demo").style.background="WHITE";
  document.getElementById("demo4").style.background="WHITE";
}
function myFunction3() {
  document.getElementById("demo3").style.background="YELLOW";
  document.getElementById("demo2").style.color="BLACK";
  document.getElementById("demo2").style.background="WHITE";
  document.getElementById("demo1").style.background="WHITE";
  document.getElementById("demo").style.background="WHITE";
  document.getElementById("demo4").style.background="WHITE";
}
function myFunction4() {
  document.getElementById("demo4").style.background="RED";
  document.getElementById("demo4").style.color="BLACK";
  document.getElementById("demo3").style.background="WHITE";
  document.getElementById("demo2").style.background="WHITE";
  document.getElementById("demo1").style.background="WHITE";
  document.getElementById("demo").style.background="WHITE";
}
function myFunction5() {
  document.getElementById("demo5").style.background="BLUE";
  document.getElementById("demo7").style.color="BLACK";
  document.getElementById("demo6").style.background="WHITE";
  document.getElementById("demo7").style.background="WHITE";
  document.getElementById("demo8").style.background="WHITE";
  document.getElementById("demo9").style.background="WHITE";
}
function myFunction6() {
  document.getElementById("demo6").style.background="RED";
  document.getElementById("demo7").style.color="BLACK";
  document.getElementById("demo7").style.background="WHITE";
  document.getElementById("demo8").style.background="WHITE";
  document.getElementById("demo5").style.background="WHITE";
  document.getElementById("demo9").style.background="WHITE";
}
function myFunction7() {
  document.getElementById("demo7").style.background="GREEN";
  document.getElementById("demo7").style.color="WHITE";
  document.getElementById("demo8").style.background="WHITE";
  document.getElementById("demo6").style.background="WHITE";
  document.getElementById("demo5").style.background="WHITE";
  document.getElementById("demo9").style.background="WHITE";
}
function myFunction8() {
  document.getElementById("demo8").style.background="YELLOW";
  document.getElementById("demo7").style.color="BLACK";
  document.getElementById("demo7").style.background="WHITE";
  document.getElementById("demo6").style.background="WHITE";
  document.getElementById("demo5").style.background="WHITE";
  document.getElementById("demo9").style.background="WHITE";
}
function myFunction9() {
  document.getElementById("demo9").style.background="RED";
  document.getElementById("demo9").style.color="BLACK";
  document.getElementById("demo8").style.background="WHITE";
  document.getElementById("demo7").style.background="WHITE";
  document.getElementById("demo6").style.background="WHITE";
  document.getElementById("demo5").style.background="WHITE";
}
function myFunction10() {
  document.getElementById("demo10").style.background="BLUE";
  document.getElementById("demo12").style.color="BLACK";
  document.getElementById("demo11").style.background="WHITE";
  document.getElementById("demo12").style.background="WHITE";
  document.getElementById("demo13").style.background="WHITE";
  document.getElementById("demo14").style.background="WHITE";
}
function myFunction11() {
  document.getElementById("demo11").style.background="RED";
  document.getElementById("demo12").style.color="BLACK";
  document.getElementById("demo12").style.background="WHITE";
  document.getElementById("demo13").style.background="WHITE";
  document.getElementById("demo10").style.background="WHITE";
  document.getElementById("demo14").style.background="WHITE";
}
function myFunction12() {
  document.getElementById("demo12").style.background="GREEN";
  document.getElementById("demo12").style.color="WHITE";
  document.getElementById("demo13").style.background="WHITE";
  document.getElementById("demo11").style.background="WHITE";
  document.getElementById("demo10").style.background="WHITE";
  document.getElementById("demo14").style.background="WHITE";
}
function myFunction13() {
  document.getElementById("demo13").style.background="YELLOW";
  document.getElementById("demo12").style.color="BLACK";
  document.getElementById("demo12").style.background="WHITE";
  document.getElementById("demo11").style.background="WHITE";
  document.getElementById("demo10").style.background="WHITE";
  document.getElementById("demo14").style.background="WHITE";
}
function myFunction14() {
  document.getElementById("demo14").style.background="RED";
  document.getElementById("demo14").style.color="BLACK";
  document.getElementById("demo13").style.background="WHITE";
  document.getElementById("demo12").style.background="WHITE";
  document.getElementById("demo11").style.background="WHITE";
  document.getElementById("demo10").style.background="WHITE";
}
function myFunction15() {
  document.getElementById("demo15").style.background="BLUE";
  document.getElementById("demo17").style.color="BLACK";
  document.getElementById("demo16").style.background="WHITE";
  document.getElementById("demo17").style.background="WHITE";
  document.getElementById("demo18").style.background="WHITE";
  document.getElementById("demo19").style.background="WHITE";
}
function myFunction16() {
  document.getElementById("demo16").style.background="RED";
  document.getElementById("demo17").style.color="BLACK";
  document.getElementById("demo17").style.background="WHITE";
  document.getElementById("demo18").style.background="WHITE";
  document.getElementById("demo15").style.background="WHITE";
  document.getElementById("demo19").style.background="WHITE";
}
function myFunction17() {
  document.getElementById("demo17").style.background="GREEN";
  document.getElementById("demo17").style.color="WHITE";
  document.getElementById("demo18").style.background="WHITE";
  document.getElementById("demo16").style.background="WHITE";
  document.getElementById("demo15").style.background="WHITE";
  document.getElementById("demo19").style.background="WHITE";
}
function myFunction18() {
  document.getElementById("demo18").style.background="YELLOW";
  document.getElementById("demo17").style.color="BLACK";
  document.getElementById("demo17").style.background="WHITE";
  document.getElementById("demo16").style.background="WHITE";
  document.getElementById("demo15").style.background="WHITE";
  document.getElementById("demo19").style.background="WHITE";
}
function myFunction19() {
  document.getElementById("demo19").style.background="RED";
  document.getElementById("demo19").style.color="BLACK";
  document.getElementById("demo18").style.background="WHITE";
  document.getElementById("demo17").style.background="WHITE";
  document.getElementById("demo16").style.background="WHITE";
  document.getElementById("demo15").style.background="WHITE";
}
