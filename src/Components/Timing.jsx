import React from "react";

const Timing = ({currentForecast}) => {

  console.log("currentforecast",currentForecast)
  
  if(!currentForecast)
  {
    return <p>loading...</p>
  }

  return (
    <>
      <div className="flex flex-row  space-x-16 text-white text-sm py-3 p-3 overflow-x-scroll max-w-[100vw]">
        {
          currentForecast.hour.map((el)=>(
            <p>{el.time.split(" ")[1]}</p>
          ))
        }
      </div>
      <div className="text-white">
      <hr />
      </div>
    </>
  );
};

export default Timing;
