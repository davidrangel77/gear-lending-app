export function fbAuthStateChanged(cb) {
  return firebase.auth().onAuthStateChanged(cb)
}
