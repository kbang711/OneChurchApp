import React, { Component } from 'react'
import { Text, TextInput, Image, View, ScrollView, TouchableOpacity } from 'react-native'
import { Images, Colors } from '../../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase';

import EditProfile from './EditProfile'
import styles from '../Styles/Profile'

export default class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      edit: false
    }
  }

  handleEditProfile = (value) => {
    this.setState({
      edit: value
    })
  }

  handleSignout = () => {
    firebase.auth().signOut()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.profileBackground}
          source={Images.churchBackground}
          resizeMode="cover"
        />
        {
          !this.state.edit ?
            <TouchableOpacity style={styles.rightHeaderButton} onPress={() => this.handleEditProfile(true)}>
              <Icon
                name="cog"
                color={Colors.white}
                size={20}
              />
            </TouchableOpacity> :
            <TouchableOpacity style={styles.leftHeaderButton} onPress={() => this.handleEditProfile(false)}>
              <Icon
                name="arrow-left"
                color={Colors.white}
                size={20}
              />
            </TouchableOpacity>
        }
        <Image
          style={styles.profilePicture}
          source={Images.profilePicture}
        />
        {
          this.state.edit &&
            <TouchableOpacity style={styles.addProfilePicture}>
              <Icon
                name="camera"
                color='rgba(255,255,255,0.7)'
                size={25}
              />
            </TouchableOpacity>
        }
        {
          this.state.edit ?
            <EditProfile handleEditProfile={this.handleEditProfile} /> : 
            (
              <View style={{flex: 1}}>
                <ScrollView style={styles.profileContainer}>
                  <Text style={styles.profileName}>
                    Matthew Kim
                  </Text>
                  <Text style={styles.profileUsername}>
                    mck76131
                  </Text>
                </ScrollView>
                <TouchableOpacity style={styles.signoutButton} onPress={this.handleSignout}>
                  <Text style={styles.signoutButtonText}>Sign Out</Text>
                </TouchableOpacity>
              </View>
            )
        }
      </View>
    )
  }
}
