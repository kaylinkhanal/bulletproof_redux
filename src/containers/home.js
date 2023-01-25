import React, {useEffect, useState} from 'react';
const API = 'http://api.weatherapi.com/v1/current.json?key=f1cd1b9daab0441381011929232501&q='
const Home = () => {
    const [country, setCountry] = useState('')
    const [weatherDetails, setWeatherDetails] = useState({})

    const fetchWeatherDetails = () => {
        const fetchRoute = `${API}${country}`
        fetch(fetchRoute)
        .then(res=>res.json())
        .then(data=>setWeatherDetails(data))
    }
  return (
    <div>
        <input placeholder="enter a country" onKeyUp={(e)=> setCountry(e.target.value)}/>
        {weatherDetails?.location?.name}
        <button onClick={()=> fetchWeatherDetails()}>Get weather details</button>
    </div>
  );
};

export default Home;
