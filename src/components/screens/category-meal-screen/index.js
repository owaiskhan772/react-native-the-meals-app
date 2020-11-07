import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealList from "../../meal-list";
import DefaultText from "../../default-text";

import { CATEGORIES } from "../../../../data/dummy-data";

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const allCategoryMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (!allCategoryMeals || allCategoryMeals.length === 0) {
    return (
      <View style={styles.noMeals}>
        <DefaultText>No meals found! Please, check your filters.</DefaultText>
      </View>
    );
  }

  return <MealList listData={allCategoryMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  noMeals: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
