/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from "react";
import { Text, View, StyleSheet,Button,Alert,TouchableOpacity,Linking,ScrollView} from "react-native";
import Constants from "expo-constants";
import * as firebase from "firebase";
// You can import from local files

import { MaterialCommunityIcons } from "@expo/vector-icons";

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const DbDashBoard = ({navigation}) => {
  const [result,setResult] = useState("");
  const [data,setdata] = useState({});
  const [rowsdata,setrowdata] = useState([]);
  const database = firebase.database();
  const finduser = async()=>{
    setResult(await AsyncStorage.getItem("db_email"));
  };
  useEffect(()=>{
  finduser();
  },);
  let getdata = async()=>{

    const ref = database.ref("delivery");
    let snapdata = await ref.once("value");
    return snapdata;
};
var key = result.replace("@gmail.com","");
console.log(key);
console.log(result);
const setStatus=(ref2,res)=> {
  
  ref2.update({deliveryStatus : "started"});
    console.log("inside fun");
    console.log("ref2:",ref2);
    console.log("status:",res);
    ref2.update({deliveryPersonId : res});

  
}

  useEffect(()=>{
    var deldata;

    getdata().then((snapdata)=>{
        deldata = snapdata.val();
        var dlkeys = Object.keys(deldata);
        for (let i = 0; i < dlkeys.length; ++i)
        {

          var ref1 = database.ref("delivery/" + dlkeys[i]);
          var insidekeys;
        ref1.on("value",(snapshot)=>{
            insidekeys = Object.keys(snapshot.val());
           
            for (let j = 0; j < insidekeys.length; ++j)
            {
                 var ref2 = database.ref("delivery/" + dlkeys[i] + "/" + insidekeys[j]);
                 ref2.on("value",(snapshot1)=>{
                        var pickLat = snapshot1.val().pickUpLatitude.toString();
                        var deliverystatus = snapshot1.val().deliveryStatus.toString();
                        var pickLong = snapshot1.val().pickupLongitude.toString();
                        const url = "https://www.google.com/maps/search/?api=1&query=";
                        const url1 = url.concat(pickLat);
                        const url2 = url1.concat(",");
                        const finalUrl = url2.concat(pickLong);
                        
                        if (deliverystatus === "pending"){
                          setrowdata(oldarray=>[...oldarray,
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
                            <Text style={styles.cardtext1}>
                              {snapshot1.val().nameOfReceiver}
                            </Text>
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
                                  
                                  setStatus(ref2,result);
                                  navigation.navigate("three",{...snapshot1.val(),reference:ref2})
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
                          </>]
                        );}
                 });
            }

        });
        }
    });
    //setrowdata(rows);

  },[]);
  return (

    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.paragraph2}>Select an Order to Deliver{"\n"}</Text>
      {rowsdata}
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
