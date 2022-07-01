import React, { createContext, useState } from "react";

// This is the context object that will be used by the consumers.
// It will receive values from the context provider
export const MyContext = createContext(null);

/* 
The context object contains a provider Component that will wrap 
children components (the context consumers)
*/
const ContextProvider = MyContext.Provider;

const MyContextProvider = ({ children }) => {
  // this is a state variable that I want the consumers to be able to access and update
  // we'll just make it a simple count variable to show how it works
  const [myGlobalState, setMyGlobalState] = useState(0);

  const incrementMyGlobalState = () => {
    setMyGlobalState(myGlobalState + 1);
  };

  const decrementMyGlobalState = () => {
    setMyGlobalState(myGlobalState - 1);
  };

  // I pass the state variable and the functions to update it
  // to an object to pass into the provider
  const myContextValues = {
    myGlobalState,
    incrementMyGlobalState,
    decrementMyGlobalState,
  };
  // I pass the object containing the values to the provider by setting the value prop
  return <ContextProvider value={myContextValues}>{children}</ContextProvider>;
};

export default MyContextProvider;
