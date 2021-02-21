import React from "react"
import { ArrowLeft } from "react-feather"
import styled from "styled-components"
import Link from "next/link"

const BackSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.spaces[2]};
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`

const Icon = styled(ArrowLeft)`
  margin-right: 5px;
`

const BackButton: React.FC = () => (
  <Link href="/">
    <BackSpan>
      <Icon />
      Go Back
    </BackSpan>
  </Link>
)


export default BackButton
