import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import CardStack from "react-native-card-stack-swiper";
import CardFlip from "react-native-card-flip";
import FlipCard from "react-native-card-flip";
import { Flashcard } from "../models/flashcard";

type FlashcardSwiperProperties = {
  flashcards: Flashcard[];
};

const FlashcardSwiper = ({ flashcards }: FlashcardSwiperProperties) => {
  const [flashcardsState, setFlashcards] = useState<Flashcard[]>(flashcards);

  useEffect(() => {
    setFlashcards(flashcardsState);
  }, ["", flashcards]); // do wymuszania odświeżania po zmianie danych w komponencie wyżej!

  return (
    <CardStack
      style={styles.content}
      renderNoMoreCards={() => (
        <Text style={{ fontWeight: "700", fontSize: 26, color: "gray" }}>
          Koniec fiszek, Brawo!
        </Text>
      )}
      ref={(swiper) => {
        swiper = swiper;
      }}
      onSwiped={(cardIndex) =>
        console.log(flashcards[cardIndex].frontText + " Swiped!")
      }
    >
      {flashcards.map((flashcard: Flashcard, index: number) => {
        return (
          <CardFlip
            style={styles.cardContainer}
            ref={(card: FlipCard) => (this["card" + index] = card)}
            key={index}
          >
            <TouchableOpacity
              style={[styles.card, styles.card1]}
              onPress={() => this["card" + index].flip()}
            >
              <Text style={styles.label}>{flashcard.frontText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.card, styles.card2]}
              onPress={() => this["card" + index].flip()}
            >
              <Text style={styles.label}>{flashcard.backText}</Text>
            </TouchableOpacity>
          </CardFlip>
        );
      })}
    </CardStack>
  );
};

export default FlashcardSwiper;

const styles = StyleSheet.create({
  cardContainer: {
    width: 320,
    height: 470,
  },
  content: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: "#FE474C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: "#FE474C",
  },
  card2: {
    backgroundColor: "#FEB12C",
  },
  label: {
    lineHeight: 470,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
