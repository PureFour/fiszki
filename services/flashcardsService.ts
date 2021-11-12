import { Flashcard } from "../models/flashcard";
import { STORAGE_KEYS, Storage } from "./store";

const mockedFlashcards: Flashcard[] = [
  { id: "1", frontText: "Apple", backText: "Jabłko" },
  { id: "2", frontText: "Ball", backText: "Piłka" },
];

const FlashcardsService = {
  loadFlashcards: async (): Promise<Flashcard[]> => {
    const flashcards: Flashcard[] = await Storage.getData(
      STORAGE_KEYS.FLASHCARDS.valueOf()
    );
    return flashcards !== null ? flashcards : mockedFlashcards;
  },
  saveNewFlashcard: async (flashcard: Flashcard) => {
    const currentFlashcards: Flashcard[] = await Storage.getData(
      STORAGE_KEYS.FLASHCARDS.valueOf()
    );

    const updatedFlashcards = [
      ...(currentFlashcards == null ? [] : currentFlashcards),
      flashcard,
    ];
    Storage.saveData(updatedFlashcards, STORAGE_KEYS.FLASHCARDS.valueOf());
  },
  deleteFlashcard: async (id: string) => {
    const currentFlashcards: Flashcard[] = await Storage.getData(
      STORAGE_KEYS.FLASHCARDS.valueOf()
    );
    const updatedFlashcards: Flashcard[] = currentFlashcards.filter(
      (flashcard) => flashcard.id !== id
    );
    Storage.saveData(updatedFlashcards, STORAGE_KEYS.FLASHCARDS.valueOf());
  },
};

export default FlashcardsService;
