import React from "react";
import Toolbar from "./Toolbar";
import Header from "./Header";
import Search from "./Search";

export default class App extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="content">
          <Search/>
        </div>
        <Toolbar/>
      </div>
    )
  }
  
}
