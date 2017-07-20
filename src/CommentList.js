import React, { Component } from 'react';
import CommentItem from './CommentItem';
import NewCommentForm from './NewCommentForm';

class CommentList extends Component {
  showComments(){
    return(
       this.props.comments.map( (comment, i) => {
            return (
             <li key={i}>
               <CommentItem
                 comment={comment.content}
                 commentId={comment.id}
                 deleteComment={this.props.updateNewCommentForm.deleteComment}
                 />
             </li>
           )
         }
       )
   )
  }


render(){
  return(
    <div>
      <ul>
        {this.props.comments.length > 0 ? (this.showComments()) : (<div> There are no comments  </div>)}
      </ul>
      <NewCommentForm
        newCommentForm={this.props.newCommentForm}
        updateNewCommentForm={this.props.updateNewCommentForm}
        photoId={this.props.photoId}
        />
    </div>
    )
  }
}

export default CommentList;
