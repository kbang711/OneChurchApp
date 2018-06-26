import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  signup: {
    height: Metrics.screenHeight,
    padding: 30,
    marginTop: 160
    // backgroundColor: 'rgba(0,0,0,0.1)'
  },
  textField: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#fff',
    opacity: 0.75,
    paddingLeft: 40,
    paddingRight: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
  },
  textIcon: {
    color: '#ddd',
    opacity: 0.7,
    marginTop: 25,
    marginBottom: -24,
    marginLeft: 12
  },
  label: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: Metrics.baseMargin,
    color: Colors.white,
    opacity: 0.8,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 45,
    marginTop: 35,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttonText: {
    color: Colors.white,
    opacity: 0.9,
    fontSize: 14
  },
  passwordButton: {
    position: 'relative',
    alignItems: 'center',
    marginTop: Metrics.doubleBaseMargin
  },
  passwordButtonText: {
    color: Colors.white,
    opacity: 0.8
  },
})
