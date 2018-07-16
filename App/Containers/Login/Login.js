import React, { Component } from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';

import Signup from '../../Components/Login/Signup'
import DefaultLogin from '../../Components/Login/DefaultLogin'

import styles from '../Styles/Login'

export default class Login extends Component {

  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      signup: false,
      login: false,
      user: null,
      loading: false
    }
  }

  handleGoogleButton = async () => {
    try {
      // Add any configuration settings here:
      await GoogleSignin.configure({
        iosClientId: '358191463221-den9d8e843rnktgop264ivnm03hk3eb6.apps.googleusercontent.com',
        scopes: ['openid', 'email', 'profile'],
        shouldFetchBasicProfile: true
      });
  
      const data = await GoogleSignin.signIn();
  
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)

      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
  
    } catch (e) {
      alert(e);
    }
  }

  handleFacebookButton = async () => {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
  
      const data = await AccessToken.getCurrentAccessToken();
  
      if (!data) {
        alert('Something went wrong obtaining the users access token')
      }
  
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
      
      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
    } catch (e) {
      alert(e);
    }
  }

  handleLogin = (email, password) => {
    this.setState({
      loading: true
    })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(e => {
        alert(e)
        this.setState({
          loading: false
        })
      })
  }

  handleSignup = (email, password) => {
    this.setState({
      loading: true
    })
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(e => {
        alert(e)
        this.setState({
          loading: false
        })
      })
  }

  handleSignupClose = () => {
    this.setState({
      signup: false,
      loading: false
    })
  }

  handleLoginClose = () => {
    this.setState({
      login: false,
      loading: false
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='cover' blurRadius={ !(this.state.signup || this.state.login) ? 0 : 10} />
        <View style={styles.container}>
            <View style={styles.centered}>
              <Image source={Images.logo} style={!(this.state.signup || this.state.login) ? styles.logo : styles.logoMoved} resizeMode='stretch' />
              <Text style={styles.logoText}>
                <Text style={{fontWeight: 'bold'}}>
                  vision
                </Text>
                as
                <Text style={{fontWeight: 'bold'}}>
                  one
                </Text>
              </Text>
            </View>
          </View>
        {
          !(this.state.signup || this.state.login) &&
          <View style={styles.section} >
            <TouchableOpacity
              style={styles.facebookButton}
              onPress={this.handleFacebookButton}
            >
              <Icon name="facebook" size={28} style={styles.facebookButtonIcon} />
              <Text
                style={styles.facebookButtonText}
              >
                Login With Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.googleButton}
              onPress={this.handleGoogleButton}
            >
              <Image source={Images.googleIcon} style={styles.googleButtonIcon} />
              <Text
                style={styles.googleButtonText}
              >
                Login With Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => { this.setState({ login: true })}}
            >
              <Text
                style={styles.loginButtonText}
              >
                or login with&nbsp;
                <Text style={{fontWeight: 'bold'}}>Vision</Text>
              </Text>
            </TouchableOpacity>
          </View>
        }
        {
          !(this.state.signup || this.state.login) &&
            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => this.setState({ signup: true })}
            >
              <Text
                style={styles.signupButtonText}
              >
                Don't have an account?
              </Text>
            </TouchableOpacity>
        }
        <Signup
          visible={this.state.signup}
          handleClose={this.handleSignupClose}
          handleSignup={this.handleSignup}
          loading={this.state.loading}
        />
        <DefaultLogin
          visible={this.state.login}
          handleClose={this.handleLoginClose}
          handleLogin={this.handleLogin}
          loading={this.state.loading}
        />
      </View>
    )
  }
}
