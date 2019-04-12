import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import ApartmentPhoto from "./ApartmentPhoto";
import { apartments } from "./data.js";

export default class Apartments extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {apartments.map((apartment, index) => (
            <ApartmentPhoto
              apartment={apartment}
              onOpen={this.openApartment}
              key={index}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
