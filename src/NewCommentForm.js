import React, { Component } from 'react';

class NewCommentForm extends Component {
  constructor() {
  super();
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.updateNewCommentForm.updateNewCommentForm(
      {
       text: e.target.value,
       photoId: this.props.photoId
     }
    )
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateNewCommentForm.submitNewCommentForm(
      {
        content: this.props.newCommentForm,
        photoId: this.props.photoId,
        userId: this.props.updateNewCommentForm.users.id
      }
    )
  }

  render(){
    return(

      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          New Comment:
          <input name="NewComment" className="form-control" type="text" value={this.props.newCommentForm} onChange={this.handleChange}/>
          <input type="submit" className="btn btn-primary" value="Comment"/>
      </div>
      </form>
        )
      }
}

export default NewCommentForm;
