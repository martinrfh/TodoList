import Navbar from "./Navbar";
import HomePage from "./HomePage";
import TodoProvider from "./todos/todoProvider";

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
