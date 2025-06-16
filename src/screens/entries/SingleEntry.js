// import React, { useState } from 'react';
// import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
// import moment from 'moment';
// import { GestureDetector, Gesture } from 'react-native-gesture-handler';
// import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
// import { Ionicons } from '@expo/vector-icons';

// const SCREEN_WIDTH = Dimensions.get('window').width;

// const SingleEntry = ({ row, deleteEntry }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [menuVisible, setMenuVisible] = useState(false);

//   const translateX = useSharedValue(0);
//   const [showDelete, setShowDelete] = useState(false);

//   const formatDate = (dateString) => moment(dateString).format('MMMM D, YYYY');

//   const truncateTitle = (title) => {
//     if (title.length <= 30) return title;
//     const truncated = title.substring(0, 30);
//     return truncated.substring(0, truncated.lastIndexOf(' ')) + '...';
//   };

//   const truncateContent = (content) => {
//     if (content.length <= 300) return content;
//     const truncated = content.substring(0, 300);
//     return truncated.substring(0, truncated.lastIndexOf(' ')) + '...';
//   };

//   const panGesture = Gesture.Pan()
//     .onUpdate((event) => {
//       if (event.translationX < 0) {
//         translateX.value = Math.max(event.translationX, -100);
//       } else {
//         translateX.value = Math.min(event.translationX, 0);
//       }
//     })
//     .onEnd(() => {
//       if (translateX.value < -80) {
//         translateX.value = withTiming(-100, { duration: 300 });
//         runOnJS(setShowDelete)(true);
//       } else {
//         translateX.value = withTiming(0, { duration: 300 });
//         runOnJS(setShowDelete)(false);
//       }
//     });

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ translateX: translateX.value }],
//   }));

//   const handleDelete = () => {
//     // Call deleteEntry function passed from AllEntries.js
//     deleteEntry(row.entryid);
//   };

//   return (
//     <GestureDetector gesture={panGesture}>
//       <View style={styles.wrapper}>
//         {showDelete && (
//           <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
//             <Ionicons name="trash" size={20} color="white" />
//           </TouchableOpacity>
//         )}

//         <Animated.View style={[styles.container, animatedStyle]}>
//           <Text style={styles.title}>{truncateTitle(row.title)}</Text>
//           <Text style={styles.date}>{formatDate(row.date)}</Text>

//           <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
//             <Text style={styles.content}>
//               {isExpanded ? row.content : truncateContent(row.content)}
//             </Text>
//           </TouchableOpacity>

//           <View style={styles.separator} />
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.button} onPress={() => setMenuVisible(!menuVisible)}>
//               <Text style={styles.buttonText}>...</Text>
//             </TouchableOpacity>
//           </View>
//         </Animated.View>
//       </View>
//     </GestureDetector>
//   );
// };

// const styles = StyleSheet.create({
//   wrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: SCREEN_WIDTH * 0.85,
//     alignSelf: 'center',
//     marginBottom: 10,
//   },
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   date: {
//     fontSize: 16,
//     color: 'gray',
//     marginBottom: 10,
//   },
//   content: {
//     fontSize: 14,
//   },
//   separator: {
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//     marginTop: 20,
//     marginBottom: -8,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     padding: 2,
//     marginBottom: -5,
//   },
//   buttonText: {
//     color: 'gray',
//     fontSize: 25,
//   },
//   deleteButton: {
//     position: 'absolute',
//     right: 20,
//     backgroundColor: 'red',
//     width: 55,
//     height: 55,
//     borderRadius: 45,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default SingleEntry;
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import moment from 'moment';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SingleEntry = ({ row, deleteEntry }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const translateX = useSharedValue(0);
  const [showDelete, setShowDelete] = useState(false);

  const formatDate = (dateString) => moment(dateString).format('MMMM D, YYYY');

  const truncateTitle = (title) => {
    if (title.length <= 30) return title;
    const truncated = title.substring(0, 30);
    return truncated.substring(0, truncated.lastIndexOf(' ')) + '...';
  };

  const truncateContent = (content) => {
    if (content.length <= 300) return content;
    const truncated = content.substring(0, 300);
    return truncated.substring(0, truncated.lastIndexOf(' ')) + '...';
  };

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationX < 0) {
        translateX.value = Math.max(event.translationX, -100);
      } else {
        translateX.value = Math.min(event.translationX, 0);
      }
    })
    .onEnd(() => {
      if (translateX.value < -80) {
        translateX.value = withTiming(-100, { duration: 300 });
        runOnJS(setShowDelete)(true);
      } else {
        translateX.value = withTiming(0, { duration: 300 });
        runOnJS(setShowDelete)(false);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleDelete = () => {
    // Call deleteEntry function passed from AllEntries.js
    deleteEntry(row.entryid);
  };

  return (
    <GestureDetector gesture={panGesture}>
      <View style={styles.wrapper}>
        {showDelete && (
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Ionicons name="trash" size={20} color="white" />
          </TouchableOpacity>
        )}

        <Animated.View style={[styles.container, animatedStyle]}>
          <Text style={styles.title}>{truncateTitle(row.title)}</Text>
          <Text style={styles.date}>{formatDate(row.date)}</Text>

          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <Text style={styles.content}>
              {isExpanded ? row.content : truncateContent(row.content)}
            </Text>
          </TouchableOpacity>

          <View style={styles.separator} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setMenuVisible(!menuVisible)}
            >
              <Text style={styles.buttonText}>...</Text>
            </TouchableOpacity>
          </View>

          {/* Menu Modal */}
          <Modal
            isVisible={menuVisible}
            onBackdropPress={() => setMenuVisible(false)}
            style={styles.modal}
          >
            <View style={styles.menuContent}>
              <TouchableOpacity style={styles.menuOption}>
                <Text style={styles.menuText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuOption}>
                <Text style={styles.menuText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Animated.View>
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.85,
    alignSelf: 'center',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginTop: 20,
    marginBottom: -8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 2,
    marginBottom: -5,
  },
  buttonText: {
    color: 'gray',
    fontSize: 25,
  },
  deleteButton: {
    position: 'absolute',
    right: 20,
    backgroundColor: 'red',
    width: 55,
    height: 55,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    margin: 10,
    width: '70%',
    alignSelf: 'center',
  },
  menuContent: {
    backgroundColor: 'white',
    padding: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  menuOption: {
    padding: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default SingleEntry;
