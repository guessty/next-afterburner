import { toastr } from 'react-redux-toastr'
//
// import { modal } from './../actions'

export const socialSignIn = selectedProvider =>
  async (_dispatch, _getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    try {
      // dispatch(modal.closeModal())
      const user = await firebase.login({
        provider: selectedProvider,
        type: 'popup',
      })
      if (user.additionalUserInfo.isNewUser) {
        await firestore.set(`users/${user.user.uid}`, {
          displayName: user.profile.displayName,
          photoURL: user.profile.avatarUrl,
          createdAt: firestore.FieldValue.serverTimestamp(),
        })
      }
      toastr.success('Success', `Hi ${user.profile.displayName}`)
    } catch (error) {
      toastr.error('Error', error.message)
    }
  }
