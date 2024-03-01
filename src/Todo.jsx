import React, { useContext } from "react";
import "./styles.scss";
import { useState } from "react";
import { increment } from "./Slice";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./Store";
import { UserContext } from "./App";

function Todo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const count = useSelector((state) => state);
  console.log(count);

  const handleClick = () => {
    dispatch(increment());
  };

  const gg = useContext(UserContext);

  console.log(gg);

  return (
    <button onClick={() => handleClick()}>
      {/* <input onChange={(e) => handleChange(e.target.value)} /> */}
    </button>
  );
}

export default Todo;
