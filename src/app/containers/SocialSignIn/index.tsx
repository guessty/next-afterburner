import React from 'react'
import { connect } from 'react-redux'
//
import { auth } from './../../store/actions'

interface ISocialSignInProps {
  socialSignIn(type: string): void
}

const actions = {
  socialSignIn: auth.socialSignIn,
}

const SocialSignIn: any = (props: ISocialSignInProps) => (
  <div>
    <button
      onClick={() => props.socialSignIn('google')}
    >Login with Google</button>
  </div>
)

export default connect(null, actions)(SocialSignIn)
