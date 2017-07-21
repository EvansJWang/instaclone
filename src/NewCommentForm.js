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
        text: this.props.newCommentForm,
        photoId: this.props.photoId
      }
    )
  }

  render(){
    return(

      <form onSubmit={this.handleSubmit}>
        New Comment:
        <input name="NewComment" type="text" value={this.props.newCommentForm} onChange={this.handleChange}/>
        <input type="submit"
        value="Comment"/>
      </form>
        )
      }
}

export default NewCommentForm;
