import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import ReactDOM from 'react-dom'
import useOutsideClick from 'hooks/use-outside-click'
import useKeyDown from 'hooks/use-key-down'

export interface ModalProps {
  className?: string;
  children: React.ReactNode;
  onClose: () => void;
}

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 100 };
`

const Container = styled.div`
  align-items: center;
  animation: ${fadeIn} 0.3s;
  background-color: rgba(22, 22, 22, 0.85);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: ${({ theme }) => theme.zIndex.modal};
`

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 5px 5px 3px ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  height: 15rem;
  padding: ${({ theme }) => theme.spaces[0]};
  position: relative;
  width: 25rem;
`

const Modal: React.FC<ModalProps> = ({ className, children, onClose }) => {
  const ref = useRef()
  useOutsideClick(ref, onClose)
  useKeyDown(onClose, 'Escape')

  const clickStopPropagation = (e: Event) => {
    e.stopPropagation()
  }

  return ReactDOM.createPortal(
    <Container onClick={clickStopPropagation}>
      <ModalContainer ref={ref} className={className}>
        {children}
      </ModalContainer>
    </Container>,
    document.body
  )
}

export default Modal
