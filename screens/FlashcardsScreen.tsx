import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import Colors from "../themes/colors";
import { Flashcard } from "../models/flashcard";
import FlashcardSwiper from "../components/FlashcardSwiper";
import FlashcardsService from "../services/flashcardsService";

export default function FlashcardsScreen() {
  //states
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  //initialize flashcards from local database
  useEffect(() => {
    FlashcardsService.loadFlashcards().then((flashcards) => {
      setFlashcards(flashcards);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlashcardSwiper flashcards={flashcards} />
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
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
