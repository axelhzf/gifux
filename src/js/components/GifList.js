import React, {PropTypes} from "react";
import GifPreview from "./GifPreview";

export default class GifList extends React.Component {
  
  static propTypes = {
    items: PropTypes.array.isRequired
  };
  
  render() {
    const {items} = this.props;
    return (
      <div className="gif-list">
           {items.map((gif, index) => <GifPreview key={index} gif={gif}/>)}
      </div>
    );
    
  }
  
}
