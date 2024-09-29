import React, {  useState } from "react";

function Weather() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({});
  console.log(weather);


  
  function handleChange(e) {
    
    setCityName(e.target.value);
    
  }

 

  function handleSearch() {
    const apiKey = "87a473b178ae192b72889c2b6418fce7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    if (cityName) {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setWeather(data);
        })
        .catch((error) => {
          console.log("There was a problem with the fetch operation:", error);
        });
    }
  }

 

  return (
    <div className="flex items-center justify-center h-screen bg-no-repeat bg-cover bg-image">
      <div className="w-3/5 h-4/5 bg-[#ffffff66] rounded-lg flex">
        {/* Left Panel */}
        <div className="flex flex-col justify-between w-1/2 h-full bg-left bg-no-repeat bg-cover rounded-l-lg">
          {/* 1 */}
          <div className="flex justify-center m-4 ">
            <p className="text-2xl font-bold text-white">
              {weather.name && weather.name}{" "}
              {weather.sys && weather.sys.country}
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={`https://openweathermap.org/img/wn/${
                weather.weather && weather.weather[0].icon
              }@2x.png`}
              alt=""
              className="rounded-full bg-[#ffffff85] w-2/5"
            />
          </div>

          {/* 2 */}
          <div className="flex justify-between m-4 ">
            <div className="text-xl font-bold text-gray-200">
              <p>{weather.coord && weather.coord.lon}</p>
              <p>{weather.coord && weather.coord.lat}</p>
            </div>
            <div className="text-2xl font-bold text-gray-200">
              <p>{weather.main && weather.main.temp}°C</p>
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className="w-1/2 h-full">
          <div className="flex items-center justify-center m-4 border-b border-gray-300 h-1/5">
            <img
              src={`http://openweathermap.org/img/wn/${
                weather.weather && weather.weather[0].icon
              }@2x.png`}

              alt=""
              className="rounded-full bg-[#ffffff85] w-20"
            />
          </div>

          <div className="flex w-3/4 mx-auto border border-gray-200 rounded-lg">
            
            <input type="search"onChange={handleChange}value={cityName}placeholder="Search"className="px-2 py-1 text-white placeholder-white bg-transparent outline-none"  />

            <span onClick={handleSearch}className="p-1 text-xl text-white rounded-full cursor-pointer material-symbols-outlined float-end">search </span>
          </div>
          {weather.name && (
            <div className="my-5 font-semibold text-center text-white">
              <p>
                {weather.name}, {weather.sys && weather.sys.country}
              </p>
              <p>{weather.weather && weather.weather[0].description}</p>
            </div>
          )}
          {weather.main && (
            <>
              <div className="flex justify-around p-2 m-6 font-bold text-white border-b border-gray-300">
                <p>Temp</p>
                <p>{weather.main && weather.main.temp}°C</p>
              </div>
              <div className="flex justify-around p-2 m-6 font-bold text-white border-b border-gray-300">
                <p>Visibility</p>
                <p>{weather.visibility && weather.visibility / 1000}Km</p>
              </div>
              <div className="flex justify-around p-2 m-6 font-bold text-white border-b border-gray-300">
                <p>Wind Speed</p>
                <p>{weather.wind && weather.wind.speed}meter/sec</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;