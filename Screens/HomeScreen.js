import { View, Text, Dimensions, StatusBar } from "react-native";
import React from "react";
import SearchBox from '../components/SearchBox.js'
import Features from '../components/Features.js'

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const NOTCH_HEIGHT = StatusBar.currentHeight;

const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: SCREEN_HEIGHT,
        paddingTop: NOTCH_HEIGHT+15,
        paddingHorizontal: 20,
      }}
    >
      <SearchBox />
      <Features />
    </View>
  );
};

export default HomeScreen;
