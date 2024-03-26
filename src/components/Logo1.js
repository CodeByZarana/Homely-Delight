/* eslint-disable prettier/prettier */
import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

export const Logo1 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/hd_logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  logo: {
    height: 250,
    width: 250,
    
  },
});
