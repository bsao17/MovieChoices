import React from "react";
import {ScrollView, View, Text, StyleSheet, Image } from "react-native";

export default function FilmItem({ title, vote, poster, films_details, out_date }) {
  return (
    <View style={styles.container}>
      {/* Poster */}
      <View style={styles.poster}>
        <Image
          source={{ uri: poster }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      {/* data */}
      <View style={styles.data}>
        <View style={styles.header}>
          <Text style={styles.title_next}>{title}</Text>
          <Text style={styles.vote}> {vote}</Text>
        </View>
        <View>
            <Text style={styles.films_details} numberOfLines={6} >{films_details}</Text>
        </View>
        <View>
            <Text style={styles.out_date} >Date de sortie: {out_date} </Text>
        </View>
      </View>
    </View>
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
  },
  films_details: {
    textAlign: "justify",
    padding: 10,
  },
  header: {
     flex: 1,
     flexDirection: 'row', 
     justifyContent: 'space-around'
  },
  out_date: {
      textAlign: 'right',
      fontSize: 16,
      margin: 5
  },
  title_next: {
    fontSize: 16,
    margin: 5,
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
    margin: 5
  },
});
