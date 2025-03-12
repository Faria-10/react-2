import React from "react";

const Timing = ({ currentForecast, onHourChange }) => {
  if (!currentForecast) return null;

  // Function to handle slider movement
  const handleSliderChange = (event) => {
    onHourChange(Number(event.target.value));
  };

  return (
    <div className="relative w-full px-4">
      <div className="flex items-center justify-between text-white py-2">
        {currentForecast.hour?.map((hourData, index) => {
          const hour = new Date(hourData.time).getHours();
          return (
            <div key={index} className="flex flex-col items-center">
              <p className="text-xs">{hour}:00</p>
            </div>
          );
        })}
      </div>

      {/* ✅ Slider UI */}
      <input
        type="range"
        min="0"
        max="23"
        step="1"
        className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer"
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Timing;
