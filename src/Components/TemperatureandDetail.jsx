import React, { useState } from "react";

const TemperatureandDetail = ({ currentForecast, selectedHour }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  // Get hourly forecast for the selected hour
  const hourlyData = currentForecast?.hour?.[selectedHour] || {};

  const tempC = hourlyData.temp_c || 22; // Default value if no data
  const tempF = (tempC * 9) / 5 + 32;

  return (
    <div className="flex items-center text-white py-2 space-x-6">
      {/* Weather Icon */}
      <img src={hourlyData.condition?.icon ? `https:${hourlyData.condition.icon}` : "https://cdn.weatherapi.com/weather/64x64/day/116.png"} 
           className="h-20 w-20" 
           alt="weather icon" 
      />

      {/* Temperature */}
      <div className="text-center">
        <p className="text-5xl">{isCelsius ? tempC : tempF}°</p>
      </div>

      {/* Temperature Toggle */}
      <div className="flex flex-col items-center text-lg ml-2">
        <button onClick={() => setIsCelsius(true)} className={`font-light ${isCelsius ? "border-b border-white" : ""}`}>
          °C
        </button>
        <button onClick={() => setIsCelsius(false)} className={`font-light ${!isCelsius ? "border-b border-white" : ""}`}>
          °F
        </button>
      </div>

      {/* Weather Details */}
      <div className="flex flex-col text-lg ml-3">
        <p>Humidity: {hourlyData.humidity || 49}%</p>
        <p>Wind: {hourlyData.wind_kph || 10.8} KMPH</p>
      </div>
    </div>
  );
};

export default TemperatureandDetail;
