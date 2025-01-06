
let tempincel="";

function getWeather()

{
    city=document.getElementById('cityinput').value;
    console.log(city);
    
    getWeatherDetails(city);

}

function getWeatherDetails(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca018df54353f065aaed7d802825b8be`)
    .then(responce=>responce.json())
    .then(data=>{
        console.log(data);
        showweather(data);

        
    });
}
getWeatherDetails();



function showweather(data){
    let temp=`${data.main.temp}`
        let    tempincel= Math.floor(temp-273.15) ;
    console.log( "tempincel", tempincel);

  

  
    document.getElementById('weatherdata').innerHTML=`
    <div class="text-center">
                                        <h1>  ${tempincel} <sup>°</sup>C</h1> 
                                            <h2 >${data.weather[0].description}</h2>
                                        
                                          <img src="" alt="" id="imgID" style="height: 140px; width: 140px;">
                                         <h4><i class="fa-solid fa-location-dot fs-5"></i> ${data.name} ,<span class="text-secondary">  ${data.sys.country}</span></h4> 

                                         <h5 class="">Wind</h5>
                                          <span>Speed ${data.wind.speed}</span><br>
                                          <span>Degree ${data.wind.deg}</span>
                                         <p><i class="fa-solid fa-droplet fs-6"> </i>  <b>Humidity</b>  ${data.main.humidity} %</p>
                                          </div>
                                          `



                                          if(data.weather[0].description==="few clouds")
                                            {
                                             document.getElementById('imgID').setAttribute("src","https://img.freepik.com/premium-vector/cloudy-weather-icon-vector-image-can-be-used-ecology_120816-214397.jpg");
                                        
                                            }
                                            if(data.weather[0].description==="smoke")
                                                {
                                                 document.getElementById('imgID').setAttribute("src","https://st4.depositphotos.com/1000507/24025/v/450/depositphotos_240258764-stock-illustration-daytime-foggy-weather-vector-illustration.jpg");
                                            
                                                }
                                                if(data.weather[0].description==="broken clouds")
                                                    {
                                                     document.getElementById('imgID').setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7-bHsK8DZ8pZSVvOV-oVz43VZNOnFBirmcnOGv6NImatK9NLcriU-VVt8IyQYmqUf38&usqp=CAU");
                                                
                                                    }
                                                    if(data.weather[0].description==="clear sky")
                                                        {
                                                         document.getElementById('imgID').setAttribute("src","https://www.flaticon.com/free-icon/clear-sky_3222807?term=clear+sky&page=1&position=9&origin=tag&related_id=3222807");
                                                    
                                                        }
                                                        if(data.weather[0].description==="haze")
                                                            {
                                                             document.getElementById('imgID').setAttribute("src","https://cdn-icons-png.flaticon.com/512/4151/4151022.png");
                                                        
                                                            }

                                                            if(data.weather[0].description==="scattered clouds")
                                                                {
                                                                 document.getElementById('imgID').setAttribute("src","https://cdn-icons-png.flaticon.com/512/136/136722.png");
                                                            
                                                                }
}
