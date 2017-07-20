export const SET_PHOTOS = 'SET_PHOTOS'


export function dispatchPhotos(photos){
  return {
    type: SET_PHOTOS,
    photos
  }
}



export function fetchPhotos(){
 return dispatch => {
 const photos = [
   {
     id: "1",
     url: "sdfasdfsda",
     uploader_id: "3333"
   }, {
     id: "2",
     url: "zzzzzz",
     uploader_id: "1111212"
   }
 ]
  dispatch( dispatchPhotos(photos))
 }
}
