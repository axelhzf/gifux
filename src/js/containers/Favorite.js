import React from "react";
import GifList from "../components/GifList";

export default class Favorite extends React.Component {
  
  render() {
  
    const gifs = [
      {url: "http://i.giphy.com/ap4yAHZJLAcVi.gif"},
      {url: "http://i.giphy.com/YFkpsHWCsNUUo.gif"},
      {url: "http://i.giphy.com/c4Nc0v0g15g9G.gif"}
    ];
    
    return (
      <div className="favorite">
        <GifList items={gifs}/>
      </div>
    )
  }
  
}
