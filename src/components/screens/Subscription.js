/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Linking,
  Image, 
  ScrollView,
} from "react-native";
import {onValue, ref, getDatabase} from "firebase/database";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// You can import from local files
import { useFonts } from "expo-font";

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SubscriptionForm } from "./SubscriptionForm";

export const Subscription = () => {
   const [data, setData] = useState(null);
   const [result,setResult] = useState("");
  const finduser = async()=>{
    setResult(await AsyncStorage.getItem("user_email"));
  };
  useEffect(()=>{
  finduser();
  },);
    const  database = firebase.database();
    var key = result.replace("@gmail.com","");
    var ref = database.ref("subscription/" + key);
    var rows = [];
    ref.on("value", function gotData(edata) {
        var d = edata.val();
        console.log(d);
        if (d === null){
        var keys = Object.keys(d);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var ref1 = database.ref("subscription/"+key+"/"+k);
            ref1.on("value", (snapshot) => {
                
                rows.push(
                    <>
                    <Card style={styles.cardstyle}>
                    <TouchableOpacity>
                      <Ionicons
                        name="close"
                        size={24}
                        color="white"
                        style={{ marginLeft: "90%" }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.cardtext}>
                      {snapshot.val().deliveryDate}
                    </Text>
                    <Text style={styles.cardtext}>
                      <Text style={{ fontSize: 20, color: "white" }}>
                        Pick from{" "}
                        <FontAwesome name="location-arrow" size={20} color="white" /> {"\n"}
                      </Text>
                      {snapshot.val().pickUpAddress}
                    </Text>
                    <Text style={styles.cardtext}>
                      <Text style={{ fontSize: 20, color: "white" }}>
                        Drop to <FontAwesome name="map-pin" size={20} color="white" />{" "}
                        {"\n"}{" "}
                      </Text>
                      {snapshot.val().dropOffAddress}
                    </Text>
                    <Text style={styles.cardtext}>
                      <Text style={{ fontSize: 20, color: "white" }}>
                        Status{" "}
                        <FontAwesome name="location-arrow" size={20} color="white" /> {"\n"}
                      </Text>
                      {snapshot.val().deliveryStatus}
                    </Text>
                  </Card>
                  <Text/>
                  </>
                );
            }
            );
        }
    }
    else {
        return <SubscriptionForm/>;
    }
    },
    null);

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.glogo} source={require("../../../assets/foodhome1.jpg")} />
      <Text style={styles.paragraph2}>Your Subscription Details{"\n"}</Text>
      {rows}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 0,
  },
  paragraph2: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 30,
  },
  cardstyle: {
    backgroundColor: "#222233",
    //backgroundColor: 'purple',
    borderRadius: 15,
    padding: 15,
    marginLeft:10,
    marginRight:10,
    alignItems: "center",
    elevation: 2,
  },
  cardtext: {
    color: "#ff4b4b",
    //color: 'rgb(254,218,0)',
    padding: 8,
    textAlign: "center",
    lineHeight: 22,
  },
  cardtext1: {
    //color: "#ff4b4b",
    color: "rgb(254,218,0)",
    fontSize:20,
    fontWeight:"bold",
    textAlign: "center",
    lineHeight: 22,
  },
  btn: {
    backgroundColor: "#50C878",
    //backgroundColor: 'rgb(254,218,0)',
    height: 50,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    //elevation:10
  },
  mystyle: {
    flexDirection: "row",
    justifyContent: "center",
  },
  glogo: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },
});
