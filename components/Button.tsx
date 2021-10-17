import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type ButtonProperties = {
  name: string;
  color: string;
  onClick: () => any;
};

export default function Button({ name, color, onClick }: ButtonProperties) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ backgroundColor: color }} onPress={onClick}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    marginVertical: 8,
    marginHorizontal: 8
  },
});
