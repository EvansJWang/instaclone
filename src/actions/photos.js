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
 const photos = [
   {photoInfo: {
     id: "1",
     url: "sdfasdfsda",
     uploader_id: "1"
   },
    photoComments:[{
      id: "23",
      commenterId: "44",
      photo_id: "896",
      content: "Dayum dat photo tho!"
    },
    {
      id: "5432",
      commenterId: "4532453",
      photo_id: "54326",
      content: "comment 2"
    },
    {
      id: "7654",
      commenterId: "1",
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
      commenterId: "4777",
      photo_id: "89888886",
      content: "FAKER DATA"
    },
    {
      id: "54444432",
      commenterId: "4454545453",
      photo_id: "5445454526",
      content: "comment 7000"
    },
    {
      id: "fdhtgf54",
      commenterId: "34567",
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

export function dispatchFetchUserPhotos(photos){
  return {
    type: SET_USER_PHOTOS,
    photos
  }
}



export function fetchUserPhotos(){
 return dispatch => {
 const photos = [
   {photoInfo: {
     id: "1",
     url: "sdfasdfsda",
     uploader_id: "1"
   },
    photoComments:[{
      id: "23",
      commenterId: "1",
      photo_id: "896",
      content: "Dayum dat photo tho!"
    },
    {
      id: "5432",
      commenterId: "4532453",
      photo_id: "54326",
      content: "comment 2"
    },
    {
      id: "7654",
      commenterId: "44567",
      photo_id: "845676",
      content: "Comment 4!"
    }
  ],
    photoLikes: 20
  }
 ]
  dispatch( dispatchFetchUserPhotos(photos))
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
