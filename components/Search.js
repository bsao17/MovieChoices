import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, FlatList } from "react-native";
import FilmItem from "./FilmItem";
import { getMovieFromApiWithSearchText } from "../API/TMDBApi";
import Indicator from "./Indicator";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.page = 0;
    this.total_pages = 0;
    this.searchText = "";
    this.state = {
      films: [],
      isLoading: false,
    };
  }
  _loadFilm() {
    if (this.searchText.length > 0) {
      getMovieFromApiWithSearchText(this.searchText, this.page + 1).then((data) => {
        this.page = data.page;
        this.total_pages = data.total_pages;
        console.log({ total_pages: this.total_pages, page_number: this.page });
        this.setState({films: [...this.state.films, ...data.results], isLoading: false});
      });
    }
  }
  _searchFilm() {
    this.page = 0;
    this.total_pages = 0;
    this.setState({ isLoading: true, films: [] });
    this._loadFilm();
  }

  _searchTextInputChange(text) {
    this.searchText = text;
  }

  _handleKeyPress(event, K) {
    if (event.key === K) {
      this._searchFilm();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          autoFocus={true}
          onSubmitEditing={() => {
            this.setState({ isLoading: true, films: [] });
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
            this._searchFilm();
          }}
        />
        {this.state.isLoading ? (
          <Indicator />
        ) : (
          <FlatList
            data={this.state.films}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (this.page < this.total_pages) {
                this._loadFilm();
              }
            }}
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
