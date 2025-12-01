function start() {
  console.log("Game started");
  document.getElementById("rolldice1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
}
function p1play() {
  console.log("player1playing");
  let Score = Number(document.getElementById("p1score").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

switch(DF){

    case 1:{ document.getElementById("image1").src= "1dice.jpg";
    break;}
    case 2:{ document.getElementById("image1").src="2dice.jpg";
    break;}
    case 3:{ document.getElementById("image1").src="3dice.jpg";
    break;}
    case 4:{ document.getElementById("image1").src="4dice.jpg";
    break;}
    case 5:{ document.getElementById("image1").src="5dice.jpg";
    break;}
    case 6:{ document.getElementById("image1").src="6dice.jpg";
    break;}
    default:{ document.getElementById("image1").src="6dice.jpg";
    break;}




}






  if (DF === 6) {
    document.getElementById("rolldice1").disabled = true;
    document.getElementById("rolldice2").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p1score").innerText = Score;
  }

if(Score>=100){
console.log("player1 won");
document.getElementById("rolldice1").disabled = true;
console.log("game ended!");
window.location.reload();
    
}

}


function p2play() {
  console.log("player1playing");
  let Score = Number(document.getElementById("p2score").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

// shorcut
document.getElementById("image2").src = `${DF}dice.jpg`;




  if (DF === 6) {
    document.getElementById("rolldice2").disabled = true;
    document.getElementById("rolldice1").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p2score").innerText = Score;
  }
  if(Score>=100){
console.log("player2 won");
document.getElementById("rolldice2").disabled = true;
  console.log("game ended!");
window.location.reload();
      
}
}
