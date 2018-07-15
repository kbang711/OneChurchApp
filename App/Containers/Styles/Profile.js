import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  profileBackground: {
    height: '30%',
    width: '100%',
  },
  profilePicture: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: Colors.white,
    marginTop: -60,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  addProfilePicture: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(0,0,0,0.4)',
    marginTop: -130,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 45,
    marginBottom: 15
  },
  profileContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  editProfileContainer: {
    flex: 1
  },
  profileItem: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.steel,
    padding: 10
  },
  profileText: {
    marginLeft: 5,
    marginRight: 15,
    fontSize: 16,
    color: Colors.coal,
    opacity: 0.8
  },
  profileInput: {
    fontSize: 16,
    color: Colors.coal,
    width: 200
  },
  profileRow: {
    flex: 1,
    flexDirection: 'row'
  },
  profileName: {
    textAlign: 'center',
    color: Colors.coal,
    fontSize: 16,
    fontWeight: 'bold'
  },
  profileUsername: {
    textAlign: 'center',
    color: Colors.coal,
    opacity: 0.7,
    fontSize: 13
  },
  updateButton: {
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 40,
    padding: 12,
    borderRadius: 5,
    backgroundColor: Colors.blue600
  },
  updateButtonDisabled: {
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 40,
    padding: 12,
    borderRadius: 5,
    backgroundColor: Colors.cloud
  },
  updateButtonText: {
    textAlign: 'center',
    color: Colors.white
  },
  signoutButton: {
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 40,
    padding: 12,
    borderRadius: 5,
    backgroundColor: Colors.blue600
  },
  signoutButtonText: {
    textAlign: 'center',
    color: Colors.white
  }
})
