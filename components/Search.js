import React, { Component } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import films from "../helpers/filmsData";
import FilmItem from "./FilmItem";

export default class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textinput} placeholder="Titre du Film" />
        <Button title="Rechercher" onPress={() => {}} />
        <FlatList
          data={films}
          renderItem={({ item }) => (
            <FilmItem
              title={item.title}
              vote={item.vote_average}
              poster={item.poster_path}
              films_details={item.overview}
              out_date={item.release_date}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
});
