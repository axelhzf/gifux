import React from "react";

export default class GifPreview extends React.Component {
  
  render() {
    const {gif} = this.props;
    return (
      <div className="gif-preview">
        <img src={gif.url} />
        <i className="fa fa-heart fav"/>
      </div>
    );
  }
  
}
