import React, { useState } from 'react';
import axios from 'axios';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const PatientSignupScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const handleSignUp = () => {
    // Implement sign up logic here
    // Invoke the api for the sign up post at https://v38y6hnh9a.execute-api.us-east-1.amazonaws.com/dev/user
    // with the following payload
    // {
    //   "fullName": "string",
    //   "email": "string",
    //   "password": "string",
    //   "verifyPassword": "string",
    //   "userType": "PU",
    //   "role": "string",
    //   "companyId": "string",
    //   "officialEmail": "string"
    // }

    // if password and verifyPassword do not match, show an alert
    if (password !== verifyPassword) {
      alert('Passwords do not match');
      return;
    }

    // Write the invoke logic here and handle the response using axios
    axios
      .post('https://v38y6hnh9a.execute-api.us-east-1.amazonaws.com/dev/user', {
        fullName,
        email,
        password,
        verifyPassword,
        userType: 'PU', // Patient User
        role: '',
        companyId: '',
        officialEmail: '',
      })
      .then((response) => {
        // display the response message -> successful response message and redirect to home page
        alert('Sign up successful');
        // Redirect to home page
        navigation.navigate('Home');
      })
      .catch((error) => {
        alert('An error occured while signing up. Please try again.');
        return;
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.heading}>Create your account</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.fullNameLabel}>First and Last Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setFullName(text);
          }}
        />
        <Text style={styles.emailLabel}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <Text style={styles.passwordLabel}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <Text style={styles.passwordLabelTwo}>Verify Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(text) => {
            setVerifyPassword(text);
          }}
        />
      </View>

      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.loginButton}
          title="Login Button"
            onPress={() => {
              navigation.navigate("Login")
            }}
        ><Text style={styles.loginButtonText}>Already have an account? Click here</Text></TouchableOpacity>
      </View>
      <View>
        <Text style={styles.orSignUpWithText}>Or continue with</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.googleIcon}
          title="Google Icon"
            onPress={() => {
              /* handle login */
            }}
            ><Image
            source={require('../../images/GOOGLEICON.png')}
            style={{ width: 45, height: 45 }} // Adjust the width and height as needed
            resizeMode="cover" // Ensures the image covers the specified width and height
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleIcon}
          title="Apple Icon"
            onPress={() => {
              /* handle login */
            }}
            ><Image
            source={require('../../images/APPLEICON.png')}
            style={{ width: 65, height: 65}} // Adjust the width and height as needed
            resizeMode="cover" // Ensures the image covers the specified width and height
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookIcon}
          title="Facebook Icon"
            onPress={() => {
              /* handle login */
            }}
            ><Image
            source={require('../../images/FACEBOOKICON.png')}
            style={{ width: 35, height: 35}} // Adjust the width and height as needed
            resizeMode="cover" // Ensures the image covers the specified width and height
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 40,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3a4cc8',
    position: 'absolute',
    top: 35
  },
  formContainer: {
    width: Dimensions.get('window').width * 0.7,
    position: 'absolute',
    top: 140,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3a4cc8',
    padding: 10,
    fontSize: 14,
    borderRadius: 6,
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    marginTop: 10,
  },
  button: {
    marginTop: 280,
    height: 60,
    padding: 20,
    backgroundColor: '#3a4cc8',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginButton: {
    color: 'gray',
    position: 'absolute',
    top: 475,
    left: -120,
  },
  orSignUpWithText: {
    color: '#3a4cc8',
    fontWeight: 'bold',
    position: 'absolute',
    top: 540,
    left: -67
  },
  googleIcon: {
    position: 'absolute',
    top: 570,
    left: -90,
  },
  appleIcon: {
    position: 'absolute',
    top: 561,
    left: -44
  },
  facebookIcon: {
    position: 'absolute',
    top: 574,
    left: 26
  }
  
});

export default PatientSignupScreen;
