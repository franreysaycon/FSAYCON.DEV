import Modal from "atoms/Modal"
import React from "react"
import styled from "styled-components"
import FullWidthImage from "./FullWidthImage"

const CustomModal = styled(Modal)`
  align-items: center;
  display: flex;
  height: fit-content;
  justify-content: center;
  padding-bottom: ${({ theme }) => theme.spaces[3]};
  padding-top: ${({ theme }) => theme.spaces[3]};
  width: 30rem;

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 50rem;
  }
`

interface ModalClose {
  onClose: () => void;
}

const CenterImageModal: React.FC<ModalClose & JSX.IntrinsicElements["img"] > = ({ onClose, src, alt }) => (
  <CustomModal onClose={onClose}>
    <FullWidthImage src={src} alt={alt} />
  </CustomModal>
)

export default CenterImageModal
