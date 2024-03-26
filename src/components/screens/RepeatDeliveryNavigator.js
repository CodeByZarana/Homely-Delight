/* eslint-disable prettier/prettier */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {DashBoard} from "../screens/DashBoard";
import {ConfirmOrder} from "../../components/screens/ConfirmOrder";
import { Searching } from "../../components/screens/Searching";
import { PastDelivery } from "./PastDelivery";
const Stack = createStackNavigator();

export const RepeatDeliveryNavigator = () => {
  return (
      <Stack.Navigator  screenOptions={{
           header: () => null,
         }}>
        <Stack.Screen name="co" component={ConfirmOrder} />
        <Stack.Screen name="Searching" component={ Searching } />
      </Stack.Navigator>
  );
};
