import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: 150,
    height: Metrics.images.logo,
    width: Metrics.images.logo
  },
  logoMoved: {
    marginTop: 70,
    height: Metrics.images.logo,
    width: Metrics.images.logo
  },
  logoText: {
    color: Colors.white,
    opacity: 0.9,
    fontSize: 24,
    fontWeight: '200',
    letterSpacing: 1
  },
  centered: {
    alignItems: 'center'
  },
  facebookButton: {
    backgroundColor: Colors.facebook,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 45,
    marginBottom: Metrics.baseMargin,
    marginTop: Metrics.doubleBaseMargin,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  facebookButtonIcon: {
    height: 28,
    width: 30,
    position: 'absolute',
    left: 45,
    color: Colors.white
  },
  facebookButtonText: {
    color: Colors.white,
    opacity: 0.9,
    marginLeft: 55,
    fontSize: 14
  },
  googleButton: {
    backgroundColor: Colors.white,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: Metrics.doubleBaseMargin,
    height: 45,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  googleButtonIcon: {
    height: 28,
    width: 30,
    position: 'absolute',
    left: 40
  },
  googleButtonText: {
    color: Colors.black,
    opacity: 0.9,
    marginLeft: 40,
    fontSize: 14
  },
  signupButton: {
    position: 'absolute',
    width: '50%',
    left: '25%',
    alignItems: 'center',
    bottom: 15
  },
  loginButton: {
    alignItems: 'center',
  },
  signupButtonText: {
    color: Colors.white,
    opacity: 0.8
  },
  loginButtonText: {
    color: Colors.white,
    opacity: 0.8
  }
})
