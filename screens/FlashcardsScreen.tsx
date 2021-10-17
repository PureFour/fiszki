import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Colors from "../themes/colors";
import { Flashcard } from "../models/flashcard";
import { Storage, STORAGE_KEYS } from "../services/store";
import FlashcardSwiper from "../components/FlashcardSwiper";

const mockedFlashcards: Flashcard[] = [
  { frontText: "Apple", backText: "Jabłko" },
  { frontText: "Ball", backText: "Piłka" },
];

export default function FlashcardsScreen() {
  //states
  const [flashcards, setFlashcards] = useState<Flashcard[]>(mockedFlashcards);

  //initialize flashcards from local database
  useEffect(() => {
    loadFlashcards();
  }, [mockedFlashcards]);

  const loadFlashcards = async () => {
    const flashcards: Flashcard[] = await Storage.getData(
      STORAGE_KEYS.FLASHCARDS.valueOf()
    );
    flashcards !== null
      ? setFlashcards(flashcards)
      : setFlashcards(mockedFlashcards);
  };

  return (
    <View style={styles.container}>
      <FlashcardSwiper flashcards={flashcards} />
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
});
