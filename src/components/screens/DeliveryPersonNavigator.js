/* eslint-disable prettier/prettier */
import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {DbStartDeliveryNavigator } from "./DbStartDeliveryNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import { DeliveryPersonSubscription } from "./DeliveryPersonSubscription";
import { SettingsNavigator } from "./SettingsNavigator";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Delivery: "delivery-dining",
  Subscription: "food-bank",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {

  const iconName = TAB_ICON[route.name];
  return {
    header: () => null,
    tabBarIcon: ({ size, color }) => (
      <MaterialIcons name={iconName} size={size} color={color} />
    ),
  };

};
function DbDashBoardfun() {
  return <DbStartDeliveryNavigator/>;
}
function DeliveryPersonSubscriptionfun() {
  return <DeliveryPersonSubscription/>;
}
function SettingsNavigatorfun() {
  return <SettingsNavigator/>;
}

export const DeliveryPersonNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "#1DC47A",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={DbDashBoardfun} />
        <Tab.Screen name="Subscription" component={DeliveryPersonSubscriptionfun} />
        <Tab.Screen name="Settings" component={SettingsNavigatorfun} />
        
      </Tab.Navigator>
    </>
  );
};

