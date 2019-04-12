import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ApartmentPhoto from "./ApartmentPhoto";
import { apartments } from "./data.js";

export default class Apartments extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  scrollContent: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
