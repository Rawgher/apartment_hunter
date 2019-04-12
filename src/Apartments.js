import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { apartments } from "./data.js";

export default class Apartments extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {apartments.map((apartment, index) => (
            <Text>{apartment.name}</Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}
