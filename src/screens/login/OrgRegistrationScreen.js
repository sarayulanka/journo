import React, { useState } from 'react';
import axios from 'axios';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const OrgRegistrationScreen = ({ navigation }) => {
  const [orgName, setOrgName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [orgContact, setOrgContact] = useState('');
  const [adminPerson, setAdminPerson] = useState('');
  const [adminContactEmail, setAdminContactEmail] = useState('');
  const [adminContactPhone, setAdminContactPhone] = useState('');

  const handleSignUp = () => {
    // Implement sign up logic here
    // Invoke the api for the sign up post at https://v38y6hnh9a.execute-api.us-east-1.amazonaws.com/dev/org
    // with the following payload
    // {
    //   "orgName": "string",
    //   "addressLine1": "string",
    //   "addressLine2": "string",
    //   "city": "string",
    //   "state": "string",
    //   "zipCode": "string",
    //   "orgContact": "string",
    //   "adminPerson": "string",
    //   "adminContactEmail": "string",
    //   "adminContactPhone": "string"
    // }

    // Write the invoke logic here and handle the response using axios
    axios
      .post('https://v38y6hnh9a.execute-api.us-east-1.amazonaws.com/dev/org', {
        orgName,
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
        orgContact,
        adminPerson,
        adminContactEmail,
        adminContactPhone,
      })
      .then((response) => {
        // display the response message -> successful response message and redirect to home page
        alert('Organization registration successful');
        // Redirect to non-patient signup page
        navigation.navigate('NonPatientSignup');
      })
      .catch((error) => {
        alert('An error occured while registering the organization. Please try again.');
        return;
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.heading}>Register your Organization</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Organization Name"
          onChangeText={(text) => {
            setOrgName(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Address Line 1"
          onChangeText={(text) => {
            setAddressLine1(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Address Line 2"
          onChangeText={(text) => {
            setAddressLine2(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="City"
          onChangeText={(text) => {
            setCity(text);
          }}
        />

        <View style={styles.row}>
          <TextInput
            style={styles.inputHalf}
            placeholder="State"
            onChangeText={(text) => {
              setState(text);
            }}
          />

          <TextInput
            style={styles.inputHalf}
            placeholder="Zip Code"
            onChangeText={(text) => {
              setZipCode(text);
            }}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Organization Contact"
          onChangeText={(text) => {
            setOrgContact(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Admin Person"
          onChangeText={(text) => {
            setAdminPerson(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Admin Contact Email"
          onChangeText={(text) => {
            setAdminContactEmail(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Admin Contact Phone"
          onChangeText={(text) => {
            setAdminContactPhone(text);
          }}
        />
      </View>

      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Register</Text>
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
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: Dimensions.get('window').width * 0.7,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputHalf: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 14,
    borderRadius: 6,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
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

export default OrgRegistrationScreen;
