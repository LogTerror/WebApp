function onButtonClicked(){
  alert("Hello World!");
  time = setInterval("increase()",500);
}

var size = "12pt";
var time;
function increase(){
		$("input").style.fontSize = size;
		size = parseInt(size);
		size = (size + 2) + "pt";
}

function onCheckBoxClicked(){
   if ($("checkbox").checked == true){
       $("input").style.fontWeight = "bold";
       $("input").style.textDecoraiton = "underline";
       $("input").style.color = "green";
       document.body.style.backgroundImage = "url(https://selab.hanyang.ac.kr/courses/cse326/2019/labs/images/8/hundred.jpg)";
   }
   else{
       $("input").style.fontWeight = "";
       $("input").style.color = "";
       $("input").style.textDecoraiton = "";
       document.body.style.backgroundImage = "";
   }
}

function Snoopify(){
   var str = $("input").value.toUpperCase();
   var strAfterSplit = str.split(".");
   strAfterSplit = strAfterSplit.join("-izzle.");
   $("input").value = strAfterSplit;
}