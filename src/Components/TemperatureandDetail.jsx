import React, { useState } from "react";

const TemperatureandDetail = ({ currentForecast }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  if (!currentForecast) return null;

  const tempC = currentForecast.day.avgtemp_c;
  const tempF = (tempC * 9) / 5 + 32;
  const maxTempC = currentForecast.day.maxtemp_c;
  const maxTempF = (maxTempC * 9) / 5 + 32;
  const minTempC = currentForecast.day.mintemp_c;
  const minTempF = (minTempC * 9) / 5 + 32;

  return (
    <div className="flex items-center text-white py-2 space-x-6">
      <img
        src={`https:${currentForecast.day.condition.icon}`}
        className="h-28 w-28"
        alt="weather icon"
      />

      <div className="text-center">
        <p className="text-5xl">{isCelsius ? tempC : tempF}°</p>
      </div>

      <div className="flex flex-col items-center text-lg ml-2">
        <button
          onClick={() => setIsCelsius(true)}
          className={`font-light ${isCelsius ? "border-b border-white" : ""}`}
        >
          °C
        </button>
        <button
          onClick={() => setIsCelsius(false)}
          className={`font-light ${!isCelsius ? "border-b border-white" : ""}`}
        >
          °F
        </button>
      </div>

      <div className="text-left text-lg ml-3">
        <p>{isCelsius ? maxTempC : maxTempF}°</p>
        <p>{isCelsius ? minTempC : minTempF}°</p>
      </div>

      <div className="flex flex-col items-start text-lg ml-4">
        <p>Humidity: {currentForecast.day.avghumidity}%</p>
        <p>Wind: {currentForecast.day.maxwind_kph} KMPH</p>
      </div>
    </div>
  );
};

export default TemperatureandDetail;
