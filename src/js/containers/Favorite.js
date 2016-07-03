import React from "react";
import GifList from "../components/GifList";
import fixture from "../fixtures/gifs";

export default class Favorite extends React.Component {
  
  render() {
    return (
      <div className="favorite">
        <GifList items={fixture}/>
      </div>
    )
  }
  
}
