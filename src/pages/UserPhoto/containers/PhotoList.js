import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Card, Row, Col,
} from 'reactstrap'
import { Box } from '../../../components'
import ModalPhotoDetail from './ModalPhotoDetail'

const Root = styled(Card)`
  padding: 10px;
`

const Img = styled.img`
  cursor: pointer;
  margin-bottom: 10px;
`

const PhotoList = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [isModalShow, setIsModalShow] = useState(false)

  const handleSelectPhoto = (id) => {
    const selected = photos.find((photo) => photo.id === id)
    setSelectedPhoto(selected)
    setIsModalShow(!isModalShow)
  }

  return (
    <>
      <Box h="66" />
      <Root>
        <Row>
          {
            photos?.map((photo, index) => {
              return (
                <Col key={index} sm="2" xs="6" onClick={() => handleSelectPhoto(photo.id)}>
                  <Img src={photo.thumbnailUrl} alt="" className="img-thumbnail" />
                </Col>
              )
            })
          }

        </Row>
      </Root>
      <ModalPhotoDetail isShow={isModalShow} handleToggleModal={setIsModalShow} photo={selectedPhoto} />
    </>
  )
}

export default PhotoList
