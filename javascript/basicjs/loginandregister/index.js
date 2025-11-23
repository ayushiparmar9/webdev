function Login(){
    console.log("login button clicked");

    const em =document. getElementById("email").value;
    const ps =document. getElementById("password").value;
    console.log(em ,ps);

    alert("login done");
    document. getElementById("email").value=""; //getting it ready for next input//
    document. getElementById("password").value="";


}
function registration(){
    console.log("Registration button clicked" );

 const Na =document. getElementById("name").value;
    const Em =document. getElementById("emailregister").value;

 const Ps =document. getElementById("pass").value;
    const Cps =document. getElementById("pass2").value;
    console.log(Na ,Em , Ps , Cps)

    alert("register done");
    document. getElementById("name").value="";
    document. getElementById("emailregister").value="";

 document. getElementById("pass").value="";
    document. getElementById("pass2").value="";

}