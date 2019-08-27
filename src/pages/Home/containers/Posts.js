import React, { useState } from 'react'
import { ListGroup, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { Loading, Flex } from '../../../components'
import PostList from '../../../containers/PostList'
import history from '../../../routes/history'
import ModalPostEdit from './ModalPostEdit'

const Posts = ({ posts, account, lastEdited }) => {
  const [selectedPost, setSelectedPost] = useState('')
  const [isModalShow, setIsModalShow] = useState(false)

  const handleSubmit = () => {

  }

  const handleEditPost = (post) => {
    setSelectedPost(post)
    setIsModalShow(!isModalShow)
  }

  if (posts === null || account === null) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <ListGroup>
        {
          posts
            .sort((a, b) => b.id - a.id)
            .map((post) => {
              const isMyPost = post.userId === account.id
              return (
                <PostList
                  key={post.id}
                  post={post.id === lastEdited?.id ? lastEdited : post}
                  isMyPost={isMyPost}
                >
                  <Flex jc="flex-end">
                    {
                      isMyPost && (
                        <>
                          <Button size="sm" color="danger" outline>Delete</Button>
                          &nbsp;
                          <Button
                            size="sm"
                            color="success"
                            outline
                            onClick={() => handleEditPost(post)}
                          >Edit
                          </Button>
                          &nbsp;
                        </>
                      )
                    }
                    <Button size="sm" color="secondary" outline onClick={() => history.push(`/posts/${post.id}`)}>Detail</Button>
                  </Flex>
                </PostList>
              )
            })
        }
      </ListGroup>
      <ModalPostEdit data={selectedPost} isModalShow={isModalShow} handleModalToggle={setIsModalShow} handleSubmit={handleSubmit} />
    </>
  )
}

const mapStateToProps = (state) => ({
  account: state.account.data,
  lastEdited: state.posts.lastEdited,
})

export default connect(mapStateToProps)(Posts)
