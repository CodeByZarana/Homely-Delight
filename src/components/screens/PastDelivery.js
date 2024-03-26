/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from "react-native";
import Constants from "expo-constants";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {ConfirmOrderRepeatDelivery } from "./ConfirmOrderRepeatDelivery";
export const PastDelivery = (props) => {
  const [count, setCount] = useState(0);
  const increamentCounter = () => {
      setCount(prevCount => prevCount + 1);
  };
  if (count === 1){
    return <ConfirmOrderRepeatDelivery data={props.data}/>;
  }
    return (
        <View style={styles.container}>
            <Image style={styles.glogo} source={require("../../../assets/foodhome1.jpg")} />
      <Text style={styles.paragraph2}>Select From Your Past Order {"\n"}</Text>
          <Card style={styles.cardstyle}>
            <TouchableOpacity>
          <Ionicons name="close" size={24} color="white" style={{marginLeft:"90%"}} />
          </TouchableOpacity>
        <Text style={styles.cardtext}>
          <Text style={{ fontSize:25 }}>{props.data.nameOfReceiver} {"\n"}</Text>
          {props.data.dropOffAddress}
        </Text>
        <View style={styles.mystyle}>
          <TouchableOpacity style={styles.btn} onPress={() => increamentCounter()}>
            <Text ><FontAwesome name="repeat" size={15} color="black" /> Repeat </Text>
          </TouchableOpacity>
        </View>
      </Card>
        </View>
      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    padding: 8,
  },
  cardstyle: {
    //backgroundColor:'#FEF6ED',
    backgroundColor: "purple",
    borderRadius: 15,
    padding: 10,
    marginTop:20,
    alignItems: "center",
    elevation: 2,
  },
  cardtext: {
    //color:"#DA6317",
    color: "white",
    padding: 8,
    textAlign: "center",
    lineHeight: 22,
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
  paragraph2: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 30,
  },
  glogo: {
    height: 50,
    width: 50,
    marginTop:30,
    alignSelf: "center",
  },
  });
