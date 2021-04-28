import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import TopBar from "../components/TopBar";
import Menu from "../components/Menu";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import CategoryButton from "../components/CategoryButton";
import CartButton from "../components/CartButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const categories = [
  { id: 1, title: "All Products", color: "primary" },
  { id: 2, title: "Fridge Sweets", color: "secondary" },
  { id: 3, title: "Dry Sweets", color: "secondary" },
  { id: 4, title: "Snacks", color: "secondary" },
  { id: 5, title: "Gift Boxes", color: "secondary" },
  { id: 6, title: "Platters", color: "secondary" },
];

function AllProductsScreen(props) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
    >
      <CartButton style={styles.cartButton}></CartButton>
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
      <View style={{ height: 50 }}>
        <FlatList
          style={styles.flatlist}
          data={categories}
          keyExtractor={(category) => category.id.toString()}
          renderItem={({ item }) => (
            <CategoryButton title={item.title} color={item.color} />
          )}
          horizontal={true}
        ></FlatList>
      </View>

      <Menu></Menu>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    alignItems: "center",
  },
  cartButton: {
    position: "absolute",
    padding: 3,
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
