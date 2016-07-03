import React from "react";

export default class Toolbar extends React.Component {
  
  render() {
    return (
      <div className="toolbar">
        <ul>
          <li><a href="#"><i className="fa fa-search"></i></a></li>
          <li><a href="#"><i className="fa fa-heart"></i></a></li>
        </ul>
      </div>
    )
  }
  
}
