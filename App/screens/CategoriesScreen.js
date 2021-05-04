import React from "react";
import {
  Image,
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function CategoriesScreen({navigation}) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/green_background.jpg")}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.postRow}>
            <TouchableOpacity
              style={styles.postView}
              onPress={() => navigation.navigate("Order Now")}
            >
              <Image
                style={styles.post}
                source={require("../assets/Categories/dry.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.postView}
              onPress={() => navigation.navigate("Order Now")}
            >
              <Image
                style={styles.post}
                source={require("../assets/Categories/fridge.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.logoRow}>
            <Image
              style={styles.logo}
              source={require("../assets/icon.png")}
            ></Image>
          </View>
          <View style={styles.postRow}>
            <TouchableOpacity
              style={styles.postView}
              onPress={() => navigation.navigate("Order Now")}
            >
              <Image
                style={styles.post}
                source={require("../assets/Categories/platers.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.postView}
              onPress={() => navigation.navigate("Order Now")}
            >
              <Image
                style={styles.post}
                source={require("../assets/Categories/snacks.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  container: {
    paddingVertical: 30,
  },
  postRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth - 50,
    marginHorizontal: 25,
    alignItems: "center",
    alignContent: "center",
  },
  postView: {
    shadowColor: colors.darkGray,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: 3, height: 3 },
  },
  post: {
    width: windowWidth / 2.5,
    height: windowWidth / 1.7,
    borderRadius: 8,
  },
  logoRow: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 118,
    height: 128,
  },
  title: {
    color: colors.white,
    fontSize: 25,
    paddingTop: Constants.statusBarHeight,
  },
});
export default CategoriesScreen;
