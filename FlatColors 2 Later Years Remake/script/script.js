AOS.init();

var white_btn = document.querySelector('.theme-btns .white');
white_btn.addEventListener("click", white_theme);
var black_btn = document.querySelector('.theme-btns .black')
black_btn.addEventListener("click", black_theme);
var boxes = document.querySelectorAll('.box');

function white_theme(){
    white_btn.parentElement.parentElement.parentElement.style.background = "rgb(245, 245, 245)";
    for(var i=0; i<boxes.length; i++) boxes[i].style.background = "#FFFFFF";
    for(var i=0; i<boxes.length; i++) boxes[i].style.boxShadow = "0px 0px 20px lightgray";
    document.querySelector('.text-h').style.color = "#bdc3c7";
    document.querySelector('.text-a').style.color = "#2c3e50";
}

function black_theme(){
    black_btn.parentElement.parentElement.parentElement.style.background = "#1C1C1C";
    for(var i=0; i<boxes.length; i++) boxes[i].style.background = "#2D2D2D";
    for(var i=0; i<boxes.length; i++) boxes[i].style.boxShadow = "0px 0px 20px black";
    document.querySelector('.text-h').style.color = "#ecf0f1";
    document.querySelector('.text-a').style.color = "#34495e";
}