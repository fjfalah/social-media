import React from 'react'
import { connect } from 'react-redux'
import {
  Modal, ModalHeader, ModalBody, Button, Spinner,
} from 'reactstrap'
import { Text, Flex, Box } from '../../../components'
import { actionDeleteComment } from '../../../store/actions/commentsActions'

const ModalCommentDelete = (props) => {
  const {
    isModalShow, data, handleModalToggle, isLoadingEvent,
  } = props
  if (data === null) return null

  const handleSubmit = () => {
    props.actionDeleteComment(data.id)
    handleModalToggle(!isModalShow)
  }

  return (
    <Modal isOpen={isModalShow} toggle={() => handleModalToggle(!isModalShow)}>
      <ModalHeader toggle={() => handleModalToggle(!isModalShow)}>Delete Comment</ModalHeader>
      <ModalBody>
        <Text>Are you sure want to delete comment <br /><b>{data.name}</b></Text>
        <Box h="10" />
        <Flex jc="flex-end">
          <Button outline color="secondary" onClick={() => handleModalToggle(!isModalShow)}>Cancel</Button>
            &nbsp;
          <Button
            disabled={isLoadingEvent}
            color="danger"
            onClick={() => handleSubmit()}
          >
            {
              isLoadingEvent
                ? <Spinner color="light" />
                : 'Delete'
            }
          </Button>
        </Flex>
      </ModalBody>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  isLoadingEvent: state.posts.isLoadingEvent,
})

export default connect(mapStateToProps, {
  actionDeleteComment,
})(ModalCommentDelete)
