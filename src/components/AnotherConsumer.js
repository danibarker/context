import React, { useContext } from "react";
import { MyContext } from "../providers/MyContextProvider";

const AnotherConsumer = () => {
  // I use the useContext hook to access the context values that the provider has provided
  // to me as a child of the Provider component.
  const myContext = useContext(MyContext);

  const { myGlobalState } = myContext;

  return <div>The Value of My Global State is: {myGlobalState}</div>;
};

export default AnotherConsumer;
