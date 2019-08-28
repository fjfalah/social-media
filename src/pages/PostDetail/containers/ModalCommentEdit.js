import React, { useState } from 'react'
import {
  Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Spinner,
} from 'reactstrap'
import { connect } from 'react-redux'
import { Text, Flex } from '../../../components'
import theme from '../../../constants/theme'
import { actionEditComment } from '../../../store/actions/commentsActions'

const ModalCommentEdit = (props) => {
  const {
    isModalShow, data, handleModalToggle, isLoadingEvent = false,
  } = props
  const [isErrorForm, setIsErrorForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const body = e.target.body.value

    if (name === '' || body === '') {
      setIsErrorForm(true)
    } else {
      setIsErrorForm(false)
      const bodyReq = {
        id: data.id,
        name,
        body,
        postId: data.postId,
        email: data.email,
      }

      props.actionEditComment(bodyReq, data.id)
      handleModalToggle(!isModalShow)
    }
  }

  return (
    <Modal isOpen={isModalShow} toggle={() => handleModalToggle(!isModalShow)}>
      <ModalHeader toggle={() => handleModalToggle(!isModalShow)}>Edit Post</ModalHeader>
      <ModalBody>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={data.name}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              name="body"
              placeholder="Description"
              defaultValue={data.body}
            />
          </FormGroup>
          {
            isErrorForm && (
              <Text variant="caption" color={theme.color.red}>
                <i>Title / Description cannot be empty</i>
              </Text>
            )
          }
          <Flex jc="flex-end">
            <Button outline color="secondary" onClick={() => handleModalToggle(!isModalShow)}>Cancel</Button>
            &nbsp;
            <Button disabled={isLoadingEvent} color="info">
              {
                isLoadingEvent
                  ? <Spinner color="light" />
                  : 'Save Edit'
              }
            </Button>
          </Flex>
        </Form>
      </ModalBody>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  isLoadingEvent: state.comments.isLoadingEvent,
})

export default connect(mapStateToProps, {
  actionEditComment,
})(ModalCommentEdit)
