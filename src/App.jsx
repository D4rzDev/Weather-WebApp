import React from 'react';
import './App.css'
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

const [weatherLocation, setWeatherLocation] = useState('');
const [weatherCountry, setWeatherCountry] = useState('');
const [weatherTemp, setWeatherTemp] = useState('');
const [weatherHumidity, setWeatherHumidity] = useState('');
const [weatherCondition, setWeatherCondition] = useState('');
const [windKph, setwindKph] = useState('');
const [feelsLike, setfeelsLike] = useState('');
const [preasure, setPreasure] = useState('');
const [location, setLocation] = useState('11.562250,124.394630');
const [showDropdown, setShowDropdown] = useState(false);

 const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
    setShowDropdown(false);
    
  };

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: location},
  headers: {
    'X-RapidAPI-Key': 'cd936098damshc833db44e93774ep1f5c4fjsne8380714294f',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

Axios.request(options)
  .then(response => {
    console.log(response.data);
    setWeatherLocation(response.data.location.name);
    setWeatherCountry(response.data.location.country); 
    setWeatherTemp(response.data.current.temp_c);     
    setWeatherHumidity(response.data.current.humidity);   
    setWeatherCondition(response.data.current.condition.text);
    setwindKph(response.data.current.wind_kph);
    setfeelsLike(response.data.current.feelslike_c);
    setPreasure(response.data.current.pressure_in);

  })
  .catch(error => {
    console.error(error);
  });


  return (
   <div className='flex flex-col items-center justify-center gap-4 my-20' >
      <div className='top relative flex flex-col items-center justify-center h-full px-40 w-[310px] md:w-[700px] md:flex-row md:justify-between md:h-[300px]'>

        <div className=' absolute top-0 right-0 py-4 px-4 md:top-0 md:right-0' >
          <div className='dropdown'>
              <button className='dropbtn bg-transparent border-none text-white' onClick={() => setShowDropdown(!showDropdown)}>
                <img className=' h-6 w-6 md:h-10 md:w-10' src="/filter.png" alt="" />
              </button>
              {showDropdown && (
                <div className='dropdown-content absolute right-0 text-white text-sm md:text-lg'>
                  <a href="#" onClick={() => handleLocationChange("11.562250,124.394630")}>Naval</a>
                  <a href="#" onClick={() => handleLocationChange("11.680278,124.357132")}>Almeria</a>
                  <a href="#" onClick={() => handleLocationChange("11.655881, 124.538913")}>Culaba</a>
                  <a href="#" onClick={() => handleLocationChange("11.572132,124.581261")}>Caibiran</a>
                  <a href="#" onClick={() => handleLocationChange("11.472695,124.574505")}>Cabucgayan</a>
                  <a href="#" onClick={() => handleLocationChange("11.466332,124.473706")}>Biliran</a>
                </div>
              )}
          </div>
        </div>

        <div className=' flex flex-col items-center justify-center mt-6'>
          <p className='flex flex-row items-center justify-center text-2xl font-extrabold md:text-4xl'>{weatherLocation}</p>
          <div className=' flex flex-row items-center justify-center pb-4 md:pb-10'>
            <img className=' h-4 pr-1 md:h-6' src="/placeholder.png" alt="" />
            <p className=' text-m font-extralight md:text-xl'>{weatherCountry}</p>
          </div>
          <p className=' flex items-center justify-center temp text-4xl pb-10 font-normal md:text-6xl'><img className=' h-10 w-10' src="src/assets/hot.png" alt="" />{weatherTemp}<span className=' text-red-600'>°</span></p>
        </div>
        <div className=' flex items-center justify-center mb-6 '>
          <img className=' w-16 h-16 animate-pulse  transition md:h-24 md:w-24' src="/rainy-day.png" alt="Weather Icon" />
        </div>
      </div>
  
     <div className=' flex flex-row items-center justify-center flex-wrap gap-4 md:flex-nowrap'>
      <div className=' cards flex flex-col items-center justify-between h-52 w-40 rounded-2xl py-4 hover:scale-110 transition'>
        <p className=' flex text-start font-bold'>Humidity</p>
        <img className=' h-12 ' src="/humidity.png" alt="" />
        <p className=' font-bold'>{weatherHumidity}%</p>
      </div>
      <div className=' cards flex flex-col items-center justify-between py-4 h-52 w-40 rounded-2xl hover:scale-110 transition '>
         <p className=' font-bold'>Condition</p>
         <img className=' h-16 py-2' src="/weather.png" alt="" />
         <p className=' text-s font-bold'>{weatherCondition}</p>
      </div>
       <div className=' cards flex flex-col items-center justify-between py-4 h-52 w-40 rounded-2xl hover:scale-110 transition'>
        <p className=' flex text-start font-bold'>Wind</p>
        <img className=' h-16 py-2' src="/wind.png" alt="" />
        <p className=' font-bold '>{windKph} kph</p>
      </div>
       <div className=' cards flex flex-col items-center justify-between py-4 h-52 w-40 rounded-2xl hover:scale-110 transition'>
        <p className=' flex text-start font-bold'>Feels Like</p>
        <img className=' h-16 py-2' src="/rain.png" alt="" />
        <p className=' font-bold'>{feelsLike}° </p>
      </div>
       <div className=' cards flex flex-col items-center justify-between py-4 h-52 w-40 rounded-2xl hover:scale-110 transition'>
        <p className=' flex text-start font-bold'>Preasure</p>
        <img className=' h-16 py-2' src="/pressure.png" alt="" />
        <p className=' font-bold '>{preasure}</p>
      </div>
    
    </div>

   </div>
  )
}

export default App
