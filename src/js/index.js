import React from "react";
import ReactDOM from "react-dom";
import "../css/index.less";

function Hello() {
  return <h1>Hello World</h1>;
}

ReactDOM.render(<Hello/>, document.getElementById("container"));
