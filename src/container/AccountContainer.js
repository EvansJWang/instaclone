import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserPhotos, toggleDetails } from '../actions/photos';
import { updateNewCommentForm, submitNewCommentForm, deleteComment } from '../actions/comments';
import { toggleLikes } from '../actions/likes';
import Feed from '../Feed';

class AccountContainer extends Component {
  componentDidMount(){
    this.props.fetchUserPhotos(this.props.users.id);
  }


  render(){
    return(
        <Feed
          photos={this.props.photos}
          updateNewCommentForm={{
            updateNewCommentForm: this.props.updateNewCommentForm,
            submitNewCommentForm: this.props.submitNewCommentForm,
            deleteComment: this.props.deleteComment,
            users: this.props.users
          }}
          toggleLikes={this.props.toggleLikes}
          toggleDetails={this.props.toggleDetails}
          />
    )
  }
}


function mapStateToProps(state){
  return {
    photos: state.photos,
    users: state.users
  }
}

export default connect(mapStateToProps, { fetchUserPhotos, toggleDetails, updateNewCommentForm, toggleLikes, submitNewCommentForm, deleteComment })(AccountContainer);
