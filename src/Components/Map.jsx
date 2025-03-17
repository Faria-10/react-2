import React from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black p-2 rounded shadow-md text-sm">
        <p>{`Time: ${payload[0].payload.time}`}</p>
        <p>{`Temp: ${payload[0].value}°C`}</p>
        <p>{`Rain: ${payload[0].payload.rain}%`}</p>
      </div>
    );
  }
  return null;
};

const Map = ({ selectedDay }) => {
  if (!selectedDay) return null;

  // Format hourly forecast data
  const data = selectedDay.hour.map((hour) => ({
    time: new Date(hour.time).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    temp: hour.temp_c,
    rain: hour.chance_of_rain,
  }));

  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-md">
      {/* For using responsive chart */}
      <ResponsiveContainer width="100%" height={180}> 
        {/* Temperature dikhany ky liy */}
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        {/* time lable ky liy */}
          <XAxis dataKey="time" tick={{ fill: "black", fontSize: 12 }} axisLine={false} />
           {/* rain wagyra show krny ky liy */}
           <Tooltip content={<CustomTooltip />} />
            {/* temperature ko ak smooth ar shaded graph my dikhny ky liy */}
          <Area type="monotone" dataKey="temp" stroke="#EAB308" fill="#FEF3C7" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex justify-between mt-2 text-xs text-blue-600">
        {data.map((d, index) => (
          <div key={index} className="text-center">
            {d.rain > 0 && (
              <div className="flex flex-col items-center">
                <span className="text-blue-500 text-lg">💧</span>
                <span className="text-xs font-semibold">{d.rain}%</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
