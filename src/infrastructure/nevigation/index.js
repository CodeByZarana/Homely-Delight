/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { LoginScreenForDb } from "../../components/screens/LoginScreenForDb";
import { AuthenticationContext } from "../../service/authentication/authentication.context";

export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationContext);
    const {customerOrDeliveryPerson} = useContext(AuthenticationContext);
    console.log(customerOrDeliveryPerson);
  return (
    <NavigationContainer>
      {isAuthenticated ?
      <>
      {customerOrDeliveryPerson ? <AppNavigator /> : <LoginScreenForDb/>}
      </> :
      <AccountNavigator />
      }
    </NavigationContainer>
  );
};
