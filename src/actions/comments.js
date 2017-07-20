export const SET_COMMENTS = 'SET_COMMENTS'


export function dispatchComments(comments){
  return {
    type: SET_COMMENTS,
    comments
  }
}
export function fetchComments(){
  return dispatch =>{
    const comments = [
      {
      id: "10",
      commenter_id: "30",
      photo_id: "44",
      content: "DAYYYUm that photo tho"
    },{
      id: "10",
      commenter_id: "30",
      photo_id: "44",
      content: "like it, love it! Gotta have it! "
    }
    ]
    dispatch( dispatchComments(comments))
  }
}
