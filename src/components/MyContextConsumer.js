import React, { useContext } from "react";
import { MyContext } from "../providers/MyContextProvider";

const MyContextConsumer = () => {
  // I use the useContext hook to access the context values that the provider has provided
  // to me as a child of the Provider component.
  const myContext = useContext(MyContext);

  const { incrementMyGlobalState, decrementMyGlobalState } = myContext;

  return (
    <div>
      <button onClick={() => incrementMyGlobalState()}>
        Click to Increment My Global State
      </button>
      <button onClick={() => decrementMyGlobalState()}>
        Click to Decrement My Global State
      </button>
    </div>
  );
};

export default MyContextConsumer;
