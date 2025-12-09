function adddata(){
    const site = document.getElementById()
    const user=

}
const Datapacket = {
    Website :site,
    username:user,
    passward:ps,
};


function downloadfile(){
    const data = JSON.parse(localStorage.getItem("passward manager"))||{};
    if(data.length <=0){
        alert("no data found");
        return;
    }
    const headers = Object.keys(data[0]).join(",")+"\n";
    // array of json is there therfore we used map not for each
    const rows = data.map((Item)=>Object.value(Item).join(",") ).join("\n");
    const csvContent = headers+ rows;
    // cloud storage is called blob here it is creating an excel file and typing data
    const blob = new Blob([csvContent],{type:"text/csv"});
    const anchortag = document.createElement("a");
    anchortag.href = URL.createObjectURL(blob);
    anchortag.download  = "data.csv";

    
}
// csv comma separeated values 
// data is in the form    site , name ,






