import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../components/screens/categories-screen";
import CategoryMealScreen from "../components/screens/category-meal-screen";
import MealDetailScreen from "../components/screens/meal-detail-screen";
import FavoritesScreen from "../components/screens/favorites-screen";

import { Colors } from "../libs/constants";

const MealsNavigator = createStackNavigator(
  {
    CategoriesNavigator: CategoriesScreen,
    CategoryMealNavigator: {
      screen: CategoryMealScreen,
    },
    MealDetailNavigator: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
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
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondary,
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
        },
      });

export default createAppContainer(MealsFavTabNavigator);
