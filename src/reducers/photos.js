import { SET_PHOTOS } from '../actions/photos';

function processPhotos(input) {
  return(
    input.map((item)=>{
      item["showDetails"] = false
      return(
          item
      )
    })
  )
}



export default function photos(state = [], action = {}) {
  switch(action.type) {
    case SET_PHOTOS:
     return processPhotos(action.photos);
  default: return state;
  }
}
