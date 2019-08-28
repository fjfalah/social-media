/* eslint-disable import/no-cycle */
import { switchMap, pluck, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { ADD_NEW_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../actionTypes'
import commentsServices from '../../services/commentsServices'
import {
  actionAddNewCommentF, actionAddNewCommentR, actionEditCommentF, actionEditCommentR, actionDeleteCommentF, actionDeleteCommentR,
} from '../actions/commentsActions'

const addNewPostEpics = (action$) => {
  return action$.ofType(ADD_NEW_COMMENT).pipe(
    switchMap((action) => {
      return commentsServices.addComment(action.payload).pipe(
        pluck('data'),
        switchMap((data) => of(actionAddNewCommentF(data))),
        catchError((error) => actionAddNewCommentR(error))
      )
    })
  )
}

const editPostEpics = (action$) => {
  return action$.ofType(EDIT_COMMENT).pipe(
    switchMap(({ payload }) => {
      return commentsServices.editComment(payload.bodyReq, payload.postId).pipe(
        pluck('data'),
        switchMap((data) => of(actionEditCommentF(data))),
        catchError((error) => actionEditCommentR(error))
      )
    })
  )
}

const deletePostEpics = (action$) => {
  return action$.ofType(DELETE_COMMENT).pipe(
    switchMap(({ payload }) => {
      return commentsServices.deleteComment(payload).pipe(
        switchMap(() => of(actionDeleteCommentF(payload))),
        catchError((error) => actionDeleteCommentR(error))
      )
    })
  )
}

export default {
  addNewPostEpics,
  editPostEpics,
  deletePostEpics,
}
