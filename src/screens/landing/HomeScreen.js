import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';


const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#5D75A0', 'white']}
      style={styles.container}
    >
      <View style={styles.optionsContainer}>
        <Image source={require('../../images/J.png')} style={styles.image}/>
        <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllEntries')}>
           <Text style={styles.buttonText}>View All Entries</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GuidedJournalEntry')}>
           <Text style={styles.buttonText}>Guided Journal Entry</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FreestyleJournalEntry')}>
           <Text style={styles.buttonText}>Freestyle Journal Entry</Text>
         </TouchableOpacity>
       </View>
        </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the box vertically
    alignItems: 'center', // Center the box horizontally
  },
  optionsContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    width: '80%',
    height: '68%',
    alignItems: 'center', // Center content inside the box
  },
  image: {
    width: 270, // Default width
    height: 150, // Default height
    marginBottom: 10,
    marginRight: 7
  },

  buttonContainer: {
    width: Dimensions.get('window').width * 0.7,
  },
  button: {
    height: 60,
    padding: 10,
    // backgroundColor: 'lightblue', // Button color
    backgroundColor: '#5D75A0', // Button color
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

export default HomeScreen;
