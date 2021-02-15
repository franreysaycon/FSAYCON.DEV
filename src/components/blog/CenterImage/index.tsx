import Modal from "atoms/Modal"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spaces[2]};
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
`

const AltText = styled.span`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: inherit;
`

const Image = styled.img`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spaces[0]};
`

const CenterImageModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: fit-content;
  padding-top: ${({ theme }) => theme.spaces[3]};
  padding-bottom: ${({ theme }) => theme.spaces[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 50rem;
  }
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
        <Image src={src} alt={alt} />
        <AltText>{alt}</AltText>
      </Container>
      {
        modalOpen && (
          <CenterImageModal onClose={closeModal}>
            <Image src={src} alt={alt} />
          </CenterImageModal>
        )
      }
    </>
  )
}

export default CenterImage
