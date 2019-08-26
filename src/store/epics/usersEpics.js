import {
  switchMap, pluck, catchError, map,
} from 'rxjs/operators'
import { of, zip } from 'rxjs'
import {
  GET_USERS_ALL,
  GET_USER_DETAIL,
} from '../actionTypes'
import userServices from '../../services/userServices'
import {
  actionGetUsersAllF, actionGetUsersAllR, actionGetUserDetailF, actionGetUserDetailR,
} from '../actions/usersActions'
import postServices from '../../services/postServices'

const getUsersAllEpics = (action$) => {
  return action$.ofType(GET_USERS_ALL).pipe(
    switchMap(() => {
      return userServices.getUsers().pipe(
        pluck('data'),
        switchMap((data) => of(actionGetUsersAllF(data))),
        catchError((error) => actionGetUsersAllR(error))
      )
    })
  )
}

const getUserDetailEpics = (action$) => {
  return action$.ofType(GET_USER_DETAIL).pipe(
    switchMap((action) => {
      return zip(
        userServices.getUserDetail(action.payload).pipe(pluck('data')),
        postServices.getPosts({ userId: action.payload }).pipe(pluck('data'))
      ).pipe(
        map(([user, posts]) => {
          const postsData = posts.map((post) => {
            return {
              ...post,
              userData: user,
            }
          })
          return {
            ...user,
            posts: postsData,
          }
        }),
        switchMap((data) => of(actionGetUserDetailF(data))),
        catchError((error) => actionGetUserDetailR(error))
      )
    })
  )
}

export default {
  getUsersAllEpics,
  getUserDetailEpics,
}
