import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  height: 30,

  borderBottomWidth: 1,
  marginVertical: 10,
});

export default Input;
