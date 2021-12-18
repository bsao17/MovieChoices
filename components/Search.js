import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, FlatList } from "react-native";
import FilmItem from "./FilmItem";
import { getMovieFromApiWithSearchText } from "../API/TMDBApi";
import Indicator from "./Indicator";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.searchText = "";
    this.state = {
      films: [],
      isLoading: false,
    };
  }
  _loadFilm() {
    if (this.searchText.length > 0) {
      getMovieFromApiWithSearchText(this.searchText).then((data) => {
        this.setState({ films: data, isLoading: false });
      });
    }
  }

  _searchTextInputChange(text) {
    this.searchText = text;
  }

  _handleKeyPress(event, K) {
    if (event.key === K) {
      this._loadFilm();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          autoFocus={true}
          onSubmitEditing={() => {
            this.setState({ isLoading: true });
            this._handleKeyPress("enter");
          }}
          placeholder={"Titre du film"}
          onChangeText={(text) => {
            this._searchTextInputChange(text);
          }}
        />
        <Button
          title="Rechercher"
          onPress={() => {
            this._loadFilm();
            this.setState({ isLoading: true });
          }}
        />
        {this.state.isLoading ? (
          <Indicator />
        ) : (
          <FlatList
            data={this.state.films}
            renderItem={({ item }) => <FilmItem key={item.id} item={item} />}
          />
        )}
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
