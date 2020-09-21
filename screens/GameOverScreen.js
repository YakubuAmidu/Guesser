import React from "react";
import { View, Text } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is over</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
});

export default GameOverScreen;
