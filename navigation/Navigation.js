import * as React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from "../components/Search";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const searchStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <searchStack.Navigator>
        <searchStack.Screen name="Search" component={Search} />
      </searchStack.Navigator>
    </NavigationContainer>
  );
}
