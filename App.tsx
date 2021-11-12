import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FlashcardsScreen from "./screens/FlashcardsScreen";
import { NavigationContainer } from "@react-navigation/native";
import FlashcardsListScreen from "./screens/FlashcardsListScreen";

const DrawerNavigation = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation.Navigator initialRouteName="Home">
        <DrawerNavigation.Screen name="Home" component={FlashcardsScreen} />
        <DrawerNavigation.Screen name="Fiszki" component={FlashcardsListScreen} />
      </DrawerNavigation.Navigator>
    </NavigationContainer>
  );
}