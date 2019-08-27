import { apiReq } from '../libraries'

const getPosts = (params) => {
  return apiReq({
    uri: '/posts',
    method: 'get',
    params,
  })
}

const getPostDetail = (postId) => {
  return apiReq({
    uri: `/posts/${postId}`,
    method: 'get',
  })
}

const addPost = (body) => {
  return apiReq({
    uri: '/posts',
    method: 'post',
    body,
  })
}

const editPost = (body, postId) => {
  return apiReq({
    uri: `/posts/${postId}`,
    method: 'put',
    body,
  })
}

const deletePost = (postId) => {
  return apiReq({
    uri: `/posts/${postId}`,
    method: 'delete',
  })
}

export default {
  getPosts,
  getPostDetail,
  addPost,
  editPost,
  deletePost,
}
