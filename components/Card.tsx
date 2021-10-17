import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Flashcard } from "../models/flashcard";
import Colors from "../themes/colors";

export default function Card({ frontText, backText }: Flashcard) {
  const [text, setText] = useState<string>(frontText);

  useEffect(() => {
    setText(frontText);
  }, ["", frontText]); // do wymuszania odświeżania po zmianie danych w komponencie wyżej!

  const onClickCard = () => {
    setText(text === frontText ? backText : frontText);
  };

  return (
    <TouchableOpacity style={styles.cardBody} onPress={onClickCard}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: "50%",
    backgroundColor: Colors.CARD_FRONT_COLOR,
    borderRadius: 10,
  },
  text: {
    fontSize: 50,
    width: "90%",
    height: "90%",
    textAlign: "center",
  },
});
