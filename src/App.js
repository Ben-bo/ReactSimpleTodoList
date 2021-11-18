import Todo from "./component/todo/Todo";
import Navbar from "./component/navbar/Navbar";
import Jumbotron from "./component/jumbotron/jumbotron";
import CreateForm from "./component/todoCreate/todoCreate";
const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row mb-5">
          <div className="col-6">
            <Todo />
          </div>
          <div className="col-6">
            <CreateForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
