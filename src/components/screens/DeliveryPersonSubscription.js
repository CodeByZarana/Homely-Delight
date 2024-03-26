/* eslint-disable prettier/prettier */
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as firebase from "firebase";
import { setStatusBarBackgroundColor } from "expo-status-bar";

function setStatus(ref2) {
  ref2.update({deliveryStatus : "started"});
  console.log(firebase.auth().currentUser);
  ref2.update({deliveryPersonId : firebase.auth().currentUser.email});
}
export const DeliveryPersonSubscription = () => {
    const  database = firebase.database();
    var ref = database.ref("subscription");
    var rows = [];
    ref.on("value", function gotData(edata) {
        var d = edata.val();
        var keys = Object.keys(d);
        console.log(keys);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var ref1 = database.ref("subscription/" + k);
            ref1.on("value", (snapshot) => {
                var e = snapshot.val();
                var sk = Object.keys(e);
                for (var j = 0; j < sk.length; j++) {
                    var ik = sk[j];
                    var ref2 = database.ref("subscription/" + k + "/" + ik);
                    ref2.on("value", (snapshot1) => {
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
                              <Text style={{ fontSize: 20, color: "white" }}>
                                Pick from{" "}
                                <FontAwesome name="location-arrow" size={20} color="white" /> {"\n"}
                              </Text>
                              {snapshot1.val().pickUpAddress}
                            </Text>
                            <Text style={styles.cardtext}>
                              <Text style={{ fontSize: 20, color: "white" }}>
                                Drop to <FontAwesome name="map-pin" size={20} color="white" />{" "}
                                {"\n"}{" "}
                              </Text>
                              {snapshot1.val().dropOffAddress}
                            </Text>
                            <View style={styles.mystyle}>
                              <TouchableOpacity style={styles.btn} onPress = {
                                ()=>{
                                  setStatus(ref2);
                                  Linking.openURL("https://www.google.com/maps/search/?api=1&query=28.6139,77.2090");
                            }}>
                                <Text
                                  style={{ color: "white", fontSize: 18 }}
                                >
                                  {" "}
                                  Start{" "}
                                  <MaterialCommunityIcons
                                    name="bike-fast"
                                    size={19}
                                    color="white"
                                  />{" "}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </Card>
                          <Text/>
                          </>
                        );
                    });
                }
            });
        }
    },
    null);

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.glogo} source={require("../../../assets/foodhome1.jpg")}  />
      <Text style={styles.paragraph2}>Select a Subscription to Deliver{"\n"}</Text>
      {rows}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 8,
    margin: 20,
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
    padding: 10,
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
