import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity, TextInput, Text, Dimensions, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const FreestyleJournalEntry = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState([]);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const scrollViewRef = useRef(null);
  const entryType = 'freestyle';

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleSave = () => {
    const data = {
      title: title,
      content: content,
      date: new Date().toISOString().split('T')[0], // Add the date here
      entryType: entryType
    };

    axios.post('https://j47tj5zoed.execute-api.us-east-1.amazonaws.com/dev/person/035cb00a-d539-488f-a44a-e6a01296f641/entries', data)
      .then((response) => {
        setEntries(response.data.items);
        setTitle('');
        setContent('');
        navigation.navigate('AllEntries');
      })
      .catch((error) => {
        console.error('Error posting data: ', error);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <LinearGradient
            colors={['#021638', '#AAC1E7']}
            style={styles.container}
          >
            <View style={styles.navBar}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
              <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>

              <TextInput
                style={styles.journalTitle}
                placeholder="Your title..."
                placeholderTextColor="#ccc"
                multiline={true}
                value={title}
                onChangeText={setTitle}
              />
              <ScrollView
                style={styles.journalContentContainer}
                contentContainerStyle={styles.contentContainerStyle}
                ref={scrollViewRef}
              >
                <TextInput
                  style={[styles.journalContent, keyboardVisible ? styles.journalContentKeyboardVisible : styles.journalContent]}
                  placeholder="Write your journal entry here..."
                  placeholderTextColor="#ccc"
                  value={content}
                  onChangeText={setContent}
                  multiline={true}
                  textAlignVertical="top"
                  onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                />
              </ScrollView>
            </View>
          </LinearGradient>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#021638',
    position: 'absolute',
    top: 0,
    Index: 1,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  backButton: {
    padding: 4,
    marginLeft: 17,
    marginTop: 5
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    width: '87%',
    height: '70%',
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 10
  },
  saveButton: {
    padding: 12, // Increased padding for a bigger button
    marginTop: 5,
    alignSelf: 'flex-end',
    backgroundColor: '#7C91B2',
    borderRadius: 5,
    paddingHorizontal: 25, // Increased horizontal padding
    paddingVertical: 10, // Increased vertical padding
  },
  saveButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  journalTitle: {
    width: Dimensions.get('window').width * 0.78,
    textAlignVertical: 'top',
    marginTop: 15,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    padding: 5
  },
  journalContent: {
    padding: 10,
    borderRadius: 5,
    textAlignVertical: 'top',
    width: '100%',
    flexGrow: 1,
    flexShrink: 1,
  },
  journalContentKeyboardVisible: {
    maxHeight: 200, // Adjusted height when keyboard is visible
  },
  journalContentContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 5,
    padding: 10,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  }
});

export default FreestyleJournalEntry;