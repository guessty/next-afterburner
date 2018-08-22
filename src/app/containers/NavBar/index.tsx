import * as React from 'react'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { Flex } from 'react-grid-flexbox'
//
import * as Router from '@router'
import SocialSignIn from '@containers/SocialSignIn'

interface INavBarProps {
  auth: {
    isLoaded: boolean
    isEmpty: boolean
  }
  profile: {
    displayName: string
  }
  firebase: {
    logout(): void
  }
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

class NavBar extends React.PureComponent<INavBarProps, any> {
  constructor(props: INavBarProps) {
    super(props)
  }
  handleSignOut = () => {
    this.props.firebase.logout()
    Router.Router.pushRoute('/')
  }
  render() {
    const authenticated = this.props.auth.isLoaded && !this.props.auth.isEmpty
    return (
      <nav>
        <Flex direction="row" gutter="20px" incGutterEdges={true}>
          <Router.Link to="/"><a>Next FireStack</a></Router.Link>
          <Router.Link to="/about"><a>About</a></Router.Link>
          <div data-flex-grow={true} />
          {
            authenticated ? (
              <Flex direction="row" gutter="20px" vAlign="middle">
                <h4>{this.props.profile.displayName}</h4>
                <button onClick={this.handleSignOut}>Sign Out</button>
              </Flex>
            ) : (
              <SocialSignIn />
            )
          }
        </Flex>
      </nav>
    )
  }
}

export default withFirebase(connect(mapStateToProps)(NavBar))
