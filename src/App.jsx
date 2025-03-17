import React, { useState } from "react";

import Search from "./components/search";
import Test from "./Components/Test";
import Weather from "./components/weather";
import Map from "./Components/Map";

const App = () => {
  const [city, setCity] = useState("London, United States"); 

  return (
    
    <>
      <div className="mx-auto  max-w-screen-md mt-4 pt-5  h-fit bg-gradient-to-br from bg-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
        <Search onSearch={setCity} />
        <Weather cityName={city} />
        <Test cityName={city} />  
        <Map/>
      </div>
    </>
  );
};

export default App;
