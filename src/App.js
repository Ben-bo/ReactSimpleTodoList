import "./App.css";
import Todo from "./component/todo/Todo";
import Navbar from "./component/navbar/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <Todo />
      </div>
    </>
  );
};

export default App;
