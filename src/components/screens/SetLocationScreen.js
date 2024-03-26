/* eslint-disable prettier/prettier */
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useFonts } from "expo-font";
import styled from "styled-components/native";
const Section = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left:80px;
`;

export const SetLocationScreen = ({navigation}) => {
  const [name,setName]=useState("");
  const [pickup,setPickUp] = useState("");
  const [dropOff,setDropOff] = useState("");
  const [loaded] = useFonts({
    Montserrat: require("../../../assets/Montserrat.ttf"),
    QuickSand: require("../../../assets/Quicksand.ttf"),
  });

  if (!loaded) {
    return null;
  }
 
  return (
    <View style={styles.container}>
      <Text style={{lineHeight:10}}/>
      <Text style={styles.paragraph}>Apply for new Delivery</Text>
      <View>
        <Text style={styles.paragraph1}>Name of the Receiver</Text>
        <View style={styles.locContainer}>
        <MaterialCommunityIcons name="human-greeting" size={25} color="#4bb543" />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            value={name}
            onChangeText = {(u)=> setName(u)}
            placeholder="Name of the Receiver"
          />
        </View></View>
      <View style={{marginTop:20}}>
        <Text style={styles.paragraph2}>Pickup Address</Text>
        <View style={styles.locContainer}>
          <Ionicons name="location-sharp" size={25} color="#4bb543" />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            value={pickup}
            onChangeText = {(u)=> setPickUp(u)}
            placeholder="address"
          />
        </View>
      </View>
            <View style={{marginTop:0}}>
        <Text style={styles.paragraph1}>Dropoff Address</Text>
        <View style={styles.locContainer}>
          <Ionicons name="location-sharp" size={25} color="#4bb543" />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            value={dropOff}
            onChangeText = {(u)=> setDropOff(u)}
            placeholder="address"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("mapscreen",{pickupLoc:pickup,dropOffLoc:dropOff,receiver:name})}>
        <LinearGradient
          colors={["#53E88B", "#15BE77"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonContainer}>
          <Text style={{ color: "white",fontFamily:"QuickSand",fontSize:18 }}>Confirm</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
   map:{
      fontFamily: "QuickSand",
      lineHeight: 18,
      marginTop:27,
      fontSize: 18,
      alignSelf: "center",
      paddingBottom:25,
      marginLeft:10,
    },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    margin: 1,
  },
  paragraph: {
    fontSize: 24,
    fontFamily: "QuickSand",
    paddingBottom:25,
    marginTop:10,
    marginLeft:15,
  },
  paragraph1: {
    fontSize: 20,
    marginTop:5,
    fontFamily: "QuickSand",
    lineHeight: 50,
    marginLeft:15,
  },
  paragraph2: {
    fontSize: 20,
    marginTop:10,
    fontFamily: "QuickSand",
    lineHeight: 50,
    marginLeft:15,
  },
  locContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 10,
    marginLeft:10,
    marginRight:7,

  },
  inputStyle: {
    flex: 1,
    fontFamily: "QuickSand",
    marginLeft:7,
    marginRight:7,
  },
  buttonContainer: {
    height: 50,
    padding: 8,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,

    //elevation:10
  },
  btn:{
    marginTop:50,
    alignItems:"center",
  },
});
