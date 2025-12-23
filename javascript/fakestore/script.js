
async function getproduct(){
    console.log("fetchimng");
    try{
        const res =  await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const  productList = document.getElementById("productRow");
        console.log(data);
        data.forEach(element => {
            console.log(element);
            const d = document.createElement("div");
            d.classList.add("col-4" ,"p-2");
            console.log(d);
            d.innerHTML =`<div class="card border border-dark rounded shadow p-3">
              <div class="h-50 border border-primary rounded-top-2">
                <img
                  src=${element.image}
                  alt=${element.title}
                  class="w-100 h-100 object-fit-contain rounded"
                />
              </div>
              <div class="h-50 border p-2">
                <div class="fw-bold fs-5">${element.title}</div>
                <div class="fw-semibold">${element.rating.rate}</div>
                <div class="fw-bold fs-5">₹ ${element.price*100}</div>
                <div class="mb-2">
                 ${element.description.slice(0,50)}...
                  
                </div>
                <div class="d-flex justify-content-center gap-3"><button class="btn btn-outline-primary">Add to cart</button>
                    <button class="btn btn-primary">buy now</button>
                </div>
              </div>
            </div>
            `;
            productList.appendChild(d);

            
        });
    }catch(error){
        console.log();
    }
}
getproduct();














