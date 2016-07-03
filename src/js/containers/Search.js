import React from "react";
import SearchBox from "../components/SearchBox";
import GifList from "../components/GifList";
import _ from "lodash";
import {connect} from "react-redux";
import * as actions from "../state/actions";
import LoadingIndicator from "../components/LoadingIndicator";
import EmptyPlaceholder from "../components/EmptyPlaceholder";
import ErrorMessage from "../components/ErrorMessage";

class Search extends React.Component {
  
  onChangeQuery = query => {
    this.props.dispatch(actions.fetchSearch(query));
  };
  
  onToggleFav = gif => {
    this.props.dispatch(actions.toggleFav(gif.id));
  };
  
  render() {
    const {gifs, isFetching, query, error} = this.props;
    
    let content;
    if (query.trim().length === 0) {
      content = <EmptyPlaceholder msg="Search something like 'Adventure times' "/>
    } else if (isFetching) {
      content = <LoadingIndicator/>
    } else if (error) {
      content = <ErrorMessage msg={error}/>
    } else {
      content = <GifList items={gifs} onToggleFav={this.onToggleFav}/>
    }
    
    return (
      <div className="search">
        <SearchBox onChange={this.onChangeQuery}/>
        <div className="search-content">
             {content}
        </div>
      </div>
    )
  }
  
}

const mapStateToProps = state => {
  
  const gifs = _.map(state.search.data, id => {
    return {
      isFavorite: state.favorites.data[id],
      ...state.gifs[id]
    };
  });
  
  return {
    query: state.search.query,
    isFetching: state.search.isFetching,
    gifs,
    error: state.search.error
  }
  
};

export default connect(mapStateToProps)(Search)
