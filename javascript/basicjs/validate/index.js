function submit(){
    const nm = document.getElementById("name").value.trim() ;
    const em = document.getElementById("email").value.trim() ;
    const ph = document.getElementById("phone").value.trim() ;
    const db = document.getElementById("dob").value.trim() ;
document.querySelectorAll(" .Error").forEach((element)=>{
    element.innerHTML ="";
});

if(!nm){
    document.getElementById("nameerror").innerText = "required";
}else if(!/^[A-Za-z ]+$/.test(nm)){
    document.getElementById("nameerror").innerText =
      "Only Alphabets and Spaces are Allowed";
    return;
    
}

if(!em){
    document.getElementById("emailerror").innerText = "required";
}else if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)){
     document.getElementById("emailerror").innerText = "Use Proper Email Format";
    return;

}

if(!ph){
    document.getElementById("phonerror").innerText ="required" ;
}else if(!/^[6-9]\d{9}$/.test(ph)){
document.getElementById("phonerror").innerText =
      "Only Indian Mobile Nummber allowed";
    return;
}


if(!db){
    document.getElementById("doberror").innerText = "Required";
  return;
}
   else {
    const currentyear = new Date().getFullYear();
    const birthyear = Number(db.split("-")[0]);
    if (currentyear - birthyear < 17) {
      document.getElementById("doberror").innerText =
        "You must be 18 years Old";
      return;
    }
  }




    const data={
    fullname: nm,

    Email: em ,
    
    phone:ph,
    dob: db,


    };
    console.log(data);

}
// function validate(name){
     
// for( i=0; i<name.length(); i+1) {
//    String ch =  name.charAt(i);
// if((ch + "0")>=97 ||(ch +"0"<=122 ||ch== "")){
//     return true;
// }
// }
// return false;
// }
