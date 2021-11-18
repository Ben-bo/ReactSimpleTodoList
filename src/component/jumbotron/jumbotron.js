const jumbotron = () => {
  return (
    <div className="container-fluid">
      <div className="bg-light p-5 rounded-lg m-3 shadow-sm p-3 ">
        <h1 className="display-4">Hello, Welcome!</h1>
        <p className="lead">
          in this web you can create your todo list, list todo and dont forget
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a className="btn btn-success btn-lg" href="/#" role="button">
          Learn more
        </a>
      </div>
    </div>
  );
};
export default jumbotron;
