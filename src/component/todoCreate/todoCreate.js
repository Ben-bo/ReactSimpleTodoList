import "./todoCreate.css";
import { useState } from "react";
const Create = (props) => {
  const [getInput, setInput] = useState("");
  const formHandler = (event) => {
    setInput(event.target.value);
    console.log(getInput);
  };
  let handler = (event) => {
    event.preventDefault();
    const newData = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInput,
    };

    props.createFunct(newData);
  };
  return (
    <form onSubmit={handler}>
      <h3> Form Input</h3>
      <hr />
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          New Todo
        </label>
        <input
          onChange={formHandler}
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="input todo here ..."
        />
      </div>
      <div class="mb-3">
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </div>
    </form>
  );
};

export default Create;
