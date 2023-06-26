import React from "react";
import { connect } from "react-redux";

const TextRedux = ({ counter, dispatch }) => {
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};

export default connect((state) => ({ counter: state.count }))(TextRedux);
