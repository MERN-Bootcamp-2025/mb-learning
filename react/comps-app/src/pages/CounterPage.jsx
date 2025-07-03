import React from "react";
// import { useEffect } from 'react';
// import { useState } from 'react';
import Button from "../components/Button";
// import useCounter from '../hooks/use-counter';
// import { useState } from 'react';
import { useReducer } from "react";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const SET_VALUE_TO_ADD = "value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case ADD_VALUE_TO_COUNT:
        return{
            ...state,
            count: state.count + state.valueToAdd,
            valueToAdd: 0
        }  

    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    default:
      throw new Error("unexpected actionType: " + action.type);
  }

  //   if (action.type === INCREMENT) {
  //   }
  //   if (action.type === DECREMENT) {
  //   }
  //   if (action.type === SET_VALUE_TO_ADD) {
  //     return {
  //       ...state,
  //       valueToAdd: action.payload,
  //     };
  //   }
//   return state;
};

const CounterPage = ({ initialCount }) => {
  //2. figure out the non-jsx code realted to that state
  //3. cut them and paste them in the funtion defined above

  //5. call the above "custom hook" and destructure all the variables you need
  //6. aslso pass the variables that your custom hook needs in the argument
  // const {count, increment} = useCounter(initialCount);

  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState();

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
        type: ADD_VALUE_TO_COUNT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // console.log(typeof value)

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
};
// console.log(state);

  return (
    <div className="flex flex-col m-7 gap-5">
      <h1>Count is : {state.count}</h1>
      <div className="flex flex-row gap-4">
        <Button onClick={increment} primary>
          Increment
        </Button>
        <Button onClick={decrement} primary>
          Decrement
        </Button>
      </div>
      <form>
        <label>Enter Value to add</label>
        <input
          type="number"
          className="p-2 m-5 border border-black rounded"
          onChange={handleChange}
          value={state.valueToAdd || ""}
        />
        <Button onClick={handleSubmit} primary>
          Add
        </Button>
      </form>
    </div>
  );
};

export default CounterPage;
