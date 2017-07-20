import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos, toggleDetails } from '../actions/photos';
import { updateNewCommentForm } from '../actions/comments';
import { toggleLikes } from '../actions/likes'


class AppContainer extends Component {
  componentDidMount(){
    this.props.fetchPhotos();
  }

  render(){
    return(
      <div> Hello World </div>
    )
  }
}


function mapStateToProps(state){
  return {
    photos: state.photos,
  }
}

export default connect(mapStateToProps, { fetchPhotos, toggleDetails, updateNewCommentForm, toggleLikes })(AppContainer);
