// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import HomeScreen from './src/screens/landing/HomeScreen';
// import UsefulLinksScreen from './src/screens/links/UsefulLinksScreen';
// import ListScreen from './src/screens/search/ListScreen';
// import ListComponentDetailItem from './src/screens/search/ListComponentDetailItem';
// import LoginScreen from './src/screens/login/LoginScreen';
// import SignupScreen from './src/screens/login/SignupScreen';

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     UsefulLinks: UsefulLinksScreen,
//     List: ListScreen,
//     ItemDetail: ListComponentDetailItem,
//     Login: LoginScreen,
//     Signup: SignupScreen,
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: '#CCCCFF',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//       headerTitleAlign: 'center', // this will center the title
//       title: 'KertRaghu',
//     },
//   }
// );

// export default createAppContainer(navigator);

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/landing/HomeScreen';
import AllEntries from './src/screens/entries/AllEntries';
import FreestyleJournalEntry from './src/screens/entries/FreestyleJournalEntry';
import GuidedJournalEntry from './src/screens/entries/GuidedJournalEntry';
import GuidedJournalEntrySpecificEmotion from './src/screens/entries/GuidedJournalEntrySpecificEmotion'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AllEntries" component={AllEntries} />
        <Stack.Screen name="FreestyleJournalEntry" component={FreestyleJournalEntry} />
        <Stack.Screen name="GuidedJournalEntry" component={GuidedJournalEntry} />
        <Stack.Screen name="GuidedJournalEntrySpecificEmotion" component={GuidedJournalEntrySpecificEmotion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
