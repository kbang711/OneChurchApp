import React from 'react'
import { StackNavigator } from 'react-navigation'
import Login from '../Containers/Login/Login'

import styles from './Styles/NavigationStyles'
import TabNavigation from './TabNavigation'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Login: { screen: Login },
  Home: { screen: TabNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
