import AsyncStorage from '@react-native-async-storage/async-storage'

export const STORAGE_KEYS = {
    FLASHCARDS: "flashcards",
};

export const Storage = {
    saveData: async (data: any, storageKey: string) => {
        const jsonValue = JSON.stringify(data);
        try {
            await AsyncStorage.setItem(storageKey, jsonValue);
            console.log(
                "Saved [key: " + storageKey + "data: " + jsonValue + "]"
            );
        } catch (e) {
            console.log(
                "Error saving [key: " + storageKey + "data: " + jsonValue + "]"
            );
        }
    },
    getData: async (storageKey: string) => {
        try {
            const jsonValue = await AsyncStorage.getItem(storageKey);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log("Error loading [key: " + storageKey + "]");
        }
    },
};