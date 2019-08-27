import React from 'react'
import { ListGroup } from 'reactstrap'
import PostList from '../../../containers/PostList'

const UserPosts = ({ user }) => {
  return (
    <ListGroup>
      {
        user.posts.map((post) => {
          return (
            <PostList
              key={post.id}
              post={post}
              isInUserProfile
            />
          )
        })
      }
    </ListGroup>
  )
}

export default UserPosts
