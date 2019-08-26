import { apiReq } from '../libraries'

const getUsers = () => {
  return apiReq({
    uri: '/users',
    method: 'get',
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
