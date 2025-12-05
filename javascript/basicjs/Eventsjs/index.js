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

 document.getElementById("c1").addEventListener("mouseenter",()=>{
    fillcolor("pink");
 });
 document.getElementById("c2").addEventListener("mouseenter",()=>{
    fillcolor("voilet");
 });
 document.getElementById("c3").addEventListener("mouseenter",()=>{
    fillcolor("yellow");
 });
 document.getElementById("c4").addEventListener("mouseenter",()=>{
    fillcolor("green");
 });
 document.getElementById("c5").addEventListener("mouseenter",()=>{
    fillcolor("blue");
 });
 document.getElementById("c6").addEventListener("mouseenter",()=>{
    fillcolor("red");
 });
 document.getElementById("c7").addEventListener("mouseenter",()=>{
    fillcolor("aqua");
 });





 function fillcolor(color){
    document.getElementById("rainbowbulb").style.backgroundColor = color;

 }


