
var grade = "Null";
var point="Null";
function markC(totalMark){

	if(totalMark >= 80 && totalMark <= 100){
		grade="A+";
		point="5.00";
	}
	else if(totalMark >= 70 && totalMark <= 79){
		grade="A";
		point="4.00";
	}
	else if(totalMark >= 60 && totalMark <= 69){
		grade="A-";
		point="3.50";
	}
	else if(totalMark >= 50 && totalMark <= 59){
		grade="B";
		point="3.00";
	}
	else if(totalMark >= 40 && totalMark <= 49){
		grade="C";
		point="2.00";
	}
	else if(totalMark >= 33 && totalMark <= 39){
		grade="D";
		point="1.00";
	}
	else if(totalMark >= 0 && totalMark <= 32){
		grade="F";
		point="0.00";
	}
	else{
		alert("Invalid Mark");
	}
}
function bangla1(){
	var tMark = document.getElementById("tMark").value;
	var pMark = document.getElementById("pMark").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark").value=totalMark;
	document.getElementById("grade").value=grade;
	document.getElementById("point").value=point;
}
function bangla2(){
	var tMark = document.getElementById("tMark1").value;
	var pMark = document.getElementById("pMark1").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark1").value=totalMark;
	document.getElementById("grade1").value=grade;
	document.getElementById("point1").value=point;
}

function english1(){
	var tMark = document.getElementById("tMark2").value;
	var pMark = document.getElementById("pMark2").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark2").value=totalMark;
	document.getElementById("grade2").value=grade;
	document.getElementById("point2").value=point;
}

function english2(){
	var tMark = document.getElementById("tMark3").value;
	var pMark = document.getElementById("pMark3").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark3").value=totalMark;
	document.getElementById("grade3").value=grade;
	document.getElementById("point3").value=point;
}

function math(){
	var tMark = document.getElementById("tMark4").value;
	var pMark = document.getElementById("pMark4").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark4").value=totalMark;
	document.getElementById("grade4").value=grade;
	document.getElementById("point4").value=point;
}

function phy1(){
	var tMark = document.getElementById("tMark5").value;
	var pMark = document.getElementById("pMark5").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark5").value=totalMark;
	document.getElementById("grade5").value=grade;
	document.getElementById("point5").value=point;
}
function phy2(){
	var tMark = document.getElementById("tMark6").value;
	var pMark = document.getElementById("pMark6").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark6").value=totalMark;
	document.getElementById("grade6").value=grade;
	document.getElementById("point6").value=point;
}


function chm1(){
	var tMark = document.getElementById("tMark7").value;
	var pMark = document.getElementById("pMark7").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark7").value=totalMark;
	document.getElementById("grade7").value=grade;
	document.getElementById("point7").value=point;
}


function chm2(){
	var tMark = document.getElementById("tMark8").value;
	var pMark = document.getElementById("pMark8").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark8").value=totalMark;
	document.getElementById("grade8").value=grade;
	document.getElementById("point8").value=point;
}

function bio1(){
	var tMark = document.getElementById("tMark9").value;
	var pMark = document.getElementById("pMark9").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark9").value=totalMark;
	document.getElementById("grade9").value=grade;
	document.getElementById("point9").value=point;
}


function bio2(){
	var tMark = document.getElementById("tMark10").value;
	var pMark = document.getElementById("pMark10").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark10").value=totalMark;
	document.getElementById("grade10").value=grade;
	document.getElementById("point10").value=point;
}







function fourS(){
	var tMark = document.getElementById("tMark11").value;
	var pMark = document.getElementById("pMark11").value;
	totalMark = (parseInt(tMark)+parseInt(pMark));
	markC(totalMark);
	document.getElementById("totalMark11").value=totalMark;
	document.getElementById("grade11").value=grade;
	document.getElementById("point11").value=point;
}


function totalC(){
	if(document.getElementById("grade").value=="F" || document.getElementById("grade1").value=="F" || document.getElementById("grade2").value=="F"
	  || document.getElementById("grade3").value=="F" || document.getElementById("grade4").value=="F" || document.getElementById("grade5").value=="F"
      || document.getElementById("grade6").value=="F" || document.getElementById("grade7").value=="F" || document.getElementById("grade8").value=="F"
	  || document.getElementById("grade9").value=="F" || document.getElementById("grade10").value=="F"){

		document.getElementById("totalG").value= "F";
		document.getElementById("totalP").value= "0.00";
	}
	else{
		var mark1=document.getElementById("totalMark").value;
		var mark2=document.getElementById("totalMark1").value;
		var mark3=document.getElementById("totalMark2").value;
		var mark4=document.getElementById("totalMark3").value;
		var mark5=document.getElementById("totalMark4").value;
		var mark6=document.getElementById("totalMark5").value;
		var mark7=document.getElementById("totalMark6").value;
		var mark8=document.getElementById("totalMark7").value;
		var mark9=document.getElementById("totalMark8").value;
		var mark10=document.getElementById("totalMark9").value;
		var mark11=document.getElementById("totalMark10").value;
		var mark12=document.getElementById("totalMark11").value;

		var avr = ((parseInt(mark1)+parseInt(mark2)+parseInt(mark3) +parseInt(mark4) +parseInt(mark5) +parseInt(mark6)
		+parseInt(mark7)+parseInt(mark8)+parseInt(mark9)+parseInt(mark10)+parseInt(mark11)+parseInt(mark12))/12);
		document.getElementById("total").value = avr;
		var g="";
		var point1=document.getElementById("point").value;
		var point2=document.getElementById("point1").value;
		var point3=document.getElementById("point2").value;
		var point4=document.getElementById("point3").value;
		var point5=document.getElementById("point4").value;
		var point6=document.getElementById("point5").value;
		var point7=document.getElementById("point6").value;
		var point8=document.getElementById("point7").value;
		var point9=document.getElementById("point8").value;
		var point10=document.getElementById("point9").value;
		var point11=document.getElementById("point10").value;
		

		var totalPoint = ((parseFloat(point1)+parseFloat(point2)+parseFloat(point3)+parseFloat(point4)+parseFloat(point5)
		+parseFloat(point6)+parseFloat(point7)+parseFloat(point8)+parseFloat(point9)+parseFloat(point10)+parseFloat(point11))/11);

		if(document.getElementById("grade11").value=="A+"){
			totalPoint += .3;
			if(totalPoint > 5 ){
				totalPoint = "5.00";
			}
		}
		else if(document.getElementById("grade11").value=="A"){
			totalPoint += .2;
			if(totalPoint > 5 ){
				totalPoint = "5.00";
			}
		}
		else if(document.getElementById("grade11").value=="A-"){
			totalPoint += .1;
			if(totalPoint > 5 ){
				totalPoint = "5.00";
			}
		}

		if(totalPoint == 5){
			g="A+";
		}
		else if(totalPoint >=4 && totalPoint <= 4.99){
			g="A";
		}
		else if(totalPoint >=3.5 && totalPoint <= 3.99){
			g="A-";
		}
		else if(totalPoint >=3 && totalPoint <= 3.49){
			g="B";
		}
		else if(totalPoint >=2 && totalPoint <= 2.99){
			g="C";
		}
		else if(totalPoint >=1 && totalPoint <= 1.99){
			g="D";
		}
		document.getElementById("totalP").value= totalPoint;
		document.getElementById("totalG").value= g;
	}
}
