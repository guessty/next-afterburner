import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
// import { openModal } from '../modals/modalActions'

const isAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: 'isAuthenticated',
  allowRedirectBack: true,
  redirectPath: '/sign-in',
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty,
})

export default isAuthenticated
