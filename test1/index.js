function submit(){
    const na = document.getElementById("name").value ;
    alert("thank you for enrolling"+na);
}
function correct(){
   const na = document.getElementById("name").value ;
   const em = document.getElementById("email").value;
   const mes = document.getElementById("messege").value;
   if(na!=""&& em!=""&& mes!=""){
    alert("thank you for contacting us"+ na);
   }


}