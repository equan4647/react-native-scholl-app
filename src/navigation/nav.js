import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

// FILES 
import Home from "../screens/Home";


const DrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
  },
);


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  DrawerNavigator: {
    screen: DrawerNavigator
  }
});


export default createAppContainer(AppNavigator);