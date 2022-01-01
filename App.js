import * as React from "react";
import Navigation from "./navigation/Navigation";
import { Provider } from "react-redux";
import {createStore} from "redux";
import toggleFavoritesReducer from "./store/reducer/moviesReducer";

const store = createStore(toggleFavoritesReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
