import React from 'react'
import styled from 'styled-components'
import {
  Modal, ModalBody, ModalHeader, ModalFooter, Button,
} from 'reactstrap'

const Img = styled.img`
  width: 100%;
`

const ModalPhotoDetail = ({ isShow, handleToggleModal, photo }) => {
  return (
    <Modal isOpen={isShow} toggle={() => handleToggleModal(!isShow)}>
      <ModalHeader toggle={() => handleToggleModal(!isShow)}>{photo?.title}</ModalHeader>
      <ModalBody>
        <Img src={photo?.url} className="rounded float-left" alt="..." />
      </ModalBody>
    </Modal>
  )
}

export default ModalPhotoDetail
