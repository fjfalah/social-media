import {
  switchMap, pluck, catchError,
} from 'rxjs/operators'
import { of } from 'rxjs'
import {
  GET_USER_ALBUM, GET_USER_PHOTO,
} from '../actionTypes'
import albumServices from '../../services/albumServices'
import {
  actionGetUserAlbumF, actionGetUserAlbumR, actionGetUserPhotoF, actionGetUserPhotoR,
} from '../actions/albumsActions'

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

const getUserPhotosEpics = (action$) => {
  return action$.ofType(GET_USER_PHOTO).pipe(
    switchMap((action) => {
      return albumServices.getPhotos(action.payload).pipe(
        pluck('data'),
        switchMap((data) => of(actionGetUserPhotoF(data))),
        catchError((error) => actionGetUserPhotoR(error))
      )
    })
  )
}

export default {
  getUserAlbumsEpics,
  getUserPhotosEpics,
}
