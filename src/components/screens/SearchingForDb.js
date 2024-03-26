/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from "react";
import { Text, View, StyleSheet,Image,ActivityIndicator,TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as firebase from "firebase";
export const SearchingForDb = ({navigation,route})=>{
  const uid=route.params.uid;
  const [result,setResult]=useState("");
  const [navigated,setNavigated]=useState(false);
  const finduser=async()=>{
    setResult(await AsyncStorage.getItem("user_email"));
  };
  var key=result.replace("@gmail.com","");
  

  useEffect(() => {
    finduser();

    const interval = setInterval(() => {
      var ref = firebase.database().ref("/delivery/" + key + "/"+uid);
      ref.once("value", function(snapshot){
        if (snapshot.val().deliveryStatus === "started" && navigated===false){
            setNavigated(true);
            navigation.navigate("confirmdb",{dbid:snapshot.val().deliveryPersonId});
        }
    });
    }, 2000);

    return () => clearInterval(interval);
   },);
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require("../../../assets/DeliveryBoy.jpg")} />
    <Text style={styles.paragraph}> Searching For {"\n"} Delivery Boy...</Text>
           <TouchableOpacity style={styles.btn}>
             <AntDesign name="closecircle" size={54} color="rgb(255,75,76)" />
            </TouchableOpacity>

            <ActivityIndicator size="large" animating={true} color="#1DC47A"/>
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
    alignItems:"center",
  },
  paragraph: {
    fontFamily:"QuickSand",
    margin: 24,
    fontSize: 18,
    textAlign: "center",

  },
  logo:{
    height:250,
    width:250,
    borderRadius:150,
  },
   btn: {
    position:"absolute",
    bottom:50,

  },
});
