import * as React from "react";
import Navigation from "./navigation/Navigation";
import { Provider } from "react-redux";
import moviesReducer from "./store/reducer/moviesReducer";
import {createStore} from "redux";

const store = createStore(moviesReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
