export const UPDATE_NEW_COMMENT_FORM = 'UPDATE_NEW_COMMENT_FORM'

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
