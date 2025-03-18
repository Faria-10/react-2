import React, { useState, useEffect } from "react";
import axios from "axios";
import TimeandLocation from "./TimeandLocation";
import TemperatureandDetail from "./TemperatureandDetail";
import Timing from "./Timing";
import Map from "./Map";


const Forecast = ({ cityName }) => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [dateTime, setDateTime] = useState("");
  const [selectedHour, setSelectedHour] = useState(new Date().getHours());

  const fetchForecast = async (searchCity) => {
    if (!searchCity) return;

    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=03cfc1ab890144399d962425251003&q=${searchCity}&days=7&aqi=no`
      );

      setForecastData(response.data.forecast.forecastday);
      setSelectedDay(response.data.forecast.forecastday[0]);
      setDateTime(new Date(response.data.location.localtime).toLocaleString());

      setLoading(false);
    } catch (error) {
      setError("City not found. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForecast(cityName);
  }, [cityName]);

  // ✅ Dynamic Night Mode Background Based on Selected Hour
  const isNightTime = selectedHour >= 18 || selectedHour < 6;
  const backgroundClass = isNightTime ? "bg-black text-white" : "bg-blue-500 text-black";

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className={`transition-all duration-500 ${backgroundClass}`}>
      <TimeandLocation dateTime={dateTime} />
      <TemperatureandDetail currentForecast={selectedDay} selectedHour={selectedHour} />

      {/* Pass Hour Change Handler */}
      <Timing currentForecast={selectedDay} onHourChange={setSelectedHour} />

      <div className="flex overflow-x-auto py-4 space-x-4 mx-4">
        {forecastData?.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300 
              ${selectedDay?.date === day.date ? "bg-white text-black" : "bg-sky-400 text-black"}
              ${selectedDay?.date !== day.date ? "hover:bg-sky-300" : ""} 
              rounded-lg p-4`}
            onClick={() => setSelectedDay(day)}
          >
            <p className="font-light text-sm">
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
              })}
            </p>
            <img
              src={`https:${day.day.condition.icon}`}
              alt="Weather Icon"
              className="w-16 h-16"
            />
            <p className="font-medium">{day.day.maxtemp_c}°C</p>
            <p className="font-medium">{day.day.mintemp_c}°C</p>
          </div>
        ))}
      </div>

      <Map selectedDay={selectedDay} />
    </div>
  );
};

export default Forecast;
