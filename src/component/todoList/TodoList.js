const TodoList = (props) => {
  const data = props.dataTodo;
  return (
    <ul className="list-group">
      {data.map((result) => {
        return (
          <li className="list-group-item" key={result.id}>
            {result.title}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
