/* eslint-disable prettier/prettier */
import * as React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import {Logo1} from "../Logo1";
export const MainScreen = () => {
  return (
      <View style={styles.logo}><Logo1/></View>
  );
};

const styles = StyleSheet.create({
  logo:{
    marginTop:150,
  },
});
