import React, { Component } from 'react';


class Like extends Component {
  render(){
    return(
      <span>{this.props.like} likes</span>
  )}
}

export default Like;
