import React, { useState } from 'react';


const Weather = ({city, country, temperatureC, weather, wind, clouds, pressure, temperatureF }) => {
    const [isTrue, setIsTrue] = useState(false)

    return(
        
            <div className="card">
                <h2 className="text-center">Ubicacion</h2>

                <div className="text-center2">{city}, {country}.</div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="text-center">
                            {
                                weather?.map(cloud =>
                                    <img className="size" src={ `https://openweathermap.org/img/wn/${cloud.icon}@2x.png`}  alt="" key={cloud.id} width="150" height="150"/> 
                                    )
                            }
                        </div>

                        <div className="temperature text-center text-black">
                            {
                                isTrue? <div className="text-center">{temperatureC} °C </div> 
                                : <div className="text-center">{temperatureF} °F</div>
                            }
                        </div>
                    </div>                
                
                    <div className="col-sm-6">
                        <ul>
                            {
                                weather?.map(description => 
                                    
                                        <li className="text-center" key={description.id}>
                                            "{description.description}"
                                        </li>                              
                                    )
                            }                     

                            <li>
                                <div className="icon">
                                    <i className="fas fa-wind"></i>
                                </div> 
                                Wind speed: <span className="text-black">{wind} m/s</span>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-cloud"></i>    
                                </div> 
                                Clouds: <span className="text-black">{clouds}%</span>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-thermometer-three-quarters"></i>
                                </div> 
                                Pressure: <span className="text-black">{pressure} mb</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card2">
                    <button type="button" onClick={() => setIsTrue(!isTrue)} className="change">
                        Cambiar °F/°C
                    </button>
                </div>
            </div>
        
    )
}

export default Weather;