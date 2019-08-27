import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Spinner,
} from 'reactstrap'
import theme from '../../../constants/theme'
import { Text, Flex } from '../../../components'
import { actionEditPost } from '../../../store/actions/postsActions'

const ModalPostEdit = (props) => {
  const {
    isModalShow, data, handleModalToggle, isLoadingEvent,
  } = props
  if (data === null) return null
  const [isErrorForm, setIsErrorForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const body = e.target.body.value


    if (title === '' || body === '') {
      setIsErrorForm(true)
    } else {
      setIsErrorForm(false)
      const bodyReq = {
        id: data.id,
        title,
        body,
        userId: data.userId,
      }
      props.actionEditPost(bodyReq, data.id)
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
              name="title"
              placeholder="Title"
              defaultValue={data.title}
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
  isLoadingEvent: state.posts.isLoadingEvent,
})

export default connect(mapStateToProps, {
  actionEditPost,
})(ModalPostEdit)
