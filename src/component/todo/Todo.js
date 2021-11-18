import TodoList from "../todoList/TodoList";

const Todo = (props) => {
  const todoList = props.dataTodo;
  return (
    <div>
      <h3> Todo List</h3>
      <hr />
      <TodoList dataTodo={todoList} />
    </div>
  );
};

export default Todo;
