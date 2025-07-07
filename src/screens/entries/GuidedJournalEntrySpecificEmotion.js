import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import emotionsObject from './emotionsObject'; // Adjust the path as necessary
import Modal from 'react-native-modal';

const GuidedJournalEntrySpecificEmotion = ({ route, navigation }) => {
  const { selectedEmotionCategory } = route.params;

  const allEmotionKeys = Object.keys(emotionsObject).flatMap((category) =>
    Object.keys(emotionsObject[category])
  );

  const defaultEmotionKeys = Object.keys(emotionsObject[selectedEmotionCategory.replace(" ", "")] || {});
  const defaultVisibleEmotions = defaultEmotionKeys.slice(0, 6);

  const [visibleEmotions, setVisibleEmotions] = useState(defaultVisibleEmotions);
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleEmotion = (emotion) => {
    setSelectedEmotions((prevSelected) => {
      const alreadySelected = prevSelected.includes(emotion);

      if (alreadySelected) {
        const updated = prevSelected.filter((e) => e !== emotion);

        // Remove from visible if it's not a default
        if (!defaultVisibleEmotions.includes(emotion)) {
          setVisibleEmotions((prevVisible) =>
            prevVisible.filter((e) => e !== emotion)
          );
        }

        return updated;
      } else if (prevSelected.length < 3) {
        // Add to visible if not already there
        if (!visibleEmotions.includes(emotion)) {
          setVisibleEmotions((prevVisible) => [...prevVisible, emotion]);
        }

        return [...prevSelected, emotion];
      }

      return prevSelected;
    });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={['#021638', '#AAC1E7']}
        style={styles.container}
      >
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>How are you feeling today?</Text>
          <Text style={styles.text}>
            Choose between one and three emotions that best fit how you feel, and have a guided journaling experience curated for you.
          </Text>
        </View>

        {/* Display visible emotions */}
        <View style={styles.buttonsContainer}>
          {visibleEmotions.map((emotionKey, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.emotionButton,
                selectedEmotions.includes(emotionKey) && styles.selectedEmotionButton,
              ]}
              onPress={() => toggleEmotion(emotionKey)}
            >
              <Text style={styles.emotionButtonText}>{emotionKey}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.showMoreButton} onPress={toggleModal}>
          <Text style={styles.showMoreButtonText}>Show More</Text>
          <Ionicons name="arrow-up" size={16} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextPageButton} onPress={() => {
          navigation.navigate('GuidedJournalEntry', {
            selectedEmotionCategory,
            selectedEmotions
          });
        }}>
          <Text style={styles.nextPageButtonText}>Next</Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          style={styles.modal}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Emotions</Text>
            <FlatList
              data={allEmotionKeys}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.emotionItem,
                    selectedEmotions.includes(item) && styles.selectedEmotionButton,
                  ]}
                  onPress={() => toggleEmotion(item)}
                >
                  <Text
                    style={[
                      styles.emotionText,
                      selectedEmotions.includes(item) && styles.selectedEmotionText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeModalButton} onPress={toggleModal}>
              <Text style={styles.closeModalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
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
    zIndex: 1,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  backButton: {
    padding: 4,
    marginLeft: 17,
    marginTop: 5,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    paddingVertical: 1,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  emotionButton: {
    backgroundColor: '#7C91B2',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  selectedEmotionButton: {
    backgroundColor: '#021638',
    borderColor: 'white',
  },
  emotionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  showMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    marginBottom: 40,
    borderRadius: 5,
    width: '45%',
    alignSelf: 'center',
  },
  showMoreButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 5,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: Dimensions.get('window').height * 0.75,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emotionItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  emotionText: {
    fontSize: 18,
    color: '#333',
  },
  selectedEmotionText: {
    color: 'white',
  },
  closeModalButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#021638',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeModalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextPageButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#9CB0D1",
    borderRadius: 5,
    marginTop: -20,
    marginRight: 10
  },
  nextPageButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  }
});

export default GuidedJournalEntrySpecificEmotion;
