import React, { useState } from "react";
import Search from "./Components/Search";
import Test from "./Components/Test";
import Weather from "./Components/Weather";

const App = () => {
  const [city, setCity] = useState("London, United States"); 

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 bg-gradient-to-br from bg-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <Search onSearch={setCity} />
        <Weather cityName={city} />
        {/* ✅ City ko props me pass kar rahe hain */}
        <Test cityName={city} />  
      </div>
    </>
  );
};

export default App;
