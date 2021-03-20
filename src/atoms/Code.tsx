import React from "react"
import { CodeBlock, vs2015 } from "react-code-blocks"
import styled from "styled-components"

interface Node {
  value: string;
}

interface CodeProps {
  node: Node;
  language: string;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes[1]};

  &>span {
    white-space: break-spaces !important;
    padding: ${({ theme }) => theme.spaces[1]} !important; 
    width: 100%;

    code {
      line-height: 1.25 !important;
    }
  }
`

const Code: React.FC<CodeProps> = ({ node, language }) => (
  <Container>
    <CodeBlock
      text={node.value}
      language={language}
      showLineNumbers={false}
      theme={vs2015}
    />
  </Container>
)

export default Code
