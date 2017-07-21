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
    <button onClick={this.onClick}>Delete</button>
    )
  }
}


  render(){
  return(
    <div>
      <span className="list-group-item list-group-item-success">{this.props.comment} </span>
      <span>{this.deleteButton()}</span>
    </div>
      )
    }
  }

export default CommentItem;
