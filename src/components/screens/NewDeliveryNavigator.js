/* eslint-disable prettier/prettier */
import React from "react";
import {SetLocationScreen} from "../../components/screens/SetLocationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import {ConfirmOrder} from "../../components/screens/ConfirmOrder";
import { SearchingForDb } from "../../components/screens/SearchingForDb";
import { ConfirmDb } from "../../components/screens/ConfirmDb";
import {MapScreen} from "./Mapscreen";
import {MapScreen2} from "./Mapscreen2";
import {SubmitRatings} from "./SubmitRatings";
import { DashBoard } from "./DashBoard";
const Stack = createStackNavigator();

export const NewDeliveryNavigator = () => {
  return (
      <Stack.Navigator  screenOptions={{
           header: () => null,
         }}>
        <Stack.Screen
          name="Set Location"
          component={SetLocationScreen}
        />
        <Stack.Screen name="mapscreen" component={MapScreen} />
        <Stack.Screen name="mapscreen2" component={MapScreen2} />
        <Stack.Screen name="co" component={ConfirmOrder} />
        <Stack.Screen name="Searching" component={ SearchingForDb } />
        <Stack.Screen name="confirmdb" component={ ConfirmDb } />
        <Stack.Screen name="rating" component={ SubmitRatings } />
      </Stack.Navigator>
  );
};
