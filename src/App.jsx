import React from "react";
import HorizontalScroll from "./HorizontalScroll";

const App = () => {
  return (
    <>
      {/* Intro Section */}
      <div className="h-screen w-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white text-6xl font-extrabold">
        <h1>Scroll Down ⬇</h1>
      </div>

      {/* Horizontal Scroll Section */}
      <HorizontalScroll />

      {/* Outro Section */}
      <div className="h-screen w-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center text-white text-6xl font-extrabold">
        <h1>End of Scroll </h1>
      </div>
    </>
  );
};

export default App;
