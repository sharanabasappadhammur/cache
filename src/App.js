// import Todo from "./Todo";
// import React, { createContext, useState } from "react";

import "./App.css";

// import { useState } from "react";

// export const UserContext = createContext();

// qwqwqw
function App() {
  // const arr = [1, 3, 4, 2, 3, 3, 3, 3, 3, 3, 1, 1, 5];
  // function bubbleSort() {
  //   const count = [];
  //   const seen = {};
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!count.includes(arr[i])) {
  //       count.push(arr[i]);
  //     } else {
  //       seen[arr[i]] = (seen[arr[i]] || 0) + 1;
  //     }
  //   }

  //   // console.log(seen);
  //   return seen;
  // }
  // console.log(bubbleSort());

  // let myMap = new Map();

  // myMap.set("key1", "value1");
  // myMap.set("key2", "value2");

  // console.log(myMap.get("key1")); // Output: 'value1'
  // console.log(myMap.has("key2")); // Output: true

  // const [state, setState] = useState(null);

  // const click1 = () => {
  //   myMap.set("key1", "value1");
  //   console.log("set");
  // };

  // const click2 = () => {
  //   // console.log(myMap.get("key1")); // Output: 'value1'
  //   setState(1);
  // };

  // console.log("rerender");

  // const click3 = () => {
  //   console.log(myMap.get("key1")); // Output: 'value1'
  // };

  console.log(navigator);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
      });
    });
  }

  return (
    <div className="App">
      14{/* <input onChange={(e) => handlechh(e)} /> */}
      {/* <button onClick={click1}>click1</button>
      <button onClick={click2}>click2</button>
      <button onClick={click3}>click2</button> */}
      {/* <Todo /> */}
      {/* <Todo />
      <div
        style={{ height: "900px", width: "300px", backgroundColor: "red" }}
      ></div> */}
      {/* <div onClick={() => handleClick()}>click here</div> */}
      {/* <input onChange={(e) => handleChange(e.target.value)} /> */}
      {/* <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/todo" component={Todo} />
              <Route path="/addtodo" component={AddTodo} />
            </Switch>
          </Suspense>
        </Router> */}
    </div>
  );
}

export default App;
