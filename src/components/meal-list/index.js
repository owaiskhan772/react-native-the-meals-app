import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealGridTile from "../meal-grid-tile";

const MealList = (props) => {
  const renderMeal = (itemData) => {
    return (
      <MealGridTile
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetailNavigator", {
            mealId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, id) => item.id}
        data={props.listData}
        renderItem={renderMeal}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
