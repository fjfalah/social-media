import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  Card, Form, FormGroup, Input, Button, Spinner,
} from 'reactstrap'
import { Box, Flex, Text } from '../../../components'
import { actionAddNewComment } from '../../../store/actions/commentsActions'
import theme from '../../../constants/theme'

const Root = styled(Card)`
  padding: 10px;
`

const CommentForm = (props) => {
  const { isLoadingEvent, account, post } = props
  const [isErrorForm, setIsErrorForm] = useState(false)
  const [name, setName] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name === '' || body === '') {
      setIsErrorForm(true)
    } else {
      setIsErrorForm(false)
      const bodyReq = {
        name,
        email: 'gmail@test.com',
        body,
        postId: post.id,
      }
      props.actionAddNewComment(bodyReq)
      setName('')
      setBody('')
    }
  }

  return (
    <>
      <Root>
        <Text variant="title-md">Add Comment</Text>
        <Box h="10" />
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                <i>Name / Description cannot be empty</i>
              </Text>
            )
          }
          <Flex jc="flex-end">
            <Button disabled={isLoadingEvent} color="info">
              {
                isLoadingEvent
                  ? <Spinner color="light" />
                  : 'Comment'
              }
            </Button>
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
  actionAddNewComment,
})(CommentForm)
