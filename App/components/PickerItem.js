import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
import AppText from "./AppText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 15,
  },
});
export default PickerItem;
