AOS.init();

var radio1 = document.getElementById('radio1');
var radio2 = document.getElementById('radio2');
var radio11 = document.getElementById('radio11');
var radio22 = document.getElementById('radio22');
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slides = document.getElementById('slides');

radio11.style.background = "black";
var counter = 1;
setInterval(function(){
	counter++;
	if(counter > 2){
		counter = 1;
	}
	document.getElementById('radio' + counter).checked = true;
	document.getElementById('radio' + counter + counter).style.background = "black";
	var ccounter = counter;
	if(ccounter==1){ccounter=2;}
	else {ccounter=1;}
	document.getElementById('radio' + ccounter + ccounter).style.background = "transparent";
	if(ccounter==2){
		slides.style.marginLeft = "0";
	}
	else{
		slides.style.marginLeft = "-100%";
	}
}, 6000)

function clickRadio1(){
	radio1.checked == true;
	radio11.style.background = "black";
	radio22.style.background = "transparent";
	slides.style.marginLeft = "0";
}
function clickRadio2(){
	radio2.checked == true;
	radio22.style.background = "black";
	radio11.style.background = "transparent";
	slides.style.marginLeft = "-100%";
}