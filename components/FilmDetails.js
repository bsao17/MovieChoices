import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getMovieDetailsFromApi } from "../API/TMDBApiDetail";

export default function FilmDetails(){
    // getMovieDetailsFromApi(idFilm).then(data=>console.log(data));

    return(
        <View style={styles.container}>
            <Text>Here the details of each film </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    }
})