import React, { Component } from 'react';

import firebase from 'firebase/app';

export default class SignUpForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  componentDidMount() {
    this.removeListenerFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if(firebaseUser){ //if exists, then logged in
        console.log("User has logged in: ", firebaseUser.email);
        this.setState({user:firebaseUser});
      }
      else {
        console.log("User has logged out");
        this.setState({user:undefined});        
      }
    })
  }

  componentWillUnmount() {
    //turn off the state listener
    this.removeListenerFunction();
  }


  //A callback function for registering new users
  handleSignUp() {
    this.setState({errorMessage:null}); //clear old error

    //create a user in firebase!!
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((firebaseUser) => {
        let user = firebase.auth().currentUser; //get the currentUser
        let profilePromise = user.updateProfile({displayName: this.state.username})
        return profilePromise; //so further .then() will wait for me
      })
      .then(() => console.log("done"))
      .catch((err) => {
        console.log(err);
        this.setState({errorMessage: err.message});
      })
  }

  //A callback function for logging in existing users
  handleSignIn() {
    this.setState({errorMessage:null}); //clear old error

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((err) => {
        console.log(err);
        this.setState({errorMessage: err.message});
      })
  }

  //A callback function for logging out the current user
  handleSignOut(){
    this.setState({errorMessage:null}); //clear old error

    firebase.auth().signOut()
      .catch((err) => {
        console.log(err);
        this.setState({errorMessage: err.message});
      })  
  }

  handleChange(event) {
    let field = event.target.name; //which input
    let value = event.target.value; //what value

    let changes = {}; //object to hold changes
    changes[field] = value; //change this field
    this.setState(changes); //update state
  }

  render() {

    let userMessage = null;
    if(this.state.user) {
      userMessage = <div className="alert alert-success"><h3>Logged in as {this.state.user.displayName}</h3></div>;
    }


    return (
      <div className="container">
        <h2>Sign up!</h2>

        {this.state.errorMessage &&
          <p class="alert alert-danger">{this.state.errorMessage}</p>
        }

        {userMessage}

        <div className="form-group">
          <label>Email:</label>
          <input className="form-control"
            name="email"
            value={this.state.email}
            onChange={(event) => {this.handleChange(event) } }
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control"
            name="password" 
            value={this.state.password}
            onChange={(event) => {this.handleChange(event) } }
            />
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input className="form-control"
            name="username"
            value={this.state.username}
            onChange={(event) => {this.handleChange(event) } }
            />
        </div>

        <div className="form-group mb-5">
          <button className="btn btn-primary mr-2" onClick={() => this.handleSignUp()}>
            Sign Up
          </button>
          <button className="btn btn-success mr-2" onClick={() => this.handleSignIn()}>
            Sign In
          </button>
          <button className="btn btn-warning mr-2" onClick={() => this.handleSignOut()}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}
