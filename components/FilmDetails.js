import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FilmDetails(){
    return(
        <View style={styles.container}>
            <Text>Here the details of each film </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    }
})