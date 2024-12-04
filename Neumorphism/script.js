AOS.init();

var heartImg1 = document.getElementById('heartImg1');
var heartImg2 = document.getElementById('heartImg2');

var nothing = document.getElementById('nothing');
var one = document.getElementById('cOne');
var two = document.getElementById('cTwo');
var three = document.getElementById('cThree');
var four = document.getElementById('cFour');
var countHeart = document.getElementById('cCountHeart');

var lOne = document.getElementById('lOne');
var lTwo = document.getElementById('lTwo');
var lThree = document.getElementById('lThree');
var lFour = document.getElementById('lFour');
var lFive = document.getElementById('lFive');

//Heart Button
function heartImgOne() {
	heartImg1.style.display = "none";
	heartImg2.style.display = "block";
}
function heartImgTwo() {
	heartImg1.style.display = "block";
	heartImg2.style.display = "none";
}

//Count Button
function nOthing() {
	nothing.style.display = "none";
	one.style.display = "block";
	lOne.style.color = "white";
}
function cOne() {
	one.style.display = "none";
	two.style.display = "block";
	lTwo.style.color = "white";
}
function cTwo() {
	two.style.display = "none";
	three.style.display = "block";
	lThree.style.color = "white";
}
function cThree() {
	three.style.display = "none";
	four.style.display = "block";
	lFour.style.color = "white";
}
function cFour() {
	four.style.display = "none";
	countHeart.style.display = "block";
	lFive.style.color = "red";
}
function cCountHeart() {
	nothing.style.display = "block";
	countHeart.style.display = "none";
	lOne.style.color = "transparent";
	lTwo.style.color = "transparent";
	lThree.style.color = "transparent";
	lFour.style.color = "transparent";
	lFive.style.color = "transparent";
}