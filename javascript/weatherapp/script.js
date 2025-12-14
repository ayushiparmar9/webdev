 async function getWeather(){
    const city = document.getElementById("city").value.trim();
 const {lat , lon} = await getGeoloc(city);
 const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b6af5fd22e46e32490caa18126a821aa`);
 const data = await response.json();
 document.getElementById("weatherdiv").innerHTML=`
        <div class="d-flex gap-5">
            <div><p>Tempreture :${(data.main.temp -273.14).toFixed(2)}°c</p>
            <p>Humidity :${data.main.humidity}%</p>
            <p>Description : ${data.weather[0].description}</p></div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
        </div>
      `;

}

 async function getGeoloc(city){
   console.log(city) ;
const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b6af5fd22e46e32490caa18126a821aa`);
const data = await response.json();
const lat = data[0].lat;
const lon= data[0].lon;
 return {lat , lon};

}