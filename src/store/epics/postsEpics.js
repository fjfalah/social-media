import {
  switchMap, catchError, pluck, map,
} from 'rxjs/operators'
import { of, zip, concat } from 'rxjs'
import postServices from '../../services/postServices'

import {
  GET_POSTS_ALL, GET_POSTS_DETAIL,
} from '../actionTypes'
import { actionGetPostsAllF, actionGetPostsAllR, actionGetPostsDetailF } from '../actions/postsActions'
import userServices from '../../services/userServices'
import commentsServices from '../../services/commentsServices'

const getPostsAllEpics = (action$) => {
  return action$.ofType(GET_POSTS_ALL).pipe(
    switchMap(() => {
      return zip(
        postServices.getPosts().pipe(pluck('data')),
        userServices.getUsers().pipe(pluck('data'))
      ).pipe(
        map(([posts, users]) => {
          const postsData = posts.map((post) => {
            return {
              ...post,
              userData: users.find((user) => user.id === post.userId),
            }
          })

          return { postsData, users }
        }),
        switchMap(({ postsData }) => concat(
          of(actionGetPostsAllF(postsData)),
        )),
        catchError((error) => of(actionGetPostsAllR(error)))
      )
    })
  )
}

const getPostDetailEpics = (action$) => {
  return action$.ofType(GET_POSTS_DETAIL).pipe(
    switchMap((action) => {
      return zip(
        postServices.getPostDetail(action.payload).pipe(pluck('data')),
        commentsServices.getComments({ postId: action.payload }).pipe(pluck('data'))
      ).pipe(
        switchMap(([post, comments]) => {
          return userServices.getUserDetail(post.userId).pipe(
            pluck('data'),
            map((userData) => {
              return {
                ...post,
                comments,
                userData,
              }
            }),
          )
        }),
        switchMap((data) => of(actionGetPostsDetailF(data))),
        catchError(([errorPost, errorComment]) => {
          console.log(errorPost)
          console.log(errorComment)
        })
      )
    })
  )
}

export default {
  getPostsAllEpics,
  getPostDetailEpics,
}
