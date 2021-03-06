import React from 'react'
import Footer from './footer'
import Header from './header'
import { fbSignInWithRedirect, fbUpdateUser, fbAuthStateChanged, fbSetupSignoutCallback, fbWhenUserUpdated } from './firebaseAuth'

export default React.createClass({
  getInitialState() {
    return {
      provider: () => {},
      user: {
       authed: false,
       name: '',
       email: '',
       picture: '',
       lastLogin: undefined
      },
    }
  },
  componentDidMount() {
   fbAuthStateChanged((authUser) => {
     if (authUser) { // Signed in successfully
       var signOutButton = document.querySelector("[data-js='nav__signOut']")
       if (signOutButton.className == "nav__signOut--hide") {
         signOutButton.className = "nav__signOut";
       }
       var currentUser = {};
       var today = new Date();

       currentUser["/users/" + authUser.uid] = {
         name: authUser.displayName,
         email: authUser.email,
         picture: authUser.photoURL,
         lastLogin: today
       }

       fbUpdateUser(currentUser)
       
       fbWhenUserUpdated(authUser.uid, (snapshot) => {
         var snapshotReturn = snapshot.val()
         this.setState({
           user: {
             authed: true,
             name: snapshotReturn.name,
             email: snapshotReturn.email,
             picture: snapshotReturn.picture,
             lastLogin: snapshotReturn.lastLogin
           }
         });
       });
   }
  })

  },
  signUserIn() {
   fbSignInWithRedirect()
  },
  signUserOut() {
   fbSetupSignoutCallback(() => {
     this.setState({
       user: {
         authed: false,
         name: '',
         email: '',
         picture: '',
         lastLogin: undefined
       }
     })
   })
  },

  render() {
    return (
      <section id="wrap" ref="app">
        <div id="main" ref="main">
          <Header user={this.state.user}
                  signUserIn={this.signUserIn}
                  signUserOut={this.signUserOut}/>
                { this.props.children && React.cloneElement(this.props.children,
                  { user: this.state.user,
                    email:this.state.email })}
        </div>
        <Footer/>
      </section>
    )
  }
})
