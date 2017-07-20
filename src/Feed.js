import React, { Component } from 'react';

import Photo from './Photo';

class Feed extends Component {


showPhotos(){
  return(
     this.props.photos.map( (photo, i) => {
          return (
           <li key={i}>
             <Photo
               photo={photo.photoInfo}
               showDetails={photo.showDetails}
               like={photo.photoLikes}
               comments= {photo.photoComments}
               toggleDetails={this.props.toggleDetails}
               updateNewCommentForm={this.props.updateNewCommentForm}
               newCommentForm={photo.newCommentForm}
               />
           </li>
         )
       }
     )
 )
}

  render() {
  return (
      <ul>
        {this.props.photos.length > 0 ? (this.showPhotos()) : (<div> There are no photos  </div>)}
      </ul>
  )
 }
}

export default Feed
