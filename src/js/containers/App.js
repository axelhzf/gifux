import React from "react";
import Toolbar from "../components/Toolbar";
import Header from "../components/Header";
import Search from "./Search";
import Favorite from "./Favorite";
import _ from "lodash";
import {connect} from "react-redux";
import Notification from "../components/Notification";

class App extends React.Component {
  
  state = {
    activeToolbarItem: "search"
  };
  
  onChangePage = page => {
    this.setState({activeToolbarItem: page});
  };
  
  render() {
    const {activeToolbarItem} = this.state;
    const {totalFavorites, notification} = this.props;
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
        <Notification msg={notification.msg} visible={notification.visible}/>
      </div>
    )
  }
  
}

const mapStateToProps = state => {
  console.log("notification", state.notification);
  return {
    notification: state.notification,
    totalFavorites: _.keys(state.favorites.data).length,
  }
};

export default connect(mapStateToProps)(App)
