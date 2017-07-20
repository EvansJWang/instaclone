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

  render(){
  return(
    <span>{this.props.comment} <a href="#" onClick={this.onClick}>Delete</a> </span>
      )
    }
  }

export default CommentItem;
