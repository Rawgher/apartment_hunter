import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
// import ApartmentModal from "./ApartmentModal";
import ApartmentPhoto from "./ApartmentPhoto";
import { apartments } from "./data.js";

export default class Apartments extends Component {
  state = {
    popupIsOpen: false
  };

  openApartment = apartment => {
    this.setState({
      popupIsOpen: true,
      apartment
    });
  };

  closeApartment = () => {
    this.setState({
      popupIsOpen: false
    });
  };

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

        {/* <ApartmentModal
          apartment={this.state.apartment}
          isOpen={this.state.popupIsOpen}
          onClose={this.closeApartment}
        /> */}
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
