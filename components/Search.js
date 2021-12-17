import React, {Component} from "react";
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    FlatList,
} from "react-native";
import films from "../helpers/filmsData";
import FilmItem from "./FilmItem";
import {getMovieFromApiWithSearchText} from "../API/TMDBApi";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }
    async _loadFilm() {
       await getMovieFromApiWithSearchText("matrix").then(data => {
            this.setState({films: data})
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textinput} placeholder={"Titre du film"}/>
                <Button title="Rechercher" onPress={() => {
                    this._loadFilm()
                }}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) =>{item.title}}
                    renderItem={({item}) => (
                        <FilmItem
                            key={item.id}
                            item={item}/>
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
        marginTop: 20,
        height: 50,
        borderColor: "#000000",
        borderWidth: 1,
        paddingLeft: 5,
    },
});
