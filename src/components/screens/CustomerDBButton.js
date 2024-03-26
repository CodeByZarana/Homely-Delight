/* eslint-disable prettier/prettier */
import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Constants from "expo-constants";

export const CustomerDBButton = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Log in / Sign up as</Text>
      <Image style={styles.glogo} source={require("../../../assets/customer.jpg")} />
      <Text style={{ lineHeight: 30 }}> </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.txt1}> Customer </Text>
      </TouchableOpacity>
      <Text style={{ lineHeight: 50 }}> </Text>

      <Image style={styles.glogo} source={require("../../../assets/delboy.jpg")} />
      <Text style={{ lineHeight: 30 }}> </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("login_for_db")}>
        <Text style={styles.txt1}> Delivery Person </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 8,
    alignItems: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "center",
    color: "black",
  },
  glogo: {
    resizeMode: "stretch",
    height: 160,
    width: 250,
    borderRadius: 10,
  },
  txt1: {
    fontSize: 16,
    alignSelf: "center",
  },
  btn: {
    borderColor: "rgb(254,218,0)",
    borderRadius: 10,
    padding: 10,
    width: 240,
   backgroundColor: "#1DC47A",
    elevation: 1,
  },
});
