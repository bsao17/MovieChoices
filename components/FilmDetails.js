import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getMovieDetailsFromApi } from "../API/TMDBApiDetail";

export default function FilmDetails({ route, navigation }) {
    const[dataFilm, setDataFilm] = useState("");
  const { idFilm } = route.params;
  getMovieDetailsFromApi(idFilm).then((data) => {
    return setDataFilm(data);
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{idFilm}</Text>
      <Text style={styles.title}>{dataFilm.overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    padding: 10,
  },
  image: {
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  }
});
