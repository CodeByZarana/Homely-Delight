/* eslint-disable prettier/prettier */
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  StatusBar,
  Image,TouchableOpacity,
} from "react-native";
export const ThankYouDb = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Image style={styles.saveMoney} source={require("../../../assets/thankyoudb.png")} />
      <Text style={styles.txt}> Thank you </Text>
      <TouchableOpacity onPress={()=>navigation.navigate("dbdashboard")}>
        <Text>Go to home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 100,
    padding: 8,
    //alignItems:'center',
  },
  saveMoney: {
    height: 250,
    width: 250,
    resizeMode: "stretch",
    alignSelf: "center",
  },
  txt: {
    marginTop:10,
    fontSize: 35,
    fontWeight: "bold",
    color: "#1DC47A",
    alignSelf: "center",
  },
});
