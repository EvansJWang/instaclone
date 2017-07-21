export const UPDATE_NEW_COMMENT_FORM = 'UPDATE_NEW_COMMENT_FORM'
export const SUBMIT_NEW_COMMENT_FORM = 'SUBMIT_NEW_COMMENT_FORM'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function updateNewCommentForm(formInformation){
  return dispatch => {
   dispatch(dispatchNewCommentForm(formInformation));
  }
}

export function dispatchNewCommentForm(formInformation){
  return {
    type: UPDATE_NEW_COMMENT_FORM,
    formInformation
  }
}



export function submitNewCommentForm(formInformation){
  return dispatch => {
   dispatch(dispatchSubmitNewCommentForm(formInformation));
  }
}

export function dispatchSubmitNewCommentForm(formInformation){
  return {
    type: SUBMIT_NEW_COMMENT_FORM,
    formInformation
  }
}

export function deleteComment(commentId){
  return dispatch => {
   dispatch(dispatchDeleteComment(commentId));
  }
}

export function dispatchDeleteComment(commentId){
  return {
    type: DELETE_COMMENT,
    commentId
  }
}
