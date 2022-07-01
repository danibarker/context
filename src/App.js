import MyContextProvider from "./providers/MyContextProvider";
import MyContextConsumer from "./components/MyContextConsumer";
import AnotherConsumer from "./components/AnotherConsumer";

function App() {
  return (
    <MyContextProvider>
      <MyContextConsumer />
      <AnotherConsumer />
    </MyContextProvider>
  );
}

export default App;
