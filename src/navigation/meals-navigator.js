import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../components/screens/categories-screen";
import CategoryMealScreen from "../components/screens/category-meal-screen";
import MealDetailScreen from "../components/screens/meal-detail-screen";

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

export default createAppContainer(MealsNavigator);
