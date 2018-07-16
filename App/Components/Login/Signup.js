import React, { Component } from 'react'
import { Text, TouchableOpacity, View, TextInput, ActivityIndicator } from 'react-native'
import SlidingUpPanel from 'rn-sliding-up-panel';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../Styles/Login'

export default class Signup extends Component {

  state = {
    email: null,
    password: null
  }

  handleSignupButton = () => {
    this.props.handleSignup(this.state.email, this.state.password)
  }

  render () {
    console.disableYellowBox = true;
    return (
      <SlidingUpPanel
        visible={this.props.visible}
        onRequestClose={this.props.handleClose}
        showBackdrop={false}
      >
        <View style={styles.signup}>
          <Text style={styles.label}>Create a new account to register</Text>
          <Icon name="envelope" style={styles.textIcon} />
          <TextInput
            autoCapitalize='none'
            spellCheck={false}
            style={styles.textField}
            placeholder="Email"
            placeholderTextColor= '#ddd'
            onChangeText={(email) => this.setState({email})}
          />
          <Icon name="key" style={styles.textIcon} />
          <TextInput
            secureTextEntry
            style={styles.textField}
            placeholder="Password"
            placeholderTextColor= '#ddd'
            onChangeText={(password) => this.setState({password})}
          />
          <Icon name="key" style={styles.textIcon} />
          <TextInput
            secureTextEntry
            style={styles.textField}
            placeholder="Confirm Password"
            placeholderTextColor= '#ddd'
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleSignupButton}
          >
            <Text
              style={styles.buttonText}
            >
              {
                this.props.loading ?
                  <ActivityIndicator size="small" color="#fff" /> :
                  'Signup'
              }
            </Text>
          </TouchableOpacity>
        </View>
      </SlidingUpPanel>
    )
  }
}
