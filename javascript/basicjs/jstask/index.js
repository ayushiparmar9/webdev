const userColor = document.getElementById("color");
 
 userColor.addEventListener("change", () => changeBgColor(userColor.value) );


 function changeBgColor(color){
    document.getElementById("div1").style.backgroundColor = color;
 }
 const userColor2 = document.getElementById("color2");
 
 userColor2.addEventListener("change", () => changeBgColor2(userColor2.value) );


 function changeBgColor2(color2){
    document.getElementById("hd1").style.color = color2;
 }
 const userColor3 = document.getElementById("color3");
 
 userColor3.addEventListener("change", () => changeBgColor3(userColor3.value) );


 function changeBgColor3(color3){
    document.getElementById("p1").style.color = color3;
 }