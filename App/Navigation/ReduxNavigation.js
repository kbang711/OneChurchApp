import React from 'react'
import { BackHandler, Platform, View } from 'react-native'
import { connect } from 'react-redux'
import firebase from 'react-native-firebase';
import Login from '../Containers/Login/Login'
import TabNavigation from './TabNavigation'
import { Images } from '../Themes';
import styles from './Styles/NavigationStyles';

class ReduxNavigation extends React.Component {
  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      signup: false,
      login: false,
      user: {}
    }
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user })
    })
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  componentWillMount () {
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (nav.routes.length === 1 && (nav.routes[0].routeName === 'Login')) {
        return false
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' })
      return true
    })
  }

  componentWillUnmount () {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render () {
    if (this.state.user && this.state.user !== {}) {
      return <TabNavigation />
    } else if (this.state.user == null) {
      return <Login />
    }
    return (
      <View>
        <Image
          style={styles.backgroundImage}
          source={Images.background}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
