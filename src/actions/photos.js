export const SET_PHOTOS = 'SET_PHOTOS'
export const TOGGLE_PHOTO_DETAILS = 'TOGGLE_PHOTO_DETAILS'


export function dispatchPhotos(photos){
  return {
    type: SET_PHOTOS,
    photos
  }
}



export function fetchPhotos(){
 return dispatch => {
 const photos = [
   {photoInfo: {
     id: "1",
     url: "sdfasdfsda",
     uploader_id: "3333"
   },
    photoComments:[{
      id: "23",
      commenter_id: "44",
      photo_id: "896",
      content: "Dayum dat photo tho!"
    },
    {
      id: "5432",
      commenter_id: "4532453",
      photo_id: "54326",
      content: "comment 2"
    },
    {
      id: "7654",
      commenter_id: "44567",
      photo_id: "845676",
      content: "Comment 4!"
    }
  ],
    photoLikes: 20
  }, {
     photoInfo: {
     id: "2",
     url: "agrsdfgsfgj",
     uploader_id: "36663"
   },
    photoComments:[{
      id: "28",
      commenter_id: "4777",
      photo_id: "89888886",
      content: "FAKER DATA"
    },
    {
      id: "54444432",
      commenter_id: "4454545453",
      photo_id: "5445454526",
      content: "comment 7000"
    },
    {
      id: "fdhtgf54",
      commenter_id: "34567",
      photo_id: "3545454",
      content: "Comment 400000000!"
    }
  ],
    photoLikes: 200
  }


 ]
  dispatch( dispatchPhotos(photos))
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
