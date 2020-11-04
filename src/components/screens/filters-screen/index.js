import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../custom-header-button";

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Filters Screen</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
