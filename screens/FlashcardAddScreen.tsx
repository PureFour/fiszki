import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "../components/Button";
import { Flashcard } from "../models/flashcard";
import FlashcardsService from "../services/flashcardsService";
import Colors from "../themes/colors";
import uuid from "react-native-uuid";

const FlashcardAddScreen = () => {
  const [newFlashcardText, setNewFlashcardText] = useState<string>("");
  const [newFlashcardSecondText, setNewFlashcardSecondText] =
    useState<string>("");

  const addNewCard = () => {
    if (!newFlashcardText || !newFlashcardSecondText) {
      return;
    }

    const newFlashcard: Flashcard = {
      id: uuid.v4().toString(),
      frontText: newFlashcardText,
      backText: newFlashcardSecondText,
    };

    FlashcardsService.saveNewFlashcard(newFlashcard)
      .catch((err) => {
        console.log("error: " + err);
      })
      .finally(() => {
        setNewFlashcardText("");
        setNewFlashcardSecondText("");
      });
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
