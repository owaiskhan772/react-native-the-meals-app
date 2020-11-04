import React from "react";

import MealList from "../../meal-list";

import { CATEGORIES, MEALS } from "../../../../data/dummy-data";

const CategoryMealScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const allCategoryMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={allCategoryMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
