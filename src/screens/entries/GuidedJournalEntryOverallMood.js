import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";

const GuidedJournalEntryOverallMood = ({ navigation }) => {
  const [sliderValue, setSliderValue] = useState(null); // Null until slider is moved
  const width = Dimensions.get("window").width * 0.8;
  const radius = width / 2;

  const moods = [
    "Very Unpleasant",
    "Slightly Unpleasant",
    "Neutral",
    "Slightly Pleasant",
    "Very Pleasant",
  ];

  const gradientColors = [
    "#ffc9bc", // Very Unpleasant (Red)
    "#ffddbc", // Slightly Unpleasant
    "#FCFFBF", // Neutral
    "#dbffbc", // Slightly Pleasant
    "#bceaff", // Very Pleasant
  ];

  const getMood = (value) => {
    if (value <= 20) return moods[0];
    if (value <= 40) return moods[1];
    if (value <= 60) return moods[2];
    if (value <= 80) return moods[3];
    return moods[4];
  };

  const calculateColor = (value) => {
    if (value === null) return gradientColors[0]; // Default to red if no slider interaction

    const index = Math.floor(value / 20);
    const nextIndex = Math.min(index + 1, gradientColors.length - 1);
    const ratio = (value % 20) / 20;

    const interpolate = (start, end, ratio) =>
      Math.round(start + (end - start) * ratio);

    const hexToRgb = (hex) => {
      const bigint = parseInt(hex.slice(1), 16);
      return [bigint >> 16, (bigint >> 8) & 255, bigint & 255];
    };

    const rgbToHex = (r, g, b) =>
      `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

    const startColor = hexToRgb(gradientColors[index]);
    const endColor = hexToRgb(gradientColors[nextIndex]);

    const interpolatedColor = startColor.map((start, i) =>
      interpolate(start, endColor[i], ratio)
    );

    return rgbToHex(...interpolatedColor);
  };

  const currentColor = calculateColor(sliderValue);

  return (
    <ExpoLinearGradient
      colors={["#021638", "#AAC1E7"]}
      style={styles.container}
    >
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.titleText}>How are you feeling today?</Text>
      </View>

      {/* Semi-circle Meter */}
      <View style={styles.moodColor}>
        <Svg height={radius} width={width} viewBox={`0 0 ${width} ${radius}`}>
          <Path
            d={`M0,${radius} A${radius},${radius} 0 0,1 ${width},${radius}`}
            fill={currentColor} // Start with red, update as slider moves
          />
        </Svg>
      </View>

      {/* Slider */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={90}
        step={1}
        value={sliderValue || 0}
        onValueChange={(value) => setSliderValue(value)}
        minimumTrackTintColor="#142330"
        maximumTrackTintColor="#A0C4E7"
        thumbTintColor="#000"
      />

      {/* Mood Display */}
      <Text style={styles.moodText}>
        Mood: <Text style={styles.moodValue}>{getMood(sliderValue || 0)}</Text>
      </Text>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate("GuidedJournalEntrySpecificEmotion", {
          selectedEmotionCategory: getMood(sliderValue || 0),
        })}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ExpoLinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    minHeight: Dimensions.get("window").height,
    alignItems: "center",
  },
  navBar: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#021638",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 80,
  },
  backButton: {
    padding: 5,
    marginTop: 5,
    paddingLeft: 10,
  },
  moodColor: {
    marginTop: 70,
  },
  moodText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#021638",
  },
  moodValue: {
    color: "#021638",
  },
  slider: {
    width: "80%",
    marginTop: 20,
  },
  nextButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
    backgroundColor: "#AAC1E7",
    borderRadius: 5,
  },
  nextButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default GuidedJournalEntryOverallMood;
