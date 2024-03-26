/* eslint-disable prettier/prettier */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {LoginScreenForDb} from "../../components/screens/LoginScreen";
import { CustomerDBButton} from "../../components/screens/CustomerDBButton";
import { DeliveryPersonRegister } from "../../components/screens/DeliveryPersonRegistration";
const Stack = createStackNavigator();

export const LoginRegisterNavigatorForDb = () => (
    <Stack.Navigator  screenOptions={{
        header: () => null,
      }}>
    <Stack.Screen name="c_db" component={CustomerDBButton} />
    <Stack.Screen name="LoginForDb" component={LoginScreenForDb} />
    <Stack.Screen name="dbRegister" component={DeliveryPersonRegister} />
  </Stack.Navigator>
);
