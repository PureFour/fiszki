import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Flashcard } from "../models/flashcard";
import FlashcardsService from "../services/flashcardsService";
import Colors from "../themes/colors";
import FlashcardAddScreen from "./FlashcardAddScreen";

const screenSizes = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
};

const FlashcardsListScreen = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    FlashcardsService.loadFlashcards().then((flashcards) => {
      setFlashcards(flashcards);
    });
  }, [flashcards]);

  const deleteItem = (id: string) => {
    FlashcardsService.deleteFlashcard(id);
  };

  const renderListItem = (flashcard: Flashcard) => {
    console.log(flashcard.frontText);

    return (
      <View style={styles.listItem} key={flashcard.id}>
        <Text>{flashcard.frontText}</Text>
        <TouchableOpacity onPress={() => deleteItem(flashcard.id)}>
          <Text style={styles.deleteButton}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.list}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {flashcards.map((flashcard) => {
          renderListItem(flashcard);
        })}
      </ScrollView>
      <View style={styles.addFlashcardSection}>
        <FlashcardAddScreen />
      </View>
    </View>
  );
};

export default FlashcardsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    width: screenSizes.width,
    height: screenSizes.height,
    alignItems: "center",
  },
  list: {
    position: "absolute",
    height: "60%",
    width: "90%",
  },
  listItem: {
    backgroundColor: Colors.ButtonColors.RED,
    padding: 20,
    marginVertical: 8,
  },
  addFlashcardSection: {
    top: "60%",
    height: "40%",
    width: 600,
  },
  deleteButton: {
    fontSize: 30,
    textAlign: "center",
    alignSelf: "flex-end",
  },
});
