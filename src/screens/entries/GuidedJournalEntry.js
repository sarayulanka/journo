import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import emotionsObject from './emotionsObject';

const { width, height } = Dimensions.get('window');
const NAVBAR_HEIGHT = 56;
const STATUSBAR_HEIGHT = Platform.OS === 'android' ? 24 : 0;

const GuidedJournalEntry = ({ route, navigation }) => {
  const { selectedEmotions } = route.params;

  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [journalModalVisible, setJournalModalVisible] = useState(false);
  const [journalEntry, setJournalEntry] = useState('');
  const [emotionIntensity, setEmotionIntensity] = useState(5);
  const [savedEntries, setSavedEntries] = useState({});

  const handleSave = () => {
    const updated = {
      ...savedEntries,
      [selectedEmotion]: {
        text: journalEntry,
        intensity: emotionIntensity,
      },
    };
    setSavedEntries(updated);
    setJournalModalVisible(false);
    setJournalEntry('');
    setEmotionIntensity(5);
  };

  const getEmotionPrompt = (emotion) => {
    for (const category of Object.keys(emotionsObject)) {
      if (emotionsObject[category][emotion]) {
        return emotionsObject[category][emotion][0];
      }
    }
    return '';
  };

  return (
    <LinearGradient colors={['#021638', '#AAC1E7']} style={styles.container}>
      <View style={styles.pageWrapper}>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Reflect on Your Emotions</Text>
          <Text style={styles.subtext}>Tap an emotion to write and rate it</Text>

          <View style={styles.emotionButtonContainer}>
            {selectedEmotions.map((emotion) => (
              <TouchableOpacity
                key={emotion}
                style={styles.largeEmotionButton}
                onPress={() => {
                  setSelectedEmotion(emotion);
                  const prev = savedEntries[emotion] || {};
                  setJournalEntry(prev.text || '');
                  setEmotionIntensity(prev.intensity || 5);
                  setJournalModalVisible(true);
                }}
              >
                <Text style={styles.largeEmotionText}>{emotion}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <Modal
        visible={journalModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setJournalModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.modalOverlay}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Feeling "{selectedEmotion}"</Text>
              <Text style={styles.sliderLabel}>How strongly are you feeling this?</Text>
              <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={10}
                step={1}
                value={emotionIntensity}
                onValueChange={setEmotionIntensity}
                minimumTrackTintColor="#637AA8"
                maximumTrackTintColor="#ccc"
                thumbTintColor="#637AA8"
              />
              <Text style={styles.sliderValue}>{emotionIntensity}/10</Text>
              <Text style={styles.modalPrompt}>{getEmotionPrompt(selectedEmotion)}</Text>
              <View style={styles.scrollableInputArea}>
                <TextInput
                  style={styles.modalInputLarge}
                  placeholder="Write your thoughts..."
                  multiline
                  value={journalEntry}
                  onChangeText={setJournalEntry}
                  blurOnSubmit={true}
                  textAlignVertical="top"
                  placeholderTextColor="#999"
                  scrollEnabled={true}
                />
              </View>
              <TouchableOpacity style={styles.modalSaveButton} onPress={handleSave}>
                <Text style={styles.modalSaveButtonText}>Save Reflection</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageWrapper: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#021638',
    zIndex: 10,
  },
  backButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 14,
    color: '#e0e0e0',
    textAlign: 'center',
    marginBottom:40
  },
  emotionButtonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 14,
    marginBottom: 100
  },
  largeEmotionButton: {
    backgroundColor: '#2C3E60',
    width: '65%',
    paddingVertical: 14,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
  },
  largeEmotionText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 24,
    width: width * 0.92,
    height: height * 0.75,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#021638',
  },
  sliderLabel: {
    marginBottom: 8,
    color: '#333',
    fontWeight: '500',
    fontSize: 16,
  },
  slider: {
    width: '100%',
  },
  sliderValue: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#444',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalPrompt: {
    fontSize: 16,
    color: '#16305c',
    marginBottom: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  scrollableInputArea: {
    flex: 1,
    marginBottom: 20,
  },
  modalInputLarge: {
    flex: 1,
    minHeight: 180,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 14,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'top',
  },
  modalSaveButton: {
    backgroundColor: '#637AA8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalSaveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default GuidedJournalEntry;