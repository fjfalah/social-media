import React from 'react'
import { ListGroup } from 'reactstrap'
import { Loading } from '../../../components'
import PostList from '../../../containers/PostList'

const Posts = ({ posts }) => {
  if (posts === null) {
    return (
      <Loading />
    )
  }

  return (
    <ListGroup>
      {
        posts
          .sort((a, b) => b.id - a.id)
          .map((post) => {
            return (
              <PostList
                key={post.id}
                post={post}
              />
            )
          })
      }
    </ListGroup>
  )
}

export default Posts
