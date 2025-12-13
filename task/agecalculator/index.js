function calculateage(){
    const dobvalue = document.getElementById("dob").value ;

    const currvalue = document.getElementById("currentdate").value;
    const dob = new Date(dobvalue);
    const curr = new Date(currvalue);
    const yob = dob.getFullYear();
    const cy = curr.getFullYear();
    const mob = dob.getMonth();
    const cm = curr.getMonth();

     const age = cy- yob;
     if(mob> cm){
        return age-1 ;
     }else{
        return age;
     }
     
}
function calculate(){
    
   
    const ans = calculateage();
const ans2 = document.createElement("p");
ans2.innerText = "your age is  " + ans;
ans2.style.fontSize = "20px";
const ansdiv = document.getElementById("box");
ansdiv.innerHTML = ""; 

ansdiv.appendChild(ans2);


document.getElementById("dob").value ="";
  document.getElementById("currentdate").value="";


}
