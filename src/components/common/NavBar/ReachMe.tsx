import Button from "atoms/Button"
import Header from "atoms/Header"
import Modal from "atoms/Modal"
import { motion } from "framer-motion"
import { openLinkInNewTab, openMailTo } from "lib/open-link"
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
  height: 13rem;
  padding: ${({ theme }) => theme.spaces[4]};
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
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spaces[1]};
  margin-bottom: ${({ theme }) => theme.spaces[1]};

  & > div {
    margin-left: ${({ theme }) => theme.spaces[3]};
  }

  & > div:first-child {
    margin-left: 0px;
  }
`

const ContactRef = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.purple};
  padding: ${({ theme }) => theme.spaces[2]};

  &:hover {
    cursor: pointer;
  }
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
              <ContactRef
                aria-label="Email Link: me@fsaycon.dev" 
                onClick={() => openMailTo("me@fsaycon.dev")}
                whileHover={{ scale: 1.1 }}
              >
                <Mail color={theme.colors.white} width="1.5rem" height="1.5rem" />
              </ContactRef>
              <ContactRef 
                aria-label="Linkedin Link"
                onClick={() => openLinkInNewTab("https://www.linkedin.com/in/fssaycon/")}
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin color={theme.colors.white} width="1.5rem" height="1.5rem" />
              </ContactRef>
              <ContactRef
                aria-label="Github Link"
                onClick={() => openLinkInNewTab("https://github.com/franreysaycon")}
                whileHover={{ scale: 1.1 }}
              >
                <GitHub color={theme.colors.white} width="1.5rem" height="1.5rem" />
              </ContactRef>
            </IconContainer>
            <Detail>
              Plus ultra! Support me by&nbsp;
              <a aria-label="Buy me coffee link" href="https://www.buymeacoffee.com/fsaycondev" target="_blank" rel="noreferrer">buying me coffee :D</a>
            </Detail>
          </ReachMeModal>
        )
      }
    </>
  )
}

export default ReachMe
