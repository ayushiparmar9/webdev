function calculatetip(){
   const ser =  document.getElementById("service").value ;
   const person = document.getElementById("person").value ;
   const bill = document.getElementById("bill").value ;
    const tip = ((ser/100)*bill)/person ;
    return tip
}
function calculate(){
    
   
    const ans = calculatetip();
const ans2 = document.createElement("p");
ans2.innerText = "Tip amount :" + ans + "Rs";
ans2.style.fontSize = "20px";
const ansdiv = document.getElementById("box");
ansdiv.innerHTML = ""; 

ansdiv.appendChild(ans2);


document.getElementById("service").value ="";
  document.getElementById("person").value="";
  document.getElementById("bill").value="";



}
