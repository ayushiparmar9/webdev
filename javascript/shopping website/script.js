async function getdata(){
    const response = await fetch();
    const fulldata = await response.json();

    const productdiv = document.getElementById("products");
    productdiv.innerHTML= "";

    fulldata.forEach((ele) => {
        const div = document.createElement(div);
    div.className ="card";

    div.innerHTML = `
    
    `

        
    });
}