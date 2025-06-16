import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PatientSignup')}>
          <Text style={styles.buttonText}>Patient | Caregiver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NonPatientSignup')}>
          <Text style={styles.buttonText}>Physicians, Clinicians</Text>
          <Text style={styles.buttonText}>Researchers & Others</Text>
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
    padding: 120,
  },
  buttonContainer: {
    width: Dimensions.get('window').width * 0.7,
  },
  button: {
    height: 60,
    padding: 10,
    // backgroundColor: 'lightblue', // Button color
    backgroundColor: '#6495ED', // Button color
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
