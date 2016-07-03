import React from "react";
import SearchBox from "../components/SearchBox";
import GifList from "../components/GifList";

export default class Search extends React.Component {
  
  render() {
    return (
      <div className="search">
        <SearchBox />
        < GifList/>
      </div>
    )
  }
  
}
