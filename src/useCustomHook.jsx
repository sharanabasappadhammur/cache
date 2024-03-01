import { useState } from "react";

function useCustomHook(initialValue) {
  const [state, setState] = useState(initialValue);

  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };
  const reset = () => {
    setState(0);
  };
  return { state, increment, decrement, reset };
}

export default useCustomHook;
