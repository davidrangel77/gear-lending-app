const provider = {}

export function fbSignInWithRedirect() {
}

export function fbSetupSignoutCallback(cb) {
  return cb()
}

export function fbAuthStateChanged(cb) {
  return cb()
}

export function fbUpdateUser(user) {
  //FIXME: Do we need to mock out database?
}

export function fbWhenUserUpdated(uid, cb) {
  cb()
}
