import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";

export default function FilmItem({ item, displayDetailForFilm }) {
  const{favorite} = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      key={item.id}
      onPress={() =>{
        displayDetailForFilm(item.id);
      }}
    >
      {/* Poster */}
      <View style={styles.poster}>
        <Image
          source={{
            uri: "https://image.tmdb.org/t/p/original" + item.poster_path,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      {/* data */}
      <View style={styles.data}>
        {/* Header data */}
        <View style={styles.header}>
          <Text style={styles.title_next}>{item.title}</Text>
          <Text style={styles.vote}>⭐ {item.vote_average}</Text>
        </View>
        {/* Details data */}
        <View>
          <TouchableOpacity style={{marginLeft: 20}}>{favorite ? <Text>❤️</Text> : <Text>🖤</Text>}</TouchableOpacity>
          <Text style={styles.films_details} numberOfLines={5}>
            {item.overview}
          </Text>
        </View>
        {/* Footer data with out date */}
        <View>
          <Text style={styles.out_date}>
            Date de sortie: {item.release_date}{" "}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 2,
    marginTop: 15,
    backgroundColor: "#E9E9EE",
  },
  films_details: {
    textAlign: "justify",
    padding: 10,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  out_date: {
    textAlign: "right",
    fontSize: 14,
    margin: 5,
  },
  title_next: {
    fontSize: 14,
    marginTop: 5,
    paddingHorizontal: 15,
    fontWeight: "bold",
    width: "80%",
  },
  poster: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 5,
  },
  data: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  vote: {
    fontSize: 16,
    margin: 5,
    marginRight: 20,
  },
});
