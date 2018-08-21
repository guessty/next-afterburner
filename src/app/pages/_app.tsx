
import withRedux from 'next-redux-wrapper'
import App, { Container } from 'next/app'
import * as React from 'react'
import { Provider } from 'react-redux'
import styledSanitize from 'styled-sanitize'
import { injectGlobal } from 'styled-components'
//
import initStore from '@store'
import Toastr from '@components/Toastr'


injectGlobal`
  ${styledSanitize}
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
`

interface InterfaceMyAppProps {
  store: any
  pageProps: any
  Component: React.Component
}

class MyApp extends App<InterfaceMyAppProps> {
  static async getInitialProps({Component, ctx}) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    }
  }
  render() {
    const {Component, pageProps, store} = (this as any).props
    return (
      <Container>
        <Provider store={store}>
          <div>
            <Toastr />
            <Component {...pageProps} />
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initStore)(MyApp)
