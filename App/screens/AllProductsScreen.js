import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import colors from "../config/colors";
import MenuWoo from "../components/MenuWoo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import CategoryButton from "../components/CategoryButton";

const windowWidth = Dimensions.get("window").width;

function AllProductsScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
    >
      <Formik
        initialValues={{ keywords: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.inputBox}
                name="keywords"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search Here"
                onChangeText={handleChange("keywords")}
              ></TextInput>
              <TouchableOpacity
                style={styles.squareButton}
                onPress={handleSubmit}
              >
                <MaterialCommunityIcons
                  name="magnify"
                  size={35}
                  color={colors.white}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
      <MenuWoo
        categoryVisible={true}
        category={95}
        navigation={navigation}
      ></MenuWoo>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    alignItems: "center",
  },
  flatlist: {
    width: windowWidth,
    paddingLeft: 10,
  },
  searchContainer: {
    width: windowWidth,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    marginLeft: 2,
  },
  inputBox: {
    flex: 1,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 7,
    height: 45,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  squareButton: {
    backgroundColor: colors.secondary,
    height: 35,
    width: 35,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.darkGray,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default AllProductsScreen;
