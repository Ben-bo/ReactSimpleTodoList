import TodoList from "../todoList/TodoList";

const Todo = () => {
  const todoList = [
    { id: 1, title: "Eat" },
    { id: 2, title: "Sleep" },
    { id: 3, title: "Work" },
  ];
  return (
    <div>
      <h3> Todo List</h3>
      <hr />
      <TodoList dataTodo={todoList} />
    </div>
  );
};

export default Todo;
