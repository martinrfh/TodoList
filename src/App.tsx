import Navbar from "./Navbar";
import HomePage from "./HomePage";
import TodoProvider from "./todoProvider";

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
