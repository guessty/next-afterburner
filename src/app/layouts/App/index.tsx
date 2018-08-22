import * as React from 'react'
import { Grid, Flex } from 'react-grid-flexbox'
//
import NavBar from '@containers/NavBar'

interface IAppLayoutProps {
  children: React.ReactChild | React.ReactChildren
}

const AppLayout = (props: IAppLayoutProps) => (
  <Grid
    templateRows="63px minmax(calc(100vh - 63px), auto) auto"
    templateAreas={`
      "nav"
      "main"
      "footer"
    `}
  >
    <NavBar data-grid-area="nav" />
    <div data-grid-area="main">{props.children}</div>
    <Flex data-grid-area="footer" hAlign="center">
      <h4>Next Firestack Footer</h4>
    </Flex>
  </Grid> 
)

export default AppLayout