import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "../components/Button";
import { Flashcard } from "../models/flashcard";
import { Storage, STORAGE_KEYS } from "../services/store";
import Colors from "../themes/colors";

const FlashcardAddScreen = () => {
  const [newFlashcardText, setNewFlashcardText] = useState<string>("");
  const [newFlashcardSecondText, setNewFlashcardSecondText] =
    useState<string>("");

  const addNewCard = () => {
    const newFlashcard: Flashcard = {
      frontText: newFlashcardText,
      backText: newFlashcardSecondText,
    };
    if (!newFlashcard.backText || !newFlashcardSecondText) {
      return;
    }
    setNewFlashcardText("");
    setNewFlashcardSecondText("");
    saveNewFlashcard(newFlashcard);
  };

  const saveNewFlashcard = async (flashcard: Flashcard) => {
    const currentFlashcards: Flashcard[] = await Storage.getData(
      STORAGE_KEYS.FLASHCARDS.valueOf()
    );

    const updatedFlashcards = [...currentFlashcards, flashcard];
    Storage.saveData(updatedFlashcards, STORAGE_KEYS.FLASHCARDS.valueOf());
    return updatedFlashcards;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Wpisz angielskie słówko"
        value={newFlashcardText}
        onChangeText={setNewFlashcardText}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Wpisz tłumaczenie"
        value={newFlashcardSecondText}
        onChangeText={setNewFlashcardSecondText}
      />
      <Button
        name="Dodaj fiszkę!"
        color={Colors.ButtonColors.PURPLE}
        onClick={addNewCard}
      ></Button>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
};

export default FlashcardAddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    paddingBottom: 30,
    justifyContent: "center",
    width: "50%",
    fontSize: 20,
  },
});
