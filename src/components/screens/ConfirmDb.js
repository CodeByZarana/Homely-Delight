/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import * as firebase from "firebase";
export const ConfirmDb = ({route,navigation})=> {
  const [name,setName]=useState("");
  const [rating,setRating]=useState("");
  useEffect(() => {
      var ref = firebase.database().ref("/deliveryPerson/" + route.params.dbid);
      ref.once("value", function(snapshot){
        setName(snapshot.val().fullName);
        setRating(snapshot.val().averageRating);
    });
    
   },);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Yayy.. We Found It!!</Text>
      <Image style={styles.logo} source={require("../../../assets/beardMaleAvatar.png")} />
      <Text style={styles.paragraph}>
        {" "}
        {name} {"\n"} Will Deliver Your Meal Today...
      </Text>
      <Text style={styles.paragraph}>Ratings</Text>

      <Rating
        imageSize={35}
        readonly
        type="custom"
        startingValue={rating}
        ratingColor="blue"
        tintColor="rgb(148,243,247)"
        style={{ borderRadius: 10 }}
      />
      <Text style={styles.paragraph}>
        Will be at Your Doorsteps in {"\n"}{" "}
        <Text style={{ fontSize: 40 }}>15:23</Text>{" "}
      </Text>
      <Text style={styles.paragraph} />
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("rating",{...route.params})}>
        <AntDesign name="closecircle" size={54} color="rgb(255,75,76)" />
      </TouchableOpacity>
    </View>
  );
}

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
    fontFamily: "QuickSand",
    margin: 20,
    fontSize: 18,
    textAlign: "center",
  },
  logo: {
    height: 210,
    width: 210,
    borderRadius: 150,
  },
  btn: {
    position: "absolute",
    bottom: 10,
  },
});
