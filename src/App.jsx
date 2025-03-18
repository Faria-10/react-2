import React, { useState, lazy, Suspense } from "react";
import Search from "./components/Search";
import Weather from "./components/weather";

// Lazy loading components to resolve build issue-> unable to load heavy files
const Test = lazy(() => import("./components/Test"));
const Map = lazy(() => import("./Components/Map"));

const App = () => {
  const [city, setCity] = useState("London, United States"); 

  return (
    <div className="mx-auto  max-w-screen-md mt-4 pt-5  h-fit bg-gradient-to-br from bg-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
      <Search onSearch={setCity} />
      <Weather cityName={city} />
      <Suspense fallback={<div>Loading Test...</div>}>
        <Test cityName={city} />  
      </Suspense>
      <Suspense fallback={<div>Loading Map...</div>}>
        <Map />
      </Suspense>
    </div>
  );
};

export default App;
