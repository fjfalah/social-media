import {
  switchMap, pluck, catchError,
} from 'rxjs/operators'
import { of } from 'rxjs'
import {
  GET_USER_ALBUM,
} from '../actionTypes'
import albumServices from '../../services/albumServices'
import { actionGetUserAlbumF, actionGetUserAlbumR } from '../actions/albumsActions'

const getUserAlbumsEpics = (action$) => {
  return action$.ofType(GET_USER_ALBUM).pipe(
    switchMap((action) => {
      return albumServices.getAlbums(action.payload).pipe(
        pluck('data'),
        switchMap((data) => of(actionGetUserAlbumF(data))),
        catchError((error) => actionGetUserAlbumR(error))
      )
    })
  )
}

export default {
  getUserAlbumsEpics,
}
