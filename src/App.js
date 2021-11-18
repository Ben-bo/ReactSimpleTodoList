import Todo from "./component/todo/Todo";
import Navbar from "./component/navbar/Navbar";
import Jumbotron from "./component/jumbotron/jumbotron";
import CreateForm from "./component/todoCreate/todoCreate";
import { useState } from "react";
const App = () => {
  let [getTodo, setTodo] = useState([
    { id: 1, title: "Eat" },
    { id: 2, title: "Sleep" },
    { id: 3, title: "Work" },
  ]);
  const eventCreate = (data) => {
    setTodo(getTodo.concat(data));
  };
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row mb-5">
          <div className="col-6">
            <Todo dataTodo={getTodo} />
          </div>
          <div className="col-6">
            <CreateForm createFunct={eventCreate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
