import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'

import {detailsWrapper, resultTitle, detailsItem, detailsLabel, detailsVal, detailsContent, detailsimgWrapper, detailsImgUrl} from  '../styles/style'

class Details extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section style={detailsWrapper}>
        <span style={resultTitle}>Details</span>
        <div style={detailsContent}>
          <div style={detailsimgWrapper}>
            <img style={detailsImgUrl} src={this.props.imgUrl ? this.props.imgUrl : this.props.firstItemData.thumbnails.high.url} />
          </div>
          <div style={detailsItem}>
            <span style={detailsLabel}>Title</span>
            <p style={detailsVal}>{this.props.channelTitle ? this.props.channelTitle : this.props.firstItemData.channelTitle ? this.props.firstItemData.channelTitle : 'N/A'}</p>
          </div>
          
          <div style={detailsItem}>
            <span style={detailsLabel}>Published At</span>
            <p style={detailsVal}>{this.props.publishedAt ? this.props.publishedAt && moment(this.props.publishedAt).format("DD-MM-YYYY") : this.props.firstItemData.publishedAt ? moment(this.props.firstItemData.publishedAt).format("DD-MM-YYYY") : 'N/A'}</p>
          </div>

          <div style={detailsItem}>
            <span style={detailsLabel}>Descripton</span>
            <p style={detailsVal}>{this.props.description ? this.props.description : this.props.firstItemData.description ? this.props.firstItemData.description : 'N/A'}</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Details;