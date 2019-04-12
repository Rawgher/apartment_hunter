import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Apartments from "./src/Apartments.js";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Apartments
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);
