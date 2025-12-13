function submit(){
    const DF = Math.floor(Math.random() * 10) + 1;
const guess = document.getElementById("guess").value ;
if(DF == guess){
    
    const ans2 = document.createElement("p");

ans2.innerText = "wohooo!! you guessed it right."
ans2.style.fontSize = "20px";
ans2.style.color = "green";
const ansdiv = document.getElementById("box");
ansdiv.innerHTML = ""; 

ansdiv.appendChild(ans2);

}else if(guess>DF){
    alert("sorry!! try a smaller number");
}else{
    alert("sorry!! try a greater number");
}
 document.getElementById("guess").value = "";
// while(DF!=guess){
//      if(guess>DF){
//     alert("sorry!! try a smaller number");
//     document.getElementById("guess").value = "";
// }else{
//     alert("sorry!! try a greater number");
//     document.getElementById("guess").value = "";
//  }
 

// }
// const ans2 = document.createElement("p");

//  ans2.innerText = "wohooo!! you guessed it right."
//  ans2.style.fontSize = "20px";
//  ans2.style.color = "green";
// const ansdiv = document.getElementById("box");
//  ansdiv.innerHTML = ""; 

//  ansdiv.appendChild(ans2)

    
}




