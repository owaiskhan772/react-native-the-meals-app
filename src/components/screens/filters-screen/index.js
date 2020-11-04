import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Switch } from "react-native-paper";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../custom-header-button";

import { Colors } from "../../../libs/constants";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === "android" ? Colors.primary : ""}
        value={props.filterValue}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  // pass data (variables, functions) between component and navigation options (Header)
  // here `saveFilters` function is passed using navigation.setParams()
  // and called in navigation by using navigation.getParams('save')
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Availale Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        filterValue={isGlutenFree}
        onChange={(newVal) => setIsGlutenFree(newVal)}
      />
      <FilterSwitch
        label="Lactose-free"
        filterValue={isLactoseFree}
        onChange={(newVal) => setIsLactoseFree(newVal)}
      />
      <FilterSwitch
        label="Vegan"
        filterValue={isVegan}
        onChange={(newVal) => setIsVegan(newVal)}
      />
      <FilterSwitch
        label="Vegetarian"
        filterValue={isVegetarian}
        onChange={(newVal) => setIsVegetarian(newVal)}
      />
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navigationData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    margin: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
