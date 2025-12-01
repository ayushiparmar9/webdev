function On(){
    document.getElementById("bulb").style.backgroundColor ="yellow";
}
function Off(){
    document.getElementById("bulb").style.backgroundColor ="white";
}
function Red(){
document.getElementById("bulb").style.backgroundColor ="Red";
}
function Blue(){
document.getElementById("bulb").style.backgroundColor ="Blue";
}
function Green(){
document.getElementById("bulb").style.backgroundColor ="Green";
}
 const userColor = document.getElementById("color");
 
 userColor.addEventListener("change", () => changeBulbColor(userColor.value) );


 function changeBulbColor(color){
    document.getElementById("bulb").style.backgroundColor = color;
 }
 function SB_control(){
   const btn =  document.getElementById("sbbutton")
    if(btn.innerText === "On"){
document.getElementById("sbbutton").innerText="Off";
document.getElementById("smartBulb").classList.add("On")
    }else{
document.getElementById("sbbutton").innerText="On";
document.getElementById("smartBulb").classList.remove("On")
    }
 }
 function SB_control2(){
    document.getElementById("smartBulb").classList.toggle("On")
 }



