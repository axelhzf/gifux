import React from "react";
import GifPreview from "./GifPreview";

export default class GifList extends React.Component {
  
  render() {
    
    const gifs = [
      {url: "http://i.giphy.com/c4Nc0v0g15g9G.gif"},
      {url: "http://i.giphy.com/YFkpsHWCsNUUo.gif"},
      {url: "http://i.giphy.com/ap4yAHZJLAcVi.gif"}
    ];
    
    return (
      <div className="gif-list">
           {gifs.map((gif, index) => <GifPreview key={index} gif={gif}/>)}
      </div>
    );
    
  }
  
}
