import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../components/screens/categories-screen";
import CategoryMealScreen from "../components/screens/category-meal-screen";
import MealDetailScreen from "../components/screens/meal-detail-screen";
import FavoritesScreen from "../components/screens/favorites-screen";
import FiltersScreen from "../components/screens/filters-screen";

import { Colors } from "../libs/constants";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
  },
  headerTitleStyle: {
    fontFamily: "open-sans",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const MealsNavigator = createStackNavigator(
  {
    CategoriesNavigator: CategoriesScreen,
    CategoryMealNavigator: {
      screen: CategoryMealScreen,
    },
    MealDetailNavigator: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetailNavigator: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreensConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        ),
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondary,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreensConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreensConfig, {
        tabBarOptions: {
          activeTintColor: Colors.secondary,
          labelStyle: {
            fontFamily: "open-sans",
          },
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    FiltersNav: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: "Meals" },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.secondary,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
