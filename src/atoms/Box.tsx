import { motion } from "framer-motion"
import styled from "styled-components"

const Box = styled(motion.div)`
  display: flex;
  flex: 1;
  padding-left: ${({ theme }) => theme.spaces[5] };
  padding-right: ${({ theme }) => theme.spaces[5] };
`

export default Box
