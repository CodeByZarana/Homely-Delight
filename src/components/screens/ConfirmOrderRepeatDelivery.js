/* eslint-disable prettier/prettier */
import * as React from "react";
import { Text, View, StyleSheet, Image,Button,TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { useState,useEffect,useContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../service/authentication/authentication.context";
import { Searching } from "./Searching";
export const ConfirmOrderRepeatDelivery = (props)=>{
  const [result,setResult]=useState("");
  const [count, setCount] = useState(0);
const finduser=async()=>{
  setResult(await AsyncStorage.getItem("user_email"));
};
useEffect(()=>{
finduser();
},);
const increamentCounter = () => {
    setCount(prevCount => prevCount + 1);
};
if (count === 1){
  return <Searching />;
}
//const result=AsyncStorage.getItem("user_email");
var date1 = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var date=date1 + "/" + month + "/" + year;
  return (
    <View style={styles.container}>

            <TouchableOpacity style={styles.btn}>
              <Ionicons name="chevron-back" size={20} color="rgb(219,99,23)" />
            </TouchableOpacity>
              <Text style={{ fontSize: 20, fontFamily: "QuickSand",alignSelf:"center" }}>
           Confirm Order
          </Text>

      <Card style={styles.datacard}>
        <View style={styles.datacardview}>
          <Image style={styles.logo} source={require("../../../assets/maps.png")} />
          <Text style={{ fontSize: 20, fontFamily: "QuickSand" }}>
            Deliver to
          </Text>

          <Text
            style={{
              color: "black",
              fontSize: 20,
              textAlign: "center",
              fontFamily: "QuickSand",
            }}>
           {props.data.dropOffAddress} {"\n"}
          </Text>
          <FontAwesome5 name="money-check-alt" size={30} color="Black" />
          <Text
            style={{ fontSize: 20, fontFamily: "QuickSand" }}>
            Payment Method
          </Text>

          <Text
            style={{ color: "black", fontSize: 20, fontFamily: "QuickSand" }}>
            Cash/Card/eWallet
          </Text>

        </View>
      </Card>
      <Card style={styles.detailcard}>
        <View style={styles.detailContainer}>
          <Text style={{ fontSize: 20, fontFamily: "QuickSand",lineHeight:30 }}>
             Delivery charges:   50 INR {"\n"}Discount:   10 % {"\n"}
            Net Amount: 45 INR{"\n"}
                         <Text
            style={{ color: "black", fontSize: 20, fontFamily: "QuickSand" }}>
            <Ionicons name="checkmark-circle" size={24} color="#4bb543" />
            Pay at Pickup {"\n"}
           </Text>
            </Text>
             <TouchableOpacity style={styles.btn2} onPress={()=>increamentCounter()} >
              <Text style={{ color: "black", fontSize: 18, fontFamily: "QuickSand" }}> Place Order </Text>
            </TouchableOpacity>


        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,

  },
  detailcard: {
    alignSelf: "center",
    position: "absolute",
    borderRadius: 15,
    bottom: 20,
    marginLeft:0,
    elevation: 6,
  },
  datacard: {
    marginTop: 7,
    width: 310,
    height:290,
    borderRadius: 15,
    alignSelf: "center",
    elevation: 6,
    textAlign: "center",
  },
  datacardview: {
    alignItems: "center",
  },
  logo: {
    resizeMode: "stretch",
    height: 80,
    marginTop:5,
    width: 70,
  },
  detailContainer: {
    height: 210,
    padding: 8,
    width: 340,
    borderRadius: 15,
    backgroundColor: "rgb(254,218,0)",
    //justifyContent: 'center',
    alignItems: "center",
    elevation: 2,

  },
   btn: {
    borderRadius: 10,
    padding:10,
    width:40,
    backgroundColor: "rgb(253,244,237)",
  },
  btn2: {
    borderRadius: 10,
    padding:10,
    width:300,
    backgroundColor: "white",
    alignItems:"center",
  },
});


