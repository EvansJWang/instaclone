import { SET_PHOTOS, SET_USER_PHOTOS, TOGGLE_PHOTO_DETAILS } from '../actions/photos';
import { UPDATE_NEW_COMMENT_FORM, SUBMIT_NEW_COMMENT_FORM, DELETE_COMMENT } from '../actions/comments';
import { TOGGLE_LIKES } from '../actions/likes'

const initialState = [
  {photoInfo: {
    id: "",
    url: "",
    uploader_id: ""
  },
   photoComments:[
     {
     id: "",
     commenter_id: "",
     photo_id: "",
     content: ""
   }
 ],
   photoLikes: 0
 }
]



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
        if (photo.photoInfo.id === photoId) {
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
        if (photo.photoInfo.id === photoId) {
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
        if (photo.photoInfo.id === formInformation.photoId) {
          return Object.assign({}, photo, {
            "newCommentForm": formInformation.text
          })
        }
        return photo
      })
  }


function submitNewCommentForm(photos, formInformation) {
  return photos.map((photo, index) => {
        if (photo.photoInfo.id === formInformation.photoId) {
          return Object.assign({}, photo, {
            "newCommentForm": ""
          })
        }
        return photo
      })
  }

  function addNewCommentForm(photos, formInformation) {
    return photos.map((photo, index) => {
          if (photo.photoInfo.id === formInformation.photoId) {
            photo.photoComments.push(
              { content: formInformation.content }
            )
          }
          return photo
        })
    }

  function deleteComment(photos, photoId, commentid){
    return photos.map( photo => {
        if (photo.photoInfo.id === photoId) {
         let newComments = photo.photoComments.filter(comment => comment.id !== commentid)
         photo.photoComments = newComments;
        }
       return photo
     })
   }



export default function photos(state = initialState, action = {}) {
  switch(action.type) {
    case SET_PHOTOS:
     return processPhotos(action.photos);
    case SET_USER_PHOTOS:
     return processPhotos(action.photos);
    case TOGGLE_PHOTO_DETAILS:
      return togglePhotos(state, action.photoId)
    case TOGGLE_LIKES:
      return toggleLikes(state, action.photoId)
    case UPDATE_NEW_COMMENT_FORM:
      return upDateNewCommentForm(state, action.formInformation)
    case SUBMIT_NEW_COMMENT_FORM:
      return addNewCommentForm(submitNewCommentForm(state, action.formInformation), action.formInformation)
    case DELETE_COMMENT:
      return deleteComment(state, "1", action.commentId)
    default:
      return state;
  }
}
