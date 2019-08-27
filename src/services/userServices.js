import { apiReq } from '../libraries'

const getUsers = (params) => {
  return apiReq({
    uri: '/users',
    method: 'get',
    params,
  })
}

const getUserDetail = (userId) => {
  return apiReq({
    uri: `/users/${userId}`,
    method: 'get',
  })
}

export default {
  getUsers,
  getUserDetail,
}
