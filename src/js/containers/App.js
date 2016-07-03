import React from "react";
import Toolbar from "../components/Toolbar";
import Header from "../components/Header";
import Search from "./Search";
import Favorite from "./Favorite";
import _ from "lodash";
import {connect} from "react-redux";

class App extends React.Component {
  
  state = {
    activeToolbarItem: "search"
  };
  
  onChangePage = page => {
    this.setState({activeToolbarItem: page});
  };
  
  render() {
    const {activeToolbarItem} = this.state;
    const {totalFavorites} = this.props;
    const toolbarItems = [
      {id: "search", iconClass: "fa fa-search", component: <Search/>},
      {id: "favorite", iconClass: "fa fa-heart", badge: `${totalFavorites}`, component: <Favorite/>},
    ];
    const toolbarItemsById = _.keyBy(toolbarItems, "id");
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

const mapStateToProps = state => {
  return {
    totalFavorites: state.favorites.data.length,
  }
};

export default connect(mapStateToProps)(App)
