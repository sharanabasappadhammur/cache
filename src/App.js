// import "./App.css";
// import React, { useState, useRef, useEffect } from "react";
// import ChartComponent from "./ChartComponent";

// function App() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const prevCountRef = useRef();

//   useEffect(() => {
//     prevCountRef.current = count;
//     setCount2(count);
//     console.log(prevCountRef);
//   }, [count]);

//   console.log("test");

//   return (
//     <div>
//       <div>
//         <ChartComponent />  
//         {/* <h1>Current Count: {count}</h1>
//         <h1>Current Count2: {count2}</h1>
//         <h2>Previous Count: {prevCountRef.current}</h2>
//         <button onClick={() => setCount(count + 1)}>Increment</button> */}
//       </div>
//     </div>
//   );
// }

// export default App;
// App.js
import React from 'react';
import useMetaTags from './UseMetaTags';

const App = () => {
  useMetaTags({
    title: 'Your Website Title',
    description: 'A brief description of your website',
    image: 'https://coffeeweb.s3.ap-south-1.amazonaws.com/devtestlogo.png',
    url: 'https://silly-sunburst-8de3f8.netlify.app/',
  });

  return (
    <div>
      <h1>Welcome to Your Website</h1>
      <p>Some content goes here...</p>
    </div>
  );
};

export default App;
