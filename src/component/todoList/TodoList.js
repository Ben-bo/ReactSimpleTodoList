import "./TodoList.css";
const TodoList = (props) => {
  const data = props.dataTodo;
  return (
    <ul className="tdl">
      {data.map((result) => {
        return <li key={result.id}>{result.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
