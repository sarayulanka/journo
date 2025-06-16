import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';

const PatientSignupScreen = ({ navigation }) => {
  const [companies, setCompanies] = useState([]);
  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [officialEmail, setOfficialEmail] = useState('');

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
        userType: 'NU', // Non-Patient User
        role: title,
        companyId,
        officialEmail: officialEmail || email,
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

  useEffect(() => {
    axios
      .get('https://v38y6hnh9a.execute-api.us-east-1.amazonaws.com/dev/org')
      .then((response) => {
        if (response.data.statusCode === 200) {
          setCompanies(response.data.body);
        } else {
          console.error('Error:', response.data.statusCode);
          setCompanies([]);
        }
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.heading}>Create your account</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="First and Last Name"
          onChangeText={(text) => {
            setFullName(text);
          }}
        />

        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              setCompanyId(itemValue);
            }}
          >
            {companies.map((company) => (
              <Picker.Item key={company.org_id} label={company.org_name} value={company.org_id} />
            ))}
          </Picker>
        </View>
        <Text style={styles.label}>Click to Register your org if not found:</Text>
        <TouchableOpacity onPress={() => navigation.navigate('OrgRegistration')}>
          <Text style={styles.link}>Register your Oranization</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Title/Role"
          onChangeText={(text) => {
            setTitle(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Verify Password"
          secureTextEntry
          onChangeText={(text) => {
            setVerifyPassword(text);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Official Email"
          onChangeText={(text) => {
            setOfficialEmail(text);
          }}
        />
      </View>

      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 10,
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 14,
    borderRadius: 6,
    marginBottom: 10,
  },
  picker: {
    height: 40,
    padding: 10,
    fontSize: 14,
  },
  label: {
    fontSize: 14,
  },
  link: {
    color: 'blue',
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    height: 60,
    padding: 10,
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

export default PatientSignupScreen;
