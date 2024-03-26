/* eslint-disable prettier/prettier */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {LoginScreen} from "../../components/screens/LoginScreen";
import { SignupScreen } from "../../components/screens/SignupScreen";
import { CustomerDBButton} from "../../components/screens/CustomerDBButton";
import {LoginScreenForDb} from "../../components/screens/LoginScreenForDb";
import { DeliveryPersonRegister } from "../../components/screens/DeliveryPersonRegistration";
const Stack = createStackNavigator();

export const LoginRegisterNavigator = () => (
    <Stack.Navigator  screenOptions={{
        header: () => null,
      }}>
    <Stack.Screen name="c_db" component={CustomerDBButton} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="login_for_db" component={LoginScreenForDb} />
    <Stack.Screen name="dbRegister" component={DeliveryPersonRegister} />
  </Stack.Navigator>
);
