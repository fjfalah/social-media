import { apiReq } from '../libraries'

const getAlbums = (params) => {
  apiReq({
    uri: '/albums',
    method: 'get',
    params,
  })
}

const getPhotos = (params) => {
  apiReq({
    uri: '/photos',
    method: 'get',
    params,
  })
}

export default {
  getAlbums,
  getPhotos,
}
