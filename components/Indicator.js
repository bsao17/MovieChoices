import React from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";

export default function Indicator() {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>Loading, Please Wait ...</Text>
          <ActivityIndicator size={'large'} color={'#0000FF'} />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0000FF'
    }
});
