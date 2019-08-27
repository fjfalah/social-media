import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  Card, Form, FormGroup, Input, Button, Spinner,
} from 'reactstrap'
import { Box, Flex, Text } from '../components'
import { actionAddNewPost } from '../store/actions/postsActions'
import theme from '../constants/theme'

const Root = styled(Card)`
  padding: 10px;
`

const PostForm = (props) => {
  const { isLoadingEvent, isEditForm, account } = props
  const [isErrorForm, setIsErrorForm] = useState(false)
  const [isEdit, setIsEdit] = useState(isEditForm)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title === '' || body === '') {
      setIsErrorForm(true)
    } else {
      setIsErrorForm(false)
      const bodyReq = {
        title,
        body,
        userId: account.id,
      }
      if (!isEdit) {
        props.actionAddNewPost(bodyReq)
      }
      handleCancel()
    }
  }

  const handleCancel = () => {
    setIsEdit(false)
    setTitle('')
    setBody('')
  }

  return (
    <>
      <Root>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              name="body"
              placeholder="Description"
              value={body}
              onChange={(e) => setBody(e.target.value)}
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
            {
              !isEdit && (
                <Button disabled={isLoadingEvent} color="info">
                  {
                    isLoadingEvent
                      ? <Spinner color="light" />
                      : 'Post'
                  }
                </Button>
              )
            }
            {
              isEdit && (
                <>
                  <Button outline color="secondary" onClick={() => handleCancel()}>
                    Cancel
                  </Button>
                  &nbsp;
                  <Button disabled={isLoadingEvent} color="info">
                    {
                      isLoadingEvent
                        ? <Spinner color="light" />
                        : 'Save Edit'
                    }
                  </Button>
                </>
              )
            }
          </Flex>
        </Form>
      </Root>
      <Box h="10" />
    </>
  )
}

const mapStateToProps = (state) => ({
  isLoadingEvent: state.posts.isLoadingEvent,
  account: state.account.data,
})

export default connect(mapStateToProps, {
  actionAddNewPost,
})(PostForm)
