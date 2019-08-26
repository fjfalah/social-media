import React from 'react'
import { Spinner } from 'reactstrap'
import { Flex, Box } from '.'

const Loading = ({ marginTop = 0, marginBottom = 0 }) => {
  return (
    <Flex ai="center" fd="column">
      <Box h={marginTop} />
      <Spinner color="dark" />
      <Box h={marginBottom} />
    </Flex>
  )
}

export default Loading
