import { useReducer } from "react";
import TodoReducer from "./Reducer/todoReducer";
import todoContext from "./context/todoContext";
import Navbar from "./Navbar";
import HomePage from "./HomePage";

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <>
      <todoContext.Provider value={{ todos, dispatch }}>
        <Navbar />
        <HomePage />
      </todoContext.Provider>
    </>
  );
}

export default App;
