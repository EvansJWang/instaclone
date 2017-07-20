import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos, toggleDetails } from '../actions/photos';
import { updateNewCommentForm, submitNewCommentForm, deleteComment } from '../actions/comments';
import { toggleLikes } from '../actions/likes';
import Feed from '../Feed';

class AppContainer extends Component {
  componentDidMount(){
    this.props.fetchPhotos();
  }


  render(){
    return(
        <Feed
          photos={this.props.photos}
          updateNewCommentForm={{updateNewCommentForm: this.props.updateNewCommentForm, submitNewCommentForm: this.props.submitNewCommentForm, deleteComment: this.props.deleteComment}}
          toggleLikes={this.props.toggleLikes}
          toggleDetails={this.props.toggleDetails}
          />
    )
  }
}


function mapStateToProps(state){
  return {
    photos: state.photos,
  }
}

export default connect(mapStateToProps, { fetchPhotos, toggleDetails, updateNewCommentForm, toggleLikes, submitNewCommentForm, deleteComment })(AppContainer);
