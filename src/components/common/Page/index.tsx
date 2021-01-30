import React from "react"
import NavBar from "../NavBar"

const Page: React.FC = ({ children }) => (
  <>
    <NavBar />
    { children }
  </>
)

export default Page
