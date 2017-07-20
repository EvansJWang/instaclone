import { SET_PHOTOS, TOGGLE_PHOTO_DETAILS } from '../actions/photos';
import { UPDATE_NEW_COMMENT_FORM } from '../actions/comments';
import { TOGGLE_LIKES } from '../actions/likes'

function processPhotos(input) {
  return(
    input.map((item)=>{
      item["showDetails"] = false
      item["likeStatus"] = false
      item["newCommentForm"] = ""
      return(
          item
      )
    })
  )
}


function togglePhotos(photos, photoId) {
  return photos.map((photo, index) => {
        if (photo.id === photoId) {
          let toggleValue = !photo.showDetails
          return Object.assign({}, photo, {
            "showDetails": toggleValue
          })
        }
        return photo
      })
  }

function toggleLikes(photos, photoId) {
  return photos.map((photo, index) => {
        if (photo.id === photoId) {
          let toggleValue = !photo.likeStatus
          return Object.assign({}, photo, {
            "showDetails": toggleValue
          })
        }
        return photo
      })
  }


function upDateNewCommentForm(photos, formInformation) {
  return photos.map((photo, index) => {
        if (photo.id === formInformation.photoId) {
          return Object.assign({}, photo, {
            "newCommentForm": formInformation.text
          })
        }
        return photo
      })
  }




export default function photos(state = [], action = {}) {
  switch(action.type) {
    case SET_PHOTOS:
     return processPhotos(action.photos);
    case TOGGLE_PHOTO_DETAILS:
      return togglePhotos(state, action.photoId)
    case TOGGLE_LIKES:
      return toggleLikes(state, action.photoId)
    case UPDATE_NEW_COMMENT_FORM:
      return upDateNewCommentForm(state, action.formInformation)
  default: return state;
  }
}
