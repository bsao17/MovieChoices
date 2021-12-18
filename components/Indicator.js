import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export default function Indicator() {
  return (
      <View style={styles.container}>
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
});
