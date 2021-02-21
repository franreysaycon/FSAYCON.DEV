import React, { useEffect, useState } from "react"
import styled from "styled-components"
import CenterImageModal from "./CenterImageModal"
import FullWidthImage from "./FullWidthImage"

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  margin: ${({ theme }) => theme.spaces[2]};

  &:hover {
    cursor: pointer;
  }
`

const AltText = styled.span`
  color: inherit;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-style: italic;
`

const CenterImage: React.FC<JSX.IntrinsicElements['img']> = ({ src, alt }) => {

  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = (): void => {
    setModalOpen(false)
  }

  const openModal = (): void => {
    if(!modalOpen){
      setModalOpen(true)
    }
  }

  useEffect(() => {
    if(modalOpen){
      document.body.style.overflowY = 'hidden';
    }
    else{
      document.body.style.overflowY = 'scroll';
    }
  }, [modalOpen])

  return (
    <>
      <Container onClick={openModal}>
        <FullWidthImage src={src} alt={alt} />
        <AltText>{alt}</AltText>
      </Container>
      {
        modalOpen && <CenterImageModal src={src} alt={alt} onClose={closeModal} />
      }
    </>
  )
}

export default CenterImage
