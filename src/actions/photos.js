import axios from 'axios'

export const SET_PHOTOS = 'SET_PHOTOS'
export const TOGGLE_PHOTO_DETAILS = 'TOGGLE_PHOTO_DETAILS'
export const SET_USER_PHOTOS = 'SET_USER_PHOTOS'



export function dispatchPhotos(photos){
  return {
    type: SET_PHOTOS,
    photos
  }
}



export function fetchPhotos(){
 return dispatch => {
   axios.get(("http://tranquil-sands-93773.herokuapp.com/photos")).then(res => {
      dispatch( dispatchPhotos(res.data))
  })
 }
}

export function dispatchFetchUserPhotos(photos){
  return {
    type: SET_USER_PHOTOS,
    photos
  }
}



export function fetchUserPhotos(id){

 return dispatch => {
   axios.get((`http://tranquil-sands-93773.herokuapp.com/users/${id}/photos`)).then(res => {
    dispatch( dispatchFetchUserPhotos(res.data))
  })
 }
}




export function toggleDetails(photoId){
  return dispatch => {
    dispatch( dispatchToggleDetails(photoId))
  }
}

export function dispatchToggleDetails(photoId){
  return {
    type: TOGGLE_PHOTO_DETAILS,
    photoId
  }
}
