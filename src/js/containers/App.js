import React from "react";
import Toolbar from "../components/Toolbar";
import Header from "../components/Header";
import Search from "./Search";
import Favorite from "./Favorite";
import _ from "lodash";

const toolbarItems = [
  {id: "search", iconClass: "fa fa-search", component: <Search/>},
  {id: "favorite", iconClass: "fa fa-heart", component: <Favorite/>},
];
const toolbarItemsById = _.keyBy(toolbarItems, "id");

export default class App extends React.Component {
  
  state = {
    activeToolbarItem: "search"
  };
  
  onChangePage = page => {
    this.setState({activeToolbarItem: page});
  };
  
  render() {
    const {activeToolbarItem} = this.state;
    const ActiveComponent = toolbarItemsById[activeToolbarItem].component;
    return (
      <div className="app">
        <Header/>
        <div className="content">
          {ActiveComponent}
        </div>
        <Toolbar items={toolbarItems} active={activeToolbarItem} onChange={this.onChangePage} />
      </div>
    )
  }
  
}
