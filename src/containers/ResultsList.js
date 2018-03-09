import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCounter } from '../actions';
import { StyleSheet, css } from 'aphrodite';
import Details from '../containers/Details';
import {styleApphr} from '../styles/styleApphr'

import {resultsContainer, resultSection, resultTitle, resultList, resultItem, listItemLink} from '../styles/style'

class ResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channelTitle: '',
      description: '',
      publishedAt: '',
      imgUrl: ''
    }

    this.showDetails = this.showDetails.bind(this);
  }

  showDetails(snippet) {
    const { channelTitle, description, publishedAt } = snippet
    this.setState({
      channelTitle,
      description,
      publishedAt,
      imgUrl: snippet.thumbnails.high.url
    })
  }
  
  render() {
     return (
          <section style={resultsContainer}>
            <div style={resultSection}>
              <span style={resultTitle}>Results</span>
                <ul style={resultList}>
                {
                  this.props.data.searchList !== undefined &&  this.props.data.searchList.length != 0 ? this.props.data.searchList.items.map((item, index) =>
                    (
                        <li key={index} style={resultItem}>
                          <a className={css(styleApphr.linkStyle)} onClick={() => this.showDetails(item.snippet)}>{item.snippet.title}</a>
                        </li>)
                    ) : ''
                }
              </ul>
            </div>
            <Details channelTitle = {this.state.channelTitle}
                description={this.state.description}
                publishedAt={this.state.publishedAt}
                imgUrl={this.state.imgUrl}
                firstItemData={this.props.data.searchList.items[0].snippet} />
          </section>
     )
   }
}


export default ResultsList;