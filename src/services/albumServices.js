import { apiReq } from '../libraries'

const getAlbums = (params) => {
  return apiReq({
    uri: '/albums',
    method: 'get',
    params,
  })
}

const getPhotos = (params) => {
  return apiReq({
    uri: '/photos',
    method: 'get',
    params,
  })
}

export default {
  getAlbums,
  getPhotos,
}
