import * as React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import PrayerWall from '../Containers/PrayerWall/PrayerWall'
import Profile from '../Containers/Profile/Profile'
import Calendar from '../Containers/Calendar/Calendar'
import Chat from '../Containers/Chat/Chat'
import Notifications from '../Containers/Notifications/Notifications'
import TabBarIcon from './TabBarIcon';

class PrayerWallTab extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Prayer Wall',
    tabBarIcon: TabBarIcon('dashboard'),
  }
  render() {
    return <PrayerWall />;
  }
}

class ProfileTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabBarIcon('account-circle'),
  }
  render() {
    return <Profile />;
  }
}

class CalendarTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabBarIcon('event'),
  }
  render() {
    return <Calendar />;
  }
}

class ChatTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabBarIcon('chat'),
  }
  render() {
    return <Chat />;
  }
}

class NotificationsTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabBarIcon('notifications'),
  }
  render() {
    return <Notifications />;
  }
}

export default createMaterialBottomTabNavigator({
  PrayerWall: PrayerWallTab,
  Profile: ProfileTab,
  Calendar: CalendarTab,
  Chat: ChatTab,
  Notifications: NotificationsTab
},
{
  activeTintColor: '#64B5F6',
  inactiveTintColor: '#B0BEC5',
  barStyle: { backgroundColor: 'rgba(255,255,255,0.8)' }
})