import React from 'react'
import Footer from './footer'
import Header from './header'

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
   this.setState({provider: new firebase.auth.GoogleAuthProvider()});
   firebase.auth().onAuthStateChanged((authUser) => {
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

       firebase.database().ref().update(currentUser)

       // This sets up a callback once firebase reports that /users/{user.uid} has a value
       firebase.database().ref("/users/" + authUser.uid).once("value").then((snapshot) => {
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
   else { // signed out or something went wrong
     var signOutButton = document.querySelector("[data-js='nav__signOut']")
     if(signOutButton.className == "nav__signOut"){
       signOutButton.className = "nav__signOut--hide"
     }
   }
  })

  },
  signUserIn() {
   firebase.auth().signInWithRedirect(this.state.provider);
   firebase.auth().getRedirectResult().then((result) => {
     if(result.credential) {
       var token = result.credential.accessToken;
     }

   }).catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     var email = error.email;
     var credential = error.credential;
     console.log("ERROR authenticating with firebase: " + errorMessage);
   });
  },
  signUserOut() {
   firebase.auth().signOut().then(() => {
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
      <section id="wrap" className="app">
        <div id="main">
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
