import React, { useEffect, useState } from 'react';
import { Text, ScrollView, StyleSheet, View, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import SingleEntry from './SingleEntry';
import Modal from 'react-native-modal';

const AllEntries = ({ navigation }) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    axios.get('https://j47tj5zoed.execute-api.us-east-1.amazonaws.com/dev/person/035cb00a-d539-488f-a44a-e6a01296f641/entries')
      .then((response) => {
        setEntries(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const deleteEntry = (entryid) => {
    axios.delete(`https://j47tj5zoed.execute-api.us-east-1.amazonaws.com/dev/person/035cb00a-d539-488f-a44a-e6a01296f641/entries/${entryid}`)
      .then(() => {
        console.log(`Entry with ID ${entryid} deleted.`);
        setEntries(entries.filter(entry => entry.entryid !== entryid)); // Remove deleted entry from state
      })
      .catch((error) => {
        console.error('Error deleting entry: ', error);
      });
  };

  // Sort entries by date (most recent to least recent)
  const sortedEntries = entries.sort((a, b) => new Date(b.date) - new Date(a.date));

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  if (loading) {
    return (
      <LinearGradient
        colors={['#021638', '#AAC1E7']}
        style={styles.loadingContainer}
      >
        <ActivityIndicator size="large" color="#ffffff" />
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={['#021638', '#AAC1E7']}
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Journal</Text>
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsButton}>
            <Text style={styles.buttonText}>...</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.entriesContainer}>
        {sortedEntries.map((row, index) => (
          <SingleEntry row={row} key={index} deleteEntry={deleteEntry} />
        ))}
      </ScrollView>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Ionicons name="add" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} style={styles.modal}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.modalButton} onPress={() => { toggleModal(); navigation.navigate('FreestyleJournalEntry'); }}>
            <Text style={styles.modalOption}>Freestyle Journal Entry</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={() => { toggleModal(); navigation.navigate('GuidedJournalEntry'); }}>
            <Text style={styles.modalOption}>Guided Journal Entry</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#fff',
    paddingVertical: 7,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: '#021638'
  },
  backButton: {
    padding: 5,
    marginTop: 5,
    paddingLeft: 30
  },
  searchButton: {
    padding: 4,
    marginTop: 30,
    marginRight: -120,
  },
  optionsButton: {
    padding: 2,
    marginTop: 6,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginLeft: 30
  },
  entriesContainer: {
    flex: 1,
    width: '100%',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.1,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#7C91B2',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    width: '75%',
    alignSelf: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 0,
    borderRadius: 10, // Remove rounded corners
    alignItems: 'center',
    marginBottom: 80, // Adjust this value to position the modal above the add button
  },
  modalButton: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderColor: '#E0E5E1',
  },
  modalOption: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default AllEntries;
