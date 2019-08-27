/* eslint-disable import/no-cycle */
import {
  switchMap, catchError, pluck, map,
} from 'rxjs/operators'
import { of, zip, concat } from 'rxjs'
import postServices from '../../services/postServices'
import {
  GET_POSTS_ALL, GET_POSTS_DETAIL, ADD_NEW_POST,
} from '../actionTypes'
import {
  actionGetPostsAllF, actionGetPostsAllR, actionGetPostsDetailF, actionAddNewPostF, actionAddNewPostR,
} from '../actions/postsActions'
import userServices from '../../services/userServices'
import commentsServices from '../../services/commentsServices'
import { actionGetUsersAllF } from '../actions/usersActions'
import store from '..'

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
        switchMap(({ postsData, users }) => concat(
          of(actionGetPostsAllF(postsData)),
          of(actionGetUsersAllF(users))
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

const addNewPostEpics = (action$) => {
  return action$.ofType(ADD_NEW_POST).pipe(
    switchMap((action) => {
      return postServices.addPost(action.payload).pipe(
        pluck('data'),
        switchMap((data) => {
          const newPost = {
            ...data,
            userData: store.getState().account.data,
          }

          return of(actionAddNewPostF(newPost))
        }),
        catchError((error) => actionAddNewPostR(error))
      )
    })
  )
}

export default {
  getPostsAllEpics,
  getPostDetailEpics,
  addNewPostEpics,
}
