import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/landing/HomeScreen';
import AllEntries from './src/screens/entries/AllEntries';
import FreestyleJournalEntry from './src/screens/entries/FreestyleJournalEntry';
import GuidedJournalEntryOverallMood from './src/screens/entries/GuidedJournalEntryOverallMood';
import GuidedJournalEntrySpecificEmotion from './src/screens/entries/GuidedJournalEntrySpecificEmotion';
import GuidedJournalEntry from './src/screens/entries/GuidedJournalEntry';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AllEntries" component={AllEntries} />
        <Stack.Screen name="FreestyleJournalEntry" component={FreestyleJournalEntry} />
        <Stack.Screen name="GuidedJournalEntryOverallMood" component={GuidedJournalEntryOverallMood} />
        <Stack.Screen name="GuidedJournalEntrySpecificEmotion" component={GuidedJournalEntrySpecificEmotion} />
        <Stack.Screen name="GuidedJournalEntry" component={GuidedJournalEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
