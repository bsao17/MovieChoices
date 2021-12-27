import * as React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from "../components/Search";
import FilmDetails from "../components/FilmDetails"

const stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{title: "Recherche de films", headerTintColor: "grey"}} name="Search" component={Search} />
        <stack.Screen name="Details" component={FilmDetails} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
