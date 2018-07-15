import React, { Component } from 'react'
import { Text, TextInput, Image, View, ScrollView, TouchableOpacity } from 'react-native'

import styles from '../Styles/Profile'

export default class EditProfile extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: 'mck76131',
      firstName: 'Matthew',
      lastName: 'Kim',
      city: 'Suwanee',
      state: 'GA',
      phone: '678-646-9239',
      church: 'Passion City Church',
      changed: false
    }
  }

  handleUpdateButton = () => {
    this.setState({
      changed: false
    })
    this.props.handleEditProfile(false)
  }

  render () {
    return (
      <View style={styles.editProfileContainer}>
        <ScrollView style={styles.profileContainer}>
          <View style={styles.profileItem}>
            <Text style={styles.profileText}>
              Username
            </Text>
            <TextInput
              value={this.state.username}
              style={styles.profileInput}
              onChangeText={(value) => this.setState({username: value, changed: true})}
            />
          </View>
          <View style={styles.profileItem}>
            <Text style={styles.profileText}>
              First Name
            </Text>
            <TextInput
              value={this.state.firstName}
              style={styles.profileInput}
              onChangeText={(value) => this.setState({firstName: value, changed: true})}
            />
          </View>
          <View style={styles.profileItem}>
            <Text style={styles.profileText}>
              Last Name
            </Text>
            <TextInput
              value={this.state.lastName}
              style={styles.profileInput}
              onChangeText={(value) => this.setState({lastName: value, changed: true})}
            />
          </View>
          <View style={styles.profileItem}>
            <View style={styles.profileRow}>
              <Text style={styles.profileText}>
                City
              </Text>
              <TextInput
                value={this.state.city}
                style={styles.profileInput}
                onChangeText={(value) => this.setState({city: value, changed: true})}
              />
            </View>
            <View style={styles.profileRow}>
              <Text style={styles.profileText}>
                State
              </Text>
              <TextInput
                value={this.state.state}
                style={styles.profileInput}
                onChangeText={(value) => this.setState({state: value, changed: true})}
              />
            </View>
          </View>
          <View style={styles.profileItem}>
            <Text style={styles.profileText}>
              Phone
            </Text>
            <TextInput
              value={this.state.phone}
              style={styles.profileInput}
              onChangeText={(value) => this.setState({phone: value, changed: true})}
            />
          </View>
          <View style={styles.profileItem}>
            <Text style={styles.profileText}>
              Church
            </Text>
            <TextInput
              value={this.state.church}
              style={styles.profileInput}
              onChangeText={(value) => this.setState({church: value, changed: true})}
            />
          </View>
        </ScrollView>
        <TouchableOpacity style={this.state.changed ? styles.updateButton : styles.updateButtonDisabled } onPress={this.handleUpdateButton} >
          <Text style={styles.updateButtonText}>
            Update Info
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
