import React from "react";

const Weather = ({ cityName }) => {
  return (
    <>
      <div className="items-center justify-center pl-7 my-9">
        <p className="text-white text-3xl font-medium">
          {cityName ? cityName : "Islamabad, Pakistan"}  
         
        </p>
        <p className="text-white mr-auto"> Updated a few minutes ago </p>
      </div>
    </>
  );
};

export default Weather;
