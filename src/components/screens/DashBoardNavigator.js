/* eslint-disable prettier/prettier */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {DashBoard} from "../screens/DashBoard";
import {ConfirmOrder} from "../../components/screens/ConfirmOrder";
import { SearchingForDb } from "../../components/screens/SearchingForDb";
import {SetLocationScreen} from "../screens/SetLocationScreen";
import {MapScreen} from "./Mapscreen";
import {MapScreen2} from "./Mapscreen2";
import { ConfirmDb } from "./ConfirmDb";
import { SubmitRatings } from "./SubmitRatings";
const Stack = createStackNavigator();

export const DashBoardNavigator = () => {
  return (
      <Stack.Navigator  screenOptions={{
           header: () => null,
         }}>
        <Stack.Screen name="DashBoard" component={DashBoard}/>
        <Stack.Screen name="SetLocation" component={SetLocationScreen}/>
        <Stack.Screen name="mapscreen" component={MapScreen} />
        <Stack.Screen name="mapscreen2" component={MapScreen2} />
        <Stack.Screen name="co" component={ConfirmOrder} />
        <Stack.Screen name="Searching" component={ SearchingForDb } />
        <Stack.Screen name="confirmdb" component={ ConfirmDb } />
        <Stack.Screen name="rating" component={ SubmitRatings } />
      </Stack.Navigator>
  );
};
