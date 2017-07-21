import React, { Component } from 'react';


class Like extends Component {
  render(){
    return(
      <span className="glyphicon glyphicon-heart-empty">{this.props.like} likes</span>
  )}
}

export default Like;
