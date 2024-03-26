/* eslint-disable prettier/prettier */
import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashBoardNavigator } from "../../components/screens/DashBoardNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import {NewDeliveryNavigator} from "../../components/screens/NewDeliveryNavigator";
import {Subscription} from "../../components/screens/Subscription";
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
function HomeScreen() {
  return <DashBoardNavigator/>;
}
function NewDelivery() {
  return <NewDeliveryNavigator/>;
}
function SettingsScreen() {
  return <Text style={{marginTop:50,alignContent:"center"}}>Hello from SettingsScreen</Text>;
}
function SubscriptionFun (){
  return <Subscription/>;
}
export const AppNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "#1DC47A",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Delivery" component={NewDelivery} />
        <Tab.Screen name="Subscription" component={SubscriptionFun} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
};
