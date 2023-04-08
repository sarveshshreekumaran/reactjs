function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Age : {props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Sarvesh" age="22" />
    <Person name="name" age="age" />
  </div>
);

ReactDOM.render(app, document.querySelector("#root"));
