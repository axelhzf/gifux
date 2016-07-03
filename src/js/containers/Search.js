import React from "react";
import SearchBox from "../components/SearchBox";
import GifList from "../components/GifList";
import _ from "lodash";
import {connect} from "react-redux";
import * as actions from "../state/actions";
import LoadingIndicator from "../components/LoadingIndicator";
import EmptyPlaceholder from "../components/EmptyPlaceholder";

class Search extends React.Component {
  
  onChangeQuery = query => {
    this.props.dispatch(actions.fetchSearch(query));
  };
  
  render() {
    const {gifs, isFetching, query, error} = this.props;
    
    let content;
    if (query.trim().length === 0) {
      content = <EmptyPlaceholder msg="Search something..."/>
    } else if (isFetching) {
      content = <LoadingIndicator/>
    } else if (error) {
      content = <ErrorMessage error={error}/>
    } else {
      content = <GifList items={gifs}/>
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
  return {
    query: state.search.query,
    isFetching: state.search.isFetching,
    gifs: _.map(state.search.data, gifId => state.gifs[gifId]),
    error: state.search.error
  }
};

export default connect(mapStateToProps)(Search)
