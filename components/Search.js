import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, FlatList } from "react-native";
import FilmItem from "./FilmItem";
import { getMovieFromApiWithSearchText } from "../API/TMDBApi";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      searchText: "",
    };
  }
  async _loadFilm() {
   await getMovieFromApiWithSearchText(this.state.searchText).then((data) => {
      this.setState({ films: data });
    });
  }

  _searchTextInputChange(text) {
    this.setState({ searchText: text });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          placeholder={"Titre du film"}
          onChangeText={(text) => {
            this._searchTextInputChange(text);
          }}
        />
        <Button
          title="Rechercher"
          onPress={() => {
            this._loadFilm();
          }}
        />
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => {
            item.id.toString();
          }}
          renderItem={({ item }) => <FilmItem item={item} key={item.id} />}
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
    marginTop: 20,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
});
