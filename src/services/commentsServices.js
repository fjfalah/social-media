import { apiReq } from '../libraries'

const getComments = (params) => {
  return apiReq({
    uri: '/comments',
    method: 'get',
    params,
  })
}

const addComment = (body) => {
  return apiReq({
    uri: '/comments',
    method: 'post',
    body,
  })
}

const editComment = (body, commentId) => {
  return apiReq({
    uri: `/comments/${commentId}`,
    method: 'put',
    body,
  })
}

const deleteComment = (commentId) => {
  return apiReq({
    uri: `/comments/${commentId}`,
    method: 'delete',
  })
}

export default {
  getComments,
  addComment,
  editComment,
  deleteComment,
}
