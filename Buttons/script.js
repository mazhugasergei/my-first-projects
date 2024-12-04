AOS.init();

var Aa = document.getElementById('buttonAa');
var AaText = document.getElementById('Aa');

var share = document.getElementById('share');
var shareIcon = document.getElementById('shareIcon');

var label = document.getElementById('label');
var labelIcon = document.getElementById('labelIcon');

var button = document.getElementById('button');

var dd = document.getElementById('dd');
var ddT = document.getElementById('ddText');
var ddU = document.getElementById('ddUp');
var ddI = document.getElementById('ddIcon');
var ddM = document.getElementById('ddmenu');

var addUB = document.getElementById('addUser');
var addUI = document.getElementById('addUserIcon');

var leftB = document.getElementById('leftButton');
var rightB = document.getElementById('rightButton');

var cbA = document.getElementById('cbA');
var cbAcircle = document.getElementById('cbAcircle');
var cbB = document.getElementById('cbB');
var cbBcircle = document.getElementById('cbBcircle');


function AaDown() {
	Aa.style.boxShadow = "inset #9b9ca0 5px 5px 8px, inset #fff -5px -5px 8px";
	Aa.style.paddingTop = "24px";
	Aa.style.marginBottom = "24px";
	AaText.style.fontSize = "57px";
}
function AaUp() {
	Aa.style.boxShadow = "#9b9ca0 5px 5px 8px, #fff -5px -5px 8px";
	Aa.style.paddingTop = "22px";
	Aa.style.marginBottom = "26px";
	AaText.style.fontSize = "60px";
}

function shareDown() {
	share.style.boxShadow = "inset #9b9ca0 5px 5px 8px, inset #fff -5px -5px 8px";
	share.style.paddingTop = "15px";
	share.style.marginBottom = "25px";
	share.style.fontSize = "15px";
	shareIcon.style.backgroundSize = "17px 18px";
}
function shareUp() {
	share.style.boxShadow = "#9b9ca0 5px 5px 8px, #fff -5px -5px 8px";
	share.style.paddingTop = "14px";
	share.style.marginBottom = "26px";
	share.style.fontSize = "16px";
	shareIcon.style.backgroundSize = "18px 19px";
}

function labelDown() {
	label.style.boxShadow = "inset #9b9ca0 5px 5px 8px, inset #fff -5px -5px 8px";
	label.style.paddingTop = "15px";
	label.style.marginBottom = "25px";
	label.style.fontSize = "15px";
	labelIcon.style.backgroundSize = "19px 18px";
	labelIcon.style.marginRight = "4px";
}
function labelUp() {
	label.style.boxShadow = "#9b9ca0 5px 5px 8px, #fff -5px -5px 8px";
	label.style.paddingTop = "14px";
	label.style.marginBottom = "26px";
	label.style.fontSize = "16px";
	labelIcon.style.backgroundSize = "20px 19px";
	labelIcon.style.marginRight = "5px";
}



function buttonDown() {
	button.style.boxShadow = "inset #9b9ca0 5px 5px 8px, inset #fff -5px -5px 8px";
	button.style.paddingTop = "15px";
	button.style.fontSize = "15px";
}
function buttonUp() {
	button.style.boxShadow = "#9b9ca0 5px 5px 8px, #fff -5px -5px 8px";
	button.style.paddingTop = "14px";
	button.style.fontSize = "16px";
}



function ddDown() {
	dd.style.boxShadow = "inset #9b9ca0 2px 2px 5px, inset #fff -2px -2px 5px";
	dd.style.fontSize = "15.5px";
	ddT.style.padding = "14px 27px 0";
	ddU.style.zIndex = "3";
	ddI.style.transform = "rotate(-180deg)";
	ddI.style.width = "14px";
	ddI.style.height = "13px";
	ddI.style.backgroundSize = "14px 13px";
	ddM.style.height = "102px";
}
function ddUp() {
	dd.style.boxShadow = "#9b9ca0 5px 5px 8px, #fff -5px -5px 8px";
	dd.style.fontSize = "16px";
	ddT.style.padding = "14px 26px 0";
	ddU.style.zIndex = "-1";
	ddI.style.transform = "rotate(0deg)";
	ddI.style.width = "15px";
	ddI.style.height = "14px";
	ddI.style.backgroundSize = "15px 14px";
	ddM.style.height = "0";
}



function addUserDown() {
	addUB.style.boxShadow = "inset #9b9ca0 5px 5px 8px, inset #fff -5px -5px 8px";
	addUB.style.paddingTop = "15px";
	addUB.style.fontSize = "15px";
	addUI.style.backgroundSize = "17px 17px";
	addUI.style.marginRight = "8px";
	addUI.style.marginLeft = "4px";
}
function addUserUp() {
	addUB.style.boxShadow = "#9b9ca0 5px 5px 8px, #fff -5px -5px 8px";
	addUB.style.paddingTop = "14px";
	addUB.style.fontSize = "16px";
	addUI.style.backgroundSize = "18px 18px";
	addUI.style.marginRight = "9px";
	addUI.style.marginLeft = "0";
}



function leftButtonDown() {
	leftB.style.boxShadow = "inset #9b9ca0 5px 5px 8px, inset #fff -5px -5px 8px";
	leftB.style.backgroundSize = "11px 11px";
}
function leftButtonUp() {
	leftB.style.boxShadow = "#9b9ca0 5px 5px 8px, #fff -5px -5px 8px";
	leftB.style.backgroundSize = "12px 12px";
}

function rightButtonDown() {
	rightB.style.boxShadow = "inset #9b9ca0 5px 5px 8px, inset #fff -5px -5px 8px";
	rightB.style.backgroundSize = "11px 11px";
}
function rightButtonUp() {
	rightB.style.boxShadow = "#9b9ca0 5px 5px 8px, #fff -5px -5px 8px";
	rightB.style.backgroundSize = "12px 12px";
}



function cbADown(){
	cbA.style.boxShadow = "inset #9b9ca0 5px 5px 8px, inset #fff -5px -5px 8px";
	cbAcircle.style.width = "13px";
	cbAcircle.style.height = "13px";
	cbAcircle.style.background = "#8990aa";
}
function cbAUp(){
	cbA.style.boxShadow = "#9b9ca0 5px 5px 8px, inset #fff -5px -5px 8px";
	cbAcircle.style.width = "14px";
	cbAcircle.style.height = "14px";
	cbAcircle.style.background = "none";
}
function cbBDown(){
	cbB.style.boxShadow = "inset #9b9ca0 5px 5px 8px, inset #fff -5px -5px 8px";
	cbBcircle.style.width = "13px";
	cbBcircle.style.height = "13px";
	cbBcircle.style.background = "#8990aa";
}
function cbBUp(){
	cbB.style.boxShadow = "#9b9ca0 5px 5px 8px, inset #fff -5px -5px 8px";
	cbBcircle.style.width = "14px";
	cbBcircle.style.height = "14px";
	cbBcircle.style.background = "none";
}