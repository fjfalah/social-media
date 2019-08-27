import React, { useState } from 'react'
import { ListGroup, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { Loading, Flex } from '../../../components'
import PostList from '../../../containers/PostList'
import history from '../../../routes/history'
import ModalPostEdit from './ModalPostEdit'
import ModalPostDelete from './ModalPostDelete'

const Posts = ({
  posts, account, lastEdited, lastDeletedId,
}) => {
  const [selectedPost, setSelectedPost] = useState('')
  const [isModalEditShow, setIsModalEditShow] = useState(false)
  const [isModalDeleteShow, setIsModalDeleteShow] = useState(false)

  const handleEditPost = (post) => {
    setSelectedPost(post)
    setIsModalEditShow(!isModalEditShow)
  }

  const handleDeletePost = (post) => {
    setSelectedPost(post)
    setIsModalDeleteShow(!isModalDeleteShow)
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

              if (post.id === lastDeletedId) return null

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
                          <Button
                            size="sm"
                            color="danger"
                            outline
                            onClick={() => handleDeletePost(post)}
                          >Delete
                          </Button>
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
      <ModalPostEdit data={selectedPost} isModalShow={isModalEditShow} handleModalToggle={setIsModalEditShow} />
      <ModalPostDelete data={selectedPost} isModalShow={isModalDeleteShow} handleModalToggle={setIsModalDeleteShow} />
    </>
  )
}

const mapStateToProps = (state) => ({
  account: state.account.data,
  lastEdited: state.posts.lastEdited,
  lastDeletedId: state.posts.lastDeletedId,
})

export default connect(mapStateToProps)(Posts)
