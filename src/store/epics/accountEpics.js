import {
  switchMap, pluck, catchError,
} from 'rxjs/operators'
import { of } from 'rxjs'
import { GET_ACCOUNT_DATA } from '../actionTypes'
import userServices from '../../services/userServices'
import { actionGetAccountDataF, actionGetAccountDataR } from '../actions/accountActions'

const getAccountDataEpics = (action$) => {
  return action$.ofType(GET_ACCOUNT_DATA).pipe(
    switchMap((action) => {
      return userServices.getUsers(action.payload).pipe(
        pluck('data'),
        switchMap((data) => of(actionGetAccountDataF(data[0]))),
        catchError((error) => actionGetAccountDataR(error))
      )
    })
  )
}

export default {
  getAccountDataEpics,
}
