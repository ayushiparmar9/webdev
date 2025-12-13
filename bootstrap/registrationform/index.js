function submit(){

     const selectedBatch = [];
     document.querySelectorAll("input[name='batch']:checked").forEach((element=>{
        selectedBatch.push(element.value)
     }));
     console.log(selectedBatch);


     const Na =document.getElementById("name").value;
     const mo =document.getElementById("mobile").value;
     const em =document.getElementById("email").value;
     const dob =document.getElementById("dob").value;
     const Qu =document.getElementById("qualifications").value;
     const sco =document.getElementById("score").value;
     const cou =document.getElementById("course").value;
     const Add =document.getElementById("address").value;
     const pi =document.getElementById("pin").value;
     const cit =document.getElementById("text").value;
     const Gna =document.getElementById("Gname").value;
     const Gmo =document.getElementById("Gmobile").value;
     const hduhau =document.getElementById("AI").value;
     const sr  =document.getElementById("special requirements").value;

     document.querySelectorAll(" .Error").forEach((element)=>{
    element.innerHTML ="";
});
if(!Na){
    document.getElementById("nameerror").innerText = "required";
}else if(!/^[A-Za-z ]+$/.test(nm)){
    document.getElementById("nameerror").innerText =
      "Only Alphabets and Spaces are Allowed";
    return;
    
}
if(!Gna){
    document.getElementById("nameerror").innerText = "required";
}else if(!/^[A-Za-z ]+$/.test(nm)){
    document.getElementById("nameerror").innerText =
      "Only Alphabets and Spaces are Allowed";
    return;
    
}
if(!Gmo){
    document.getElementById("phonerror").innerText ="required" ;
}else if(!/^[6-9]\d{9}$/.test(mo)){
document.getElementById("phonerror").innerText =
      "Only Indian Mobile Nummber allowed";
    return;
}
if(!Qu){
    document.getElementById("Qerror").innerText = "required";}
    if(!cou){
    document.getElementById("couerror").innerText = "required";}
   



if(!em){
    document.getElementById("emailerror").innerText = "required";
}else if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)){
     document.getElementById("emailerror").innerText = "Use Proper Email Format";
    return;

}

if(!mo){
    document.getElementById("phonerror").innerText ="required" ;
}else if(!/^[6-9]\d{9}$/.test(mo)){
document.getElementById("phonerror").innerText =
      "Only Indian Mobile Nummber allowed";
    return;
}
if(!sco){
    document.getElementById("phonerror").innerText ="required" ;
}else if(!/^(100(\.\d+)?|[1-9]\d(\.\d+)?)$/.test(sco)){
document.getElementById("phonerror").innerText =
      "Only Indian Mobile Nummber allowed";
    return;
}


if (!dob) {
    document.getElementById("doberror").innerText = "Required";
    return;
  } else {
    const currentyear = new Date().getFullYear();
    const birthyear = Number(db.split("-")[0]);
    if (currentyear - birthyear < 17) {
      document.getElementById("doberror").innerText =
        "You must be 18 years Old";
      return;
    }
  }





























}