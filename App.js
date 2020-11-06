import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";

import rootReducer from "./src/store/reducers";
import fetchFonts from "./src/libs/fetch-fonts";

import MealsNavigator from "./src/navigation/meals-navigator";

// behind the scenes, make the screens transition more efficient
enableScreens();

const store = createStore(rootReducer);

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

export default App;
