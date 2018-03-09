import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchList, resetData } from '../actions';
import ResultsList from '../containers/ResultsList';
import { searchWrapper, resultsWrapper, searchContainer, searchInput, noResults } from '../styles/style'

const SPINNER = 'https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif'

class Search extends Component {
  constructor(props) {
        super(props);
        this.state = {
          search: ''
        }

        this.onSearchFieldChange = this.onSearchFieldChange.bind(this)
   }

   onSearchFieldChange(e){
      e.persist();
      this.setState({
        search: e.target.value
      })
      if (e.target.value.trim().length > 3) {
          this.props.dispatch(fetchSearchList(e.target.value))
      } else if(e.target.value.length <= 3) {
        this.props.dispatch(resetData())
      }
   }

   processResults() {
      const { fetching } = this.props.data.fetching !== undefined ? true : false;    
      let content;

      if (this.props.data.fetching) {
        content = <span>
          <img src={SPINNER} />
        </span>
      } else if (this.props.data.searchList && this.props.data.searchList.items && this.props.data.searchList.items.length === 0 && this.state.search.trim().length > 3) {
          content = <span style={noResults}>NO RESULTS FOUND</span>
      } else if (this.props.data.searchList && this.props.data.searchList.items && this.props.data.searchList.items.length > 0) {
        content = (
          <ResultsList data={ this.props.data } />
        )
     }
     return content;
  }

   render() {
     return (
          <div style={searchWrapper}>
            <form style={searchContainer}>
              <input type="text" style={searchInput} value={this.state.search} name="Search" placeholder="Search..." onChange={this.onSearchFieldChange} />
            </form>
            <div style={resultsWrapper}>
              { this.processResults() }
            </div>
          </div>
     )
   }
}

const mapStateToProps = (state) => {
  return {
       data: state.searchReducer
  };
}

export default connect(mapStateToProps)(Search);