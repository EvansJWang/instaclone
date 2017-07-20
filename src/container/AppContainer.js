import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/photos';
import { fetchComments } from '../actions/comments';


class AppContainer extends Component {
  componentDidMount(){
    this.props.fetchPhotos();
    this.props.fetchComments();
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
    comments: state.comments
  }
}

export default connect(mapStateToProps, { fetchPhotos, fetchComments })(AppContainer);
