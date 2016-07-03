import React from "react";

export default class SearchBox extends React.Component {
  
  render() {
    return (
      <div className="search-box">
        <div className="search-icon">
          <i className="fa fa-search"/>
        </div>
        <input type="text" placeholder="Search..."/>
      </div>
    )
  }
  
}
