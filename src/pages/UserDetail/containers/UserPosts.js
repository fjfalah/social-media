import React from 'react'
import { ListGroup } from 'reactstrap'
import PostItem from '../../../containers/PostItem'

const UserPosts = ({ user }) => {
  return (
    <ListGroup>
      {
        user.posts.map((post) => {
          return (
            <PostItem
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
