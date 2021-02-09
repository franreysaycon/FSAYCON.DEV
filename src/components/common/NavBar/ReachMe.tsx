import Button from "atoms/Button"
import Header from "atoms/Header"
import Modal from "atoms/Modal"
import React, { useState } from "react"
import { GitHub, Linkedin, Mail } from "react-feather"
import styled, { useTheme } from "styled-components"

const ReachButton = styled(Button)`
  margin-left: ${({ theme }) => theme.spaces[3]};
`

const ReachMeModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 10rem;
`

const ReachMeHeader = styled(Header.H2)`
  font-family: ${({ theme }) => theme.fonts.staatchiles};
`

const Detail = styled.span`
  font-family: ${({ theme }) => theme.fonts.barlow};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`

const ReachMe: React.FC = () => {

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const theme = useTheme()

  return (
    <>
      <ReachButton onClick={() => setModalOpen(true)}>Want to reach me?</ReachButton>
      {
        modalOpen && (
          <ReachMeModal onClose={() => setModalOpen(false)}>
            <ReachMeHeader>WANT TO REACH ME?</ReachMeHeader>
            <Detail>If you have any feedback or questions about my content, don&apos;t hesitate to send a message or email!</Detail>
            <Detail>I am always in a lookout for good opportunities as well. You&apos;ll never know.</Detail>
            <IconContainer>
              <a aria-label="Email Link: me@fsaycon.dev" href="mailto:me@fsaycon.dev"><Mail color={theme.colors.purple} size={50} /></a>
              <a aria-label="Linkedin Link" href="https://www.linkedin.com/in/fssaycon/" target="_blank" rel="noreferrer"><Linkedin color={theme.colors.purple} size={50} /></a>
              <a aria-label="Github Link" href="https://github.com/franreysaycon" target="_blank" rel="noreferrer"><GitHub color={theme.colors.purple} size={50} /></a>
            </IconContainer>
          </ReachMeModal>
        )
      }
    </>
  )
}

export default ReachMe
