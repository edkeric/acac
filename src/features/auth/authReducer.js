import { SIGN_IN_USER, SIGN_OUT_USER } from './authConstants'

const initialState = {
  auth: false,
  currentUser: null,
}

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        auth: true,
        currentUser: {
          email: payload.email,
          photoURL: payload.photoURL,
          uid: payload.uid,
          displayName: payload.displayName,
          providerId: payload.providerData[0].providerId,
        },
      }
    case SIGN_OUT_USER:
      return {
        ...state,
        auth: false,
        currentUser: null,
      }
    default:
      return state
  }
}
