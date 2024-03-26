/* eslint-disable prettier/prettier */
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";
import { DeliveryPersonNavigator } from "./DeliveryPersonNavigator";
import { LoginScreenForDb } from "./LoginScreenForDb";
export const CheckDbApproval = (props) => {
  var email = props.email;
  var password1 = props.password1;
  if (props.data.email === email){
    if (props.data.password === password1){
  if (props.data.approvalStatus === "true"){
    AsyncStorage.setItem("db_email",JSON.stringify(props.data.email));
    return <DeliveryPersonNavigator/>;
  }
  else {
    if (props.data.approvalStatus === "false"){
    Alert.alert(
      "Hello Delivery Person",
      "Please Login after your status is approved!!",
    );
    return <LoginScreenForDb/>;
  }
}
  }
  else {
    if (props.data.approvalStatus === "false"){
    Alert.alert(
      "Hello Delivery Person",
      "Please Enter Correct Details!!",
    );
    return <LoginScreenForDb/>;
  }
}
}
  return 0;
    };
