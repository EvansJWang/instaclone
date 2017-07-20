export const TOGGLE_LIKES = 'TOGGLE_LIKES'


export function toggleLikes(photoId){
  return dispatch => {
    dispatch( dispatchToggleLikes(photoId))
  }
}

export function dispatchToggleLikes(photoId){
  return {
    type: TOGGLE_LIKES,
    photoId
  }
}
