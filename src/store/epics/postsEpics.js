import {
  switchMap, catchError, pluck, map,
} from 'rxjs/operators'
import { of, zip, concat } from 'rxjs'
import postServices from '../../services/postServices'

import {
  GET_POSTS_ALL,
} from '../actionTypes'
import { actionGetPostsAllF, actionGetPostsAllR } from '../actions/postsActions'
import userServices from '../../services/userServices'

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

export default {
  getPostsAllEpics,
}
