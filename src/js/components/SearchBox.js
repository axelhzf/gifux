import React, {PropTypes} from "react";

export default class SearchBox extends React.Component {
  
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };
  
  onChange = (e) => {
    this.props.onChange(e.target.value);
  };
  
  render() {
    return (
      <div className="search-box">
        <div className="search-icon">
          <i className="fa fa-search"/>
        </div>
        <input type="text" placeholder="Search..." value={this.props.value} onChange={this.onChange}/>
      </div>
    )
  }
  
}
