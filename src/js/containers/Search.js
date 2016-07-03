import React from "react";
import SearchBox from "../components/SearchBox";
import GifList from "../components/GifList";
import _ from "lodash";
import fixture from "../fixtures/gifs";

export default class Search extends React.Component {
  
  state = {
    query: "",
    gifs: fixture
  };
  
  onChangeQuery = query => {
    this.setState({query});
    this.fetchGifs();
  };
  
  fetchGifs = _.debounce(() => {
    this.setState({gifs: fixture});
    
    /*
    const {query} = this.state;
    console.log("fetching", query);
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`;
    fetch(url)
      .then(response => response.json())
      .then(body => {
        this.setState({gifs: body.data});
        console.log(JSON.stringify(body.data));
      });
    */
  }, 1000);
  
  render() {
    const {query, gifs} = this.state;
    
    return (
      <div className="search">
        <SearchBox value={query} onChange={this.onChangeQuery}/>
        <GifList items={gifs}/>
      </div>
    )
  }
  
}
