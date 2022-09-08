import { View, Text, Image } from "react-native";
import React from "react";
import GitFetchLogo from "../assets/GitFetch.png";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

const SearchBox = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "white",

          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          borderWidth: 1,
          borderColor: "#e9ebed",
          borderRadius: 50,
          padding: 10,
        }}
      >
        <Icon type="ionicon" name="search-outline" color={"#000"} />
        <Text style={{ fontSize: 16, marginLeft: 10, color: "#9ca4ab", fontWeight: "600" }}>
          Search...
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;
