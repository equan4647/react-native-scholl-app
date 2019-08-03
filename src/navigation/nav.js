import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

// FILES 
import Home from "../screens/Home";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
});

export default createAppContainer(AppNavigator);