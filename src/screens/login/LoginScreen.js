import React from 'react';
import { Text, Image, View, TextInput, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../images/LOGOSAPP.png')} style={styles.image} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} secureTextEntry />
      </View>

      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.loginButton}
          title="Login"
          onPress={() => {
            /* handle login */
          }}
        ><Text style={styles.buttonText}>Login</Text></TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            /* navigate to Forgot Password screen */
          }}
        >
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.signUpButton}
        title="Sign Up Button"
            onPress={() => {
              /* handle login */
            }}
          ><Text style={styles.signUpButtonText}>Create New Account</Text></TouchableOpacity>
      </View>
      <View> 
        <Text style={styles.orSignUpWithText}>Or continue with</Text>
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
      </View>
      <View> 
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
      </View>
      <View> 
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
  image: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    marginBottom: 20,
  },
  formContainer: {
    width: Dimensions.get('window').width * 0.7,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3a4cc8',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10
  },
  link: {
    color: '#3a4cc8',
    position: 'absolute',
    top: -120,
    left: 150,
  },
  loginButton: {
    marginTop: 32,
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
  signUpButton: {
    color: 'gray',
    position: 'absolute',
    top: -6,
    left: -70,
  },
  orSignUpWithText: {
    color: '#3a4cc8',
    fontWeight: 'bold',
    position: 'absolute',
    top: 60,
    left: -70
  },
  googleIcon: {
    position: 'absolute',
    top: 90,
    left: -90,
  },
  appleIcon: {
    position: 'absolute',
    top: 81,
    left: -44
  },
  facebookIcon: {
    position: 'absolute',
    top: 94,
    left: 26
  }
});

export default LoginScreen;
