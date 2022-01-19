import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Weather from './Weather';

const RequestApi = () => {
   
    const [weather, setWeather] = useState ({})

    const temperatureC = Math.floor(weather?.main?.temp - 273.15)
    const temperatureF = (temperatureC * 9/5) + 32


    const success = position =>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a1ead7b1012f3335e53baf5a76134ce5`)
          .then(res => setWeather(res.data))          
    }    
    
      const error = () => {
      }

    useEffect(() => {       
        navigator.geolocation.getCurrentPosition(success, error)
    }, [])
  
  return (
    <div> 
     {      
       <Weather 
          city={weather.name} 
          country={weather.sys?.country} 
          wind={weather.wind?.speed} 
          clouds={weather.clouds?.all} 
          pressure={weather.main?.pressure} 
          weather={weather.weather} 
          temperatureC={temperatureC} 
          temperatureF={temperatureF} 
        />        
      }      
    </div>
  );
}

export default RequestApi
