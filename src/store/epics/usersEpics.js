import { switchMap, pluck, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import {
  GET_USERS_ALL,
  GET_USER_DETAIL,
} from '../actionTypes'
import userServices from '../../services/userServices'
import { actionGetUsersAllF, actionGetUsersAllR } from '../actions/usersActions'

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

export default {
  getUsersAllEpics,
}
