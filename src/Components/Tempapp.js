import React, { useEffect, useState } from 'react';
import './Style.css';

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("ahmedabad");
    const [country, setCountry] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect( () => {

        const fetchApi = async () =>{

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3e2f598290256367e8685fb986c148c5`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);  
            setCountry(resJson.sys);
            setWeather(resJson.weather)

        }

        fetchApi();

    },[search] )

    return(
        <div>
              <div className='box'>
                  <div className='inputData'>
                      <input type='search' className='inputFeild' placeholder='Enter your city name' onChange={ (event) => { setSearch(event.target.value) } } />
                  </div>
                         {!(city && country && weather) ? (<p className='errorMsg'> No Data Found</p>): (
                     <div>
                    
                      <div className='info'>

                        <h1 className='location'>
                        <i className="fa-sharp fa-solid fa-street-view"></i>{search}
                        </h1>

                        <h2 className='temp'>
                        {city.temp}°C {weather.map((sunny)=><p>{sunny.main}</p>)}
                        </h2>

                        <h3 className='con'>
                        country : {country.country}
                        </h3>
                        
                        <h3 className='tempmin_max'>
                        min : {city.temp_min}°C | max : {city.temp_max}°C
                        </h3>

                      </div>

                    </div>) 
                }
            </div>
        </div>
    )
}

export default Tempapp;