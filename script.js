let myData;
window.onload = 
search.onclick = search_but;
function search_but(){
    let inp = document.getElementById('inp');
    let city_name = document.getElementById('name');
    let search = document.getElementById('search');
   if(!inp.value == ""){
    let str = inp.value.charAt(0).toUpperCase() + inp.value.slice(1);
    city_name.innerText = str ;
   }

   let ct_name = inp.value ;

   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ct_name}&units=metric&appid=df1a75ba9b93924bd4dbde64a59eeb53`)
   .then(response=>response.json())
   .then((data) =>{
    let temp = document.getElementById('temp');
    temp.innerText = data.main.temp + '°C';
    
    let status = document.getElementById('status');
    let img = data.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/w/" + img + ".png";
    status.setAttribute("src",iconurl);

    let f_like = document.getElementById('f-like');
    f_like.innerText = data.main.feels_like + '°C';

    let disc1 = document.getElementById('disc1');
    disc1.innerText = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

    let hum = document.getElementById('hum');
    hum.innerText = data.main.humidity + '%';
    let hum_desc = document.getElementById('hum-desc');
    if(data.main.humidity > 50){
        hum_desc.innerText = "Wet"
    }else(
        hum_desc.innerText = 'Moderate'
    )

    let speed = document.getElementById('speed');
    speed.innerText = data.wind.speed + 'km/h';
    let wind_desc = document.getElementById('wind-desc');
    if(data.wind.speed > 50){
        wind_desc.innerText = 'Speedy!'
    }else{
        wind_desc.innerText = 'Moderate'
    }
    
   });
   
   
}
