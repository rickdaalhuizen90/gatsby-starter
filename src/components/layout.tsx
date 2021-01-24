import React from "react"
import tw from "twin.macro"

const Main = tw.main`
  grid justify-items-stretch p-4
`

const Container = tw.div`
  justify-self-center
`

const MainLayout: React.FC = ({ children }) => (
  <Main>
    <Container>{children}</Container>
  </Main>
)

export default MainLayout
