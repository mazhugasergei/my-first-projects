
var Chapter_1 = "Lorem Ipsum";










AOS.init();



var pages = document.querySelectorAll('.pages');



document.querySelector('.page-1').addEventListener("click", page1Rotate);
document.querySelector('.page-2').addEventListener("click", page1RotateBack);
document.querySelector('.page-3').addEventListener("click", page3Rotate);
document.querySelector('.page-4').addEventListener("click", page3RotateBack);
document.querySelector('.page-5').addEventListener("click", page5Rotate);
document.querySelector('.page-6').addEventListener("click", page5RotateBack);
document.querySelector('.page-7').addEventListener("click", page7Rotate);
document.querySelector('.page-8').addEventListener("click", page7RotateBack);
document.querySelector('.page-9').addEventListener("click", page9Rotate);
document.querySelector('.page-10').addEventListener("click", page9RotateBack);










function page1Rotate(){
    document.querySelector('.page-1').style.transform = "rotateY(-180deg)";
    document.querySelector('.page-2').style.transform = "rotateY(-180deg)";
}
function page1RotateBack(){
    document.querySelector('.page-1').style.transform = "rotateY(0)";
    document.querySelector('.page-2').style.transform = "rotateY(0)";
}
function page3Rotate(){
    document.querySelector('.page-3').style.transform = "rotateY(-180deg)";
    document.querySelector('.page-4').style.transform = "rotateY(-180deg)";
}
function page3RotateBack(){
    document.querySelector('.page-3').style.transform = "rotateY(0)";
    document.querySelector('.page-4').style.transform = "rotateY(0)";
}
function page5Rotate(){
    document.querySelector('.page-5').style.transform = "rotateY(-180deg)";
    document.querySelector('.page-6').style.transform = "rotateY(-180deg)";
}
function page5RotateBack(){
    document.querySelector('.page-5').style.transform = "rotateY(0)";
    document.querySelector('.page-6').style.transform = "rotateY(0)";
}
function page7Rotate(){
    document.querySelector('.page-7').style.transform = "rotateY(-180deg)";
    document.querySelector('.page-8').style.transform = "rotateY(-180deg)";
}
function page7RotateBack(){
    document.querySelector('.page-7').style.transform = "rotateY(0)";
    document.querySelector('.page-8').style.transform = "rotateY(0)";
}
function page9Rotate(){
    document.querySelector('.page-9').style.transform = "rotateY(-180deg)";
    document.querySelector('.page-10').style.transform = "rotateY(-180deg)";
}
function page9RotateBack(){
    document.querySelector('.page-9').style.transform = "rotateY(0)";
    document.querySelector('.page-10').style.transform = "rotateY(0)";
}



document.querySelector('.chapter-1').innerHTML = Chapter_1;
var footer_text_l_1 = document.querySelectorAll('.footer-text-l-1');
for(var i=0; i<footer_text_l_1.length; i++){
    footer_text_l_1[i].innerHTML = Chapter_1;
}