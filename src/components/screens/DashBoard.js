/* eslint-disable prettier/prettier */
import * as React  from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,Alert,
} from "react-native";
import * as firebase from "firebase";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState,useEffect} from "react";
import { PastDelivery } from "./PastDelivery";
import { Card } from "react-native-paper";
export const DashBoard = ({navigation}) => {
  const [result,setResult] = useState("");
  const [count, setCount] = useState(0);
  const finduser = async()=>{
    setResult(await AsyncStorage.getItem("user_email"));
  };
  useEffect(()=>{
  finduser();
  },);
  /*const getItem = ()=>{
    setItem(getData());
    console.log("in dashboard"+item);
  };*/
  const [data, setData] = useState(null);
  const getData = () => {
    /*var database = firebase.database();
    database.ref("/admin/"). on("value" ,(snapshot) =>{
      setData(snapshot.val());
      });*/
      setCount(prevCount => prevCount + 1);
      var key = result.replace("@gmail.com","");
      var ref = firebase.database().ref("/delivery/" + key + "/");
      ref.once("value", function(snapshot){
        snapshot.forEach(function(childSnapshot) {
          key = childSnapshot.key;
          setData( childSnapshot.val());
          console.log("key:" + key);
          console.log(data);
      });
    });

  };

  if ((count % 2) === 0){
    
    if (data){
    return <PastDelivery data={data}/>;
    }
    else {
      if (count !== 0){
      Alert.alert(
        "Dear Customer",
        "Please apply for a new order!!",
      );
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.glogo} source={require("../../../assets/foodhome1.jpg")} />
      <Text style={styles.txt}>Dear Customer, Welcome to Homely Delight {
        <MaterialCommunityIcons name="party-popper" size={24} color="#1DC47A" />
      } </Text>
      <Text style={styles.paragraph2}>We deliver your home food to you!{"\n"}</Text>
          <Card style={styles.cardstyle}>
        <Text style={styles.cardtext}>
          <Text style={{ fontSize:20 }}>Repeat past order</Text>
        </Text>
        <View style={styles.mystyle}>
        <TouchableOpacity style={styles.btn} onPress={() => getData() }>
            <Text ><FontAwesome name="repeat" size={15} color="black" /> Repeat? </Text>
          </TouchableOpacity>
        </View>
      </Card>
      <Text/>
      <Card style={styles.cardstyle}>
        <Text style={styles.cardtext}>
          <Text style={{ fontSize:20 }}>Apply for a New Order</Text>
        </Text>
        <View style={styles.mystyle}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SetLocation") }>
            <Text>  New Order </Text>
          </TouchableOpacity>
        </View>
      </Card>

    </View>
  );
};

const styles = StyleSheet.create({
  cardstyle: {
    //backgroundColor:'#FEF6ED',
    backgroundColor: "purple",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    elevation: 2,
    marginRight:10,
    marginLeft:10,
  },
  cardtext: {
    //color:"#DA6317",
    color: "white",
    padding: 8,
    textAlign: "center",
    lineHeight: 22,
  },
  txt:{
    marginTop:1,
    fontSize: 25,
    fontWeight: "bold",
    color: "#1DC47A",
    alignSelf: "center",
    textAlign: "center",
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 8,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  paragraph2: {
    fontSize: 19,
    textAlign: "center",
    lineHeight: 30,
  },
  btn: {
    backgroundColor: "rgb(254,218,0)",
    height: 50,
    padding:15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  mystyle: {
    flexDirection: "row",
    justifyContent: "center",

},
  glogo: {
    height: 50,
    width: 50,
    marginTop:30,
    alignSelf: "center",
  },
});
