/* eslint-disable prettier/prettier */
import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity,Linking } from "react-native";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// You can import from local files

export const DbThreeButton = ({navigation,route}) => {
    const pickuplat=route.params.pickUpLatitude.toString();
    const pickuplong=route.params.pickupLongitude.toString();
    const droplat=route.params.dropOffLatitude.toString();
    const droplong=route.params.dropOffLongitude.toString();
    const url="https://www.google.com/maps/search/?api=1&query=";
    const url1=url.concat(pickuplat);
    const url2=url1.concat(",");
    const finalpickup=url2.concat(pickuplong);
    const durl1=url.concat(droplat);
    const durl2=durl1.concat(",");
    const finaldropoff=durl2.concat(droplong);
    const ref=route.params.reference;
    console.log(route.params.deliveryStatus);
    const update1 = () => {
      ref.update({deliveryStatus : "completed"});
    };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={()=>Linking.openURL(finalpickup)}>
        <FontAwesome5 name="directions" size={30} color="white" />
        <Text style={styles.txt1}> Route to Pickup Location </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={()=>Linking.openURL(finaldropoff)}>
        <FontAwesome5 name="directions" size={30} color="white" />
        <Text style={styles.txt1}> Route to Drop Location </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btncomplete} onPress={()=>{update1(ref); navigation.navigate("thankYouDb")}}>
        <FontAwesome5 name="clipboard-check" size={30} color="black" />
        <Text style={styles.txt1complete}> Delivery Complete </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnclose}>
        <AntDesign name="closecircle" size={54} color="rgb(255,75,76)" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    alignItems: "center",
  },
  btn: {
    margin: 20,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "black",
    elevation: 1,
    alignItems: "center",
  },
  txt1: {
    alignSelf: "center",
    fontSize: 22,
    color: "white",
  },
  btncomplete: {
    margin: 20,
    borderColor: "#50C878",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#50C878",
    elevation: 1,
    alignItems: "center",
  },
  txt1complete: {
    alignSelf: "center",
    fontSize: 22,
  },
  btnclose: {
    position: "absolute",
    bottom: 50,
  },
});
