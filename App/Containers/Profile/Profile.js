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
      edit: false,
      user: firebase.auth().currentUser
    }
  }

  handleEditProfile = (value) => {
    this.setState({
      edit: value
    })
  }

  handleAddPhoto = () => {
    firebase.auth().currentUser.updateProfile({
      photoURL: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/33144997_10211463134517433_8194339027109806080_n.jpg?_nc_cat=0&oh=ddfaaa9dcca9de8cc6c000332b80ef84&oe=5BE0DD64',
      phoneNumber: '678-646-9239',
      metadata: {
        state: 'GA',
        city: 'Suwanee',
        church: 'Grace Midtown'
      }
    })
    .catch(e => {
      alert(e)
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
          source={{uri:(this.state.user.photoURL)}}
        />
        {
          (this.state.edit || !this.state.user.photoURL) &&
            <TouchableOpacity style={styles.addProfilePicture} onPress={this.handleAddPhoto}>
              <Icon
                name="camera"
                color='rgba(255,255,255,0.7)'
                size={25}
              />
            </TouchableOpacity>
        }
        {
          this.state.edit ?
            <EditProfile handleEditProfile={this.handleEditProfile} user={this.state.user} /> : 
            (
              <View style={{flex: 1}}>
                <ScrollView style={styles.profileContainer}>
                  <Text style={styles.profileName}>
                    { this.state.user.displayName }
                  </Text>
                  <Text style={styles.profileUsername}>
                    { this.state.user.email }
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
