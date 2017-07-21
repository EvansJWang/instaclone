import React, { Component } from 'react';

class CommentItem extends Component {
  constructor() {
  super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    e.preventDefault()
    this.props.deleteComment(this.props.commentId)
  }

  deleteButton(){
    if (this.props.users.id === this.props.commenterId) {
      return(
    <a href="#" onClick={this.onClick}>Delete</a>
    )
  }
}


  render(){
  return(
    <span>{this.props.comment} {this.deleteButton()}</span>
      )
    }
  }

export default CommentItem;
