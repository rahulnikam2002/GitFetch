import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import userImg from "../assets/user-profile.gif";

const Features = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Get Started</Text>
      <Text style={{ fontSize: 12, marginBottom: 15, color: "#7a848c" }}>
        Explore some popular features
      </Text>
      <View
        style={{
          backgroundColor: "#e9ebed",
          padding: 15,
          borderRadius: 10,
          flexDirection: "row",
          position: "relative",
        }}
      >
        <View style={{ width: "65%" }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 5 }}>
            GitHub Users
          </Text>
          <Text style={{ fontSize: 12, color: "#7a848c" }}>
            Search users present on GitHub and check their metadata like
            Followers, repositories count
          </Text>
          <TouchableOpacity
            style={{
              marginVertical: 10,
              borderColor: "#347d39",
              width: "100%",
              borderRadius: 50,
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#347d39",
                paddingVertical: 7,
                paddingHorizontal: 10,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ position: "absolute", top: -20, right: 0 }}>
          <Image
            source={userImg}
            style={{ width: 150, height: 150, resizeMode: "contain" }}
          />
        </View>
      </View>



      <View
        style={{
          backgroundColor: "#e9ebed",
          padding: 15,
          borderRadius: 10,
          flexDirection: "row",
          position: "relative",
          marginVertical: 10
        }}
      >
        <View style={{ position: "absolute", width: "25%", top: -20, left: -10 }}>
          <Image
            source={userImg}
            style={{ width: 150, height: 150, resizeMode: "contain" }}
          />
        </View>
        <View style={{ width: "65%", alignContent: "flex-start", marginLeft: "35%" }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 5, }}>
            GitHub Repositories
          </Text>
          <Text style={{ fontSize: 12, color: "#7a848c" }}>
            Search specific user's GitHub repositories and check their complete metadata.
          </Text>
          <TouchableOpacity
            style={{
              marginVertical: 10,
              borderColor: "#347d39",
              width: "100%",
              borderRadius: 50,
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#347d39",
                paddingVertical: 7,
                paddingHorizontal: 10,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>

        
        
      </View>

      <View
        style={{
          backgroundColor: "#e9ebed",
          padding: 15,
          borderRadius: 10,
          flexDirection: "row",
          position: "relative",
        }}
      >
        <View style={{ width: "65%" }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 5 }}>
            Search for Code
          </Text>
          <Text style={{ fontSize: 12, color: "#7a848c" }}>
            Search for any type of code that may help you to solve your project.
          </Text>
          <TouchableOpacity
            style={{
              marginVertical: 10,
              borderColor: "#347d39",
              width: "100%",
              borderRadius: 50,
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#347d39",
                paddingVertical: 7,
                paddingHorizontal: 10,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ position: "absolute", top: -20, right: 0 }}>
          <Image
            source={userImg}
            style={{ width: 150, height: 150, resizeMode: "contain" }}
          />
        </View>
      </View>
    </View>
  );
};

export default Features;
