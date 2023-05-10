import { useReducer, useState } from "react";

export default function Count() {
  const [msg, setMsg] = useState("");
  let initialState = 0;
  const reducer = (state, action) => {
    if (action === "Increment") {
      if (state == 5) {
        setMsg("You Cant More than 5 items");
        return state;
      } else {
        setMsg("");
        return state + 1;
      }
    } else {
      if (state == 1) {
        setMsg("error");
        return state;
      } else {
        setMsg("");
        return state - 1;
      }
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{count}</h1>
      <p>{msg}</p>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </>
  );
}
