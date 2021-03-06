import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Button, ListGroup } from 'reactstrap'
import styled from 'styled-components'
import PostItem from '../../../containers/PostItem'
import {
  Loading, Box, Flex,
} from '../../../components'
import CommentItem from '../../../containers/CommentItem'
import ModalCommentEdit from './ModalCommentEdit'
import ModalCommentDelete from './ModalCommentDelete'
import CommentForm from './CommentForm'

const Icon = styled.img`
  height: 10px;
  margin-right: 5px;
`

const PostContent = ({
  post, lastEdited, lastDeletedId, newComment,
}) => {
  const [selectedComment, setSelectedComment] = useState('')
  const [isModalEditShow, setIsModalEditShow] = useState(false)
  const [isModalDeleteShow, setIsModalDeleteShow] = useState(false)

  const handleEditComment = (comment) => {
    setSelectedComment(comment)
    setIsModalEditShow(!isModalEditShow)
  }

  const handleDeleteComment = (comment) => {
    setSelectedComment(comment)
    setIsModalDeleteShow(!isModalDeleteShow)
  }

  if (post === null) {
    return (
      <Loading marginTop="66" />
    )
  }

  return (
    <Container>
      <Box h="66" />
      <PostItem post={post} isDetailPost />
      <Box h="10" />
      <CommentForm post={post} />
      <Box h="10" />
      {
        post.comments && (
          <ListGroup>
            {
              newComment !== null && <CommentItem comment={newComment} />
            }
            {
              post.comments.map((comment, index) => {
                if (comment.id === lastDeletedId) return null

                return (
                  <CommentItem
                    key={index}
                    comment={comment.id === lastEdited?.id ? lastEdited : comment}
                  >
                    {
                      index === 1 && (
                        <Flex jc="flex-end">
                          <Button
                            outline
                            size="sm"
                            color="danger"
                            onClick={() => handleDeleteComment(comment)}
                          >Delete
                          </Button>
                          &nbsp;
                          <Button
                            outline
                            size="sm"
                            color="success"
                            onClick={() => handleEditComment(comment)}
                          >Edit
                          </Button>
                        </Flex>
                      )
                    }
                  </CommentItem>
                )
              })
            }
          </ListGroup>
        )
      }
      <ModalCommentEdit data={selectedComment} isModalShow={isModalEditShow} handleModalToggle={setIsModalEditShow} />
      <ModalCommentDelete data={selectedComment} isModalShow={isModalDeleteShow} handleModalToggle={setIsModalDeleteShow} />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  lastEdited: state.comments.lastEdited,
  lastDeletedId: state.comments.lastDeletedId,
  newComment: state.comments.newComment,
})

export default connect(mapStateToProps)(PostContent)
