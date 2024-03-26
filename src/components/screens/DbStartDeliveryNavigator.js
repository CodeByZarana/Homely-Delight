/* eslint-disable prettier/prettier */
import React from "react";
import { DbDashBoard } from "./DbDashBoard";
import { createStackNavigator } from "@react-navigation/stack";
import { DbThreeButton } from "./DbThreeButton";
import { ThankYouDb} from "./ThankYouDb";
const Stack = createStackNavigator();

export const DbStartDeliveryNavigator = () => {
  return (
      <Stack.Navigator  screenOptions={{
           header: () => null,
         }}>
        <Stack.Screen name="dbdashboard" component={DbDashBoard} />
        <Stack.Screen name="three" component={DbThreeButton} />
        <Stack.Screen name="thankYouDb" component={ThankYouDb} />
      </Stack.Navigator>
  );
};
