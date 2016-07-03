import React, {PropTypes} from "react";
import classNames from "classnames";

export default class GifPreview extends React.Component {
  
  static propTypes = {
    onToggleFav: PropTypes.func
  };
  
  onClick = e => {
    if (this.props.onToggleFav) {
      this.props.onToggleFav(this.props.gif);
    }
  };
  
  render() {
    const {gif} = this.props;
    
    return (
      <div className="gif-preview" onClick={this.onClick}>
        <img src={gif.url}/>
        <i className={classNames("fa", "fav", {"fa-heart": gif.isFavorite, "fa-heart-o": !gif.isFavorite})}/>
      </div>
    );
  }
  
}
