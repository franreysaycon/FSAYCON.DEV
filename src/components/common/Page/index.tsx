import React from "react"
import Footer from "../Footer"
import NavBar from "../NavBar"

const Page: React.FC = ({ children }) => (
  <>
    <NavBar />
    { children }
    <Footer />
  </>
)

export default Page
