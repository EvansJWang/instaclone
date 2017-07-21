import React, { Component } from 'react';
import Like from './Like';
import CommentList from './CommentList';

class Photo extends Component {
  constructor() {
  super();
    this.onClick = this.onClick.bind(this);
  }

  showComments(comments){
    if (this.props.showDetails === true) {
      return(
      <CommentList
        comments={comments}
        updateNewCommentForm={this.props.updateNewCommentForm}
        newCommentForm={this.props.newCommentForm}
        photoId={this.props.photo.id}
        />
      )
    }
  }

onClick(e){
  e.preventDefault()
  this.props.toggleDetails(this.props.photo.id)
}


  render(){
    return(
      <div>
        <button onClick={this.onClick}><img src={this.props.photo.url}/></button>
        <Like like={this.props.like}/>
        {this.showComments(this.props.comments)}
      </div>
    )
  }
}

export default Photo;
