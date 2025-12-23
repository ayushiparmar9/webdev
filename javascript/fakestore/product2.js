async function getproduct(){
    console.log("fetchimng");
    try{
        const res =  await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const con = document.getElementById("con");
        console.log(data);
        data.forEach(element => {
            console.log(element);
            const d = document.createElement("div");
            d.classList.add( "design","row" );
            d.innerHTML=` <div class="col-3  h-100" id= "imagediv">
                <img src=${element.image} alt="" class="w-75 h-75 object-fit-contain rounded"></div>
            <div class="col-9">
                
                 <div class="h-50  p-2">
                <div class="fw-bold fs-5">${element.title}</div>
                <div class="fw-semibold">${element.rating.rate}</div>
                <div class="fw-bold fs-5">₹ ${element.price*100}</div>
                <div class="mb-5">
                 ${element.description.slice(0,50)}...
                  
                </div>
                <div class="d-flex justify-content-center gap-3 mt-5"><button class="btn btn-outline-primary">Add to cart</button>
                    <button class="btn btn-primary">buy now</button>
                </div>





            </div>`;
            
            
        
    
              
            
            
            con.appendChild(d);

            
        });
    }catch(error){
        console.log();
    }
}
getproduct();



