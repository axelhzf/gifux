import React from "react";
import SearchBox from "./SearchBox";
import GifList from "./GifList";

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
