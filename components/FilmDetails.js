import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { getMovieDetailsFromApi } from "../API/TMDBApiDetail";

export default function FilmDetails({ route, navigation }) {
  const [dataFilm, setDataFilm] = useState("");
  const { idFilm } = route.params;
  getMovieDetailsFromApi(idFilm).then((data) => {
    return setDataFilm(data);
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://image.tmdb.org/t/p/original" + dataFilm.poster_path,
        }}
        style={{ width: "100%", height: 600 }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.date}>
          <Text style={styles.text}>Sortie le : {dataFilm.release_date}</Text>
          <Text style={styles.text}>⭐ {dataFilm.vote_average}</Text>
        </View>
        <Text style={styles.title}>{dataFilm.title}</Text>
        <Text style={styles.text}>{dataFilm.overview}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F5FCFF",
  },
  date: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  text: {
    fontSize: 20,
    padding: 20,
    textAlign: "justify",
  },
  image: {
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 20,
  },
});
