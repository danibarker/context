import React, { useContext } from "react";
import { MyContext } from "../providers/MyContextProvider";

const AnotherConsumer = () => {
  // I use the useContext hook to access the context values that the provider has provided
  // to me as a child of the Provider component.
  const myContext = useContext(MyContext);

  // here since I only need the state value and not the functions to update it
  // I can just pull that out of the context object
  const { myGlobalState } = myContext;

  return <div>The Value of My Global State is: {myGlobalState}</div>;
};

export default AnotherConsumer;
