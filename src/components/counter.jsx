import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment,decrement} from "../actions/counteraction";

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
          <h1>Counter: {counter}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      );
    };
    
    export default Counter;
