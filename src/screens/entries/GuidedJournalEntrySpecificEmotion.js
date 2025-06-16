// import React, { useState } from 'react';
// import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';
// import emotionsObject from './emotionsObject'; // Adjust the path as necessary
// import Modal from 'react-native-modal';

// const GuidedJournalEntrySpecificEmotion = ({ route, navigation }) => {
//   const { selectedEmotionCategory } = route.params;

//   // Extract all emotion keys from emotionsObject
//   const allEmotionKeys = Object.keys(emotionsObject).flatMap((category) =>
//     Object.keys(emotionsObject[category])
//   );

//   const defaultEmotionKeys = Object.keys(emotionsObject[selectedEmotionCategory.replace(" ", "")] || {});

//   const [selectedEmotions, setSelectedEmotions] = useState([]); // State to track selected emotions
//   const [isModalVisible, setModalVisible] = useState(false); // Modal visibility state

//   const toggleEmotion = (emotion) => {
//     setSelectedEmotions((prevSelectedEmotions) => {
//       if (prevSelectedEmotions.includes(emotion)) {
//         // If the emotion is already selected, unselect it (remove from selectedEmotions)
//         return prevSelectedEmotions.filter((e) => e !== emotion);
//       } else if (prevSelectedEmotions.length < 3 && !selectedEmotions.includes(emotion)) {
//         // If less than three emotions are selected and the emotion is not on the page already, add it
//         return [...prevSelectedEmotions, emotion];
//       }
//       return prevSelectedEmotions; // If limit of 3 is reached or emotion is already on the page, do nothing
//     });
//   };

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <ScrollView>
//       <LinearGradient
//         colors={['#021638', '#AAC1E7']}
//         style={styles.container}
//       >
//         <View style={styles.navBar}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={24} color="white" />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>How are you feeling today?</Text>
//           <Text style={styles.text}>Choose between one and three emotions that best fit how you feel, and have a guided journaling experience curated for you.</Text>
//         </View>

//         {/* Display Default Emotions */}
//         <View style={styles.buttonsContainer}>
//           {defaultEmotionKeys.slice(0, 6).map((emotionKey, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.emotionButton,
//                 selectedEmotions.includes(emotionKey) && styles.selectedEmotionButton, // Apply selected style
//               ]}
//               onPress={() => toggleEmotion(emotionKey)} // Add or remove emotion on selection
//             >
//               <Text style={styles.emotionButtonText}>{emotionKey}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Display Selected Emotions Below Default Emotions */}
//         <View style={styles.selectedEmotionsContainer}>
//           {selectedEmotions.map((emotion, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[styles.emotionButton, styles.selectedEmotionButton]}
//               onPress={() => toggleEmotion(emotion)} // Remove emotion when clicked
//             >
//               <Text style={styles.emotionButtonText}>{emotion}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <TouchableOpacity style={styles.showMoreButton} onPress={toggleModal}>
//           <Text style={styles.showMoreButtonText}>Show More</Text>
//           <Ionicons name="arrow-up" size={16} color="white" />
//         </TouchableOpacity>

//         {/* Modal */}
//         <Modal
//           isVisible={isModalVisible}
//           onBackdropPress={toggleModal}
//           style={styles.modal}
//         >
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Select Emotions</Text>
//             <FlatList
//               data={allEmotionKeys} // List all emotions
//               keyExtractor={(item) => item}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   style={[
//                     styles.emotionItem,
//                     selectedEmotions.includes(item) && styles.selectedEmotionButton, // Highlight only selected emotions
//                   ]}
//                   onPress={() => toggleEmotion(item)} // Add or remove emotion on selection
//                 >
//                   <Text style={styles.emotionText}>{item}</Text>
//                 </TouchableOpacity>
//               )}
//             />
//             <TouchableOpacity style={styles.closeModalButton} onPress={toggleModal}>
//               <Text style={styles.closeModalButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </Modal>
//       </LinearGradient>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: Dimensions.get('window').width,
//     minHeight: Dimensions.get('window').height,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   navBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingVertical: 10,
//     backgroundColor: '#021638',
//     position: 'absolute',
//     top: 0,
//     zIndex: 1,
//     shadowColor: 'gray',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   backButton: {
//     padding: 4,
//     marginLeft: 17,
//     marginTop: 5,
//   },
//   textContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: -60,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     paddingVertical: 1,
//     textAlign: 'center',
//   },
//   text: {
//     fontSize: 18,
//     color: '#fff',
//     padding: 10,
//     marginTop: 10,
//     textAlign: 'center',
//     marginHorizontal: 20,
//   },
//   selectedEmotionsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 20, // Adjusted margin to ensure spacing
//   },
//   emotionButton: {
//     backgroundColor: '#7C91B2',
//     borderRadius: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     margin: 5,
//     borderWidth: 1,
//     borderColor: 'white',
//   },
//   selectedEmotionButton: {
//     backgroundColor: '#021638', // Highlight color for selected emotions
//     borderColor: 'white',
//   },
//   emotionButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   showMoreButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//     width: '45%',
//     alignSelf: 'center', // Center the button horizontally
//   },
//   showMoreButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     marginRight: 5,
//   },
//   modal: {
//     justifyContent: 'flex-end',
//     margin: 0,
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     height: Dimensions.get('window').height * 0.75,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   emotionItem: {
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   emotionText: {
//     fontSize: 18,
//     color: '#333',
//   },
//   closeModalButton: {
//     marginTop: 20,
//     paddingVertical: 10,
//     backgroundColor: '#AAC1E7',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   closeModalButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default GuidedJournalEntrySpecificEmotion;
import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import emotionsObject from './emotionsObject'; // Adjust the path if needed
import Modal from 'react-native-modal';

const GuidedJournalEntrySpecificEmotion = ({ route, navigation }) => {
  const { selectedEmotionCategory } = route.params;

  const allEmotionKeys = Object.keys(emotionsObject).flatMap((category) =>
    Object.keys(emotionsObject[category])
  );

  const defaultEmotionKeys = Object.keys(emotionsObject[selectedEmotionCategory.replace(" ", "")] || {});

  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleEmotion = (emotion) => {
    const isDefaultEmotion = defaultEmotionKeys.includes(emotion);

    setSelectedEmotions((prevSelectedEmotions) => {
      const isSelected = prevSelectedEmotions.includes(emotion);

      if (isSelected) {
        return prevSelectedEmotions.filter((e) => e !== emotion);
      } else if (
        prevSelectedEmotions.length < 3 &&
        !isSelected &&
        !isDefaultEmotion // only allow new selection from modal if not default
      ) {
        return [...prevSelectedEmotions, emotion];
      }

      return prevSelectedEmotions;
    });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView>
      <LinearGradient colors={['#021638', '#AAC1E7']} style={styles.container}>
        <View style={styles.navBar}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>How are you feeling today?</Text>
          <Text style={styles.text}>
            Choose between one and three emotions that best fit how you feel,
            and have a guided journaling experience curated for you.
          </Text>
        </View>

        {/* Default Emotions */}
        <View style={styles.buttonsContainer}>
          {defaultEmotionKeys.slice(0, 6).map((emotionKey, index) => (
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

        {/* Selected Emotions */}
        <View style={styles.selectedEmotionsContainer}>
          {selectedEmotions.map((emotion, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.emotionButton, styles.selectedEmotionButton]}
              onPress={() => toggleEmotion(emotion)}
            >
              <Text style={styles.emotionButtonText}>{emotion}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.showMoreButton} onPress={toggleModal}>
          <Text style={styles.showMoreButtonText}>Show More</Text>
          <Ionicons name="arrow-up" size={16} color="white" />
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
              renderItem={({ item }) => {
                const isDefaultEmotion = defaultEmotionKeys.includes(item);
                const isSelected = selectedEmotions.includes(item);

                return (
                  <TouchableOpacity
                    style={[
                      styles.emotionItem,
                      isSelected && styles.selectedEmotionButton,
                      isDefaultEmotion && { opacity: 0.5 },
                    ]}
                    onPress={() => {
                      if (!isDefaultEmotion) toggleEmotion(item);
                    }}
                    disabled={isDefaultEmotion}
                  >
                    <Text
                      style={[
                        styles.emotionText,
                        isDefaultEmotion && { color: '#999' },
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={toggleModal}
            >
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
  selectedEmotionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
    margin: 5,
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
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  emotionText: {
    fontSize: 18,
    color: '#333',
  },
  closeModalButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#AAC1E7',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeModalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GuidedJournalEntrySpecificEmotion;
