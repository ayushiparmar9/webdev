
let b=1,
c=1,
g=0,
s=0;







const img = document.getElementById("image");
console.log(img.src);

if (img.src === "http://127.0.0.1:5500/javascript/basicjs/imageEditor/index.html") {
  document.getElementById("image").style.display = "none";
}

function uploadimage() {
  const file = document.getElementById("upload").files[0];
  const fileURL = URL.createObjectURL(file);

  document.getElementById("image").src = fileURL;
  document.getElementById("image").style.display = "block";
  document.getElementById("uploadlabel").style.display = "none";
  applyfilter();
}
function applyfilter() {
  document.getElementById(
    "image"
  ).style.filter = `brightness(${b}) 
  contrast(${c})
  
   sepia(${s}%) 
   
   grayscale(${g}%)
   `;
}

function changeBrightness() {
  const value = document.getElementById("brightness").value;
  b = (value*2)/100;
  applyfilter();
}

function changecontrast() {
  const value = document.getElementById("contrast").value;
  c=(value*2)/100;
  applyfilter();

}
function changegrayscale() {
  const value = document.getElementById("grayscale").value;
  g=value;
  applyfilter();
}

function changesepia() {
  const value = document.getElementById("sepia").value;
  s= value;
  applyfilter();
}


function reset(){
   b=1;
   c=1;
   g=0;
   s=0;
   
   

   applyfilter();
   document.getElementById("brightness").value="50";
   document.getElementById("contrast").value="50";
   document.getElementById("sepia").value="0";
   
   document.getElementById("grayscale").value="0";
}
function download(){
   
   if(img.src==="http://127.0.0.1:5500/javascript/basicjs/imageEditor/index.html"){
      alert("plz upload the image");
      return;
   }
   if(!img.complete){
      alert("image upload the progress");
      return;
   }

   const canvas = document.createElement("canvas");
   const ctx = canvas.getContext("2d");

   // fetch dimensions
   canvas.width = img.naturalWidth;
   canvas.height=img.naturalHeight;
   const filter =  getComputedStyle(img).filter;

   ctx.filter = filter === "none"?"none":filter;
   ctx.drawImage(img , 0 ,0, canvas.width, canvas.height);
   const dataURL = canvas.toDataURL("image/png");
   const anchorTag = document.createElement("a");
   anchorTag.href = dataURL;
   anchorTag.download = "editedImage.png";
   document.body.appendChild(anchorTag);
   anchorTag.click();
   document.body.removeChild(anchorTag);

}


