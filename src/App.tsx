import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import TodoProvider from "./todos/todoProvider";
import "./App.css";
function App() {
  return (
    <>
      <TodoProvider>
        <Navbar />
        <HomePage />
      </TodoProvider>
    </>
  );
}

export default App;
