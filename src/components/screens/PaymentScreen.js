/* eslint-disable prettier/prettier */
import React  from "react";
import { StatusBar,Text, View, StyleSheet, TouchableOpacity,SafeAreaView } from "react-native";
import {PaymentButton} from "../cards/PaymentButton";
import { Ionicons } from "@expo/vector-icons";
  export const PaymentScreen = () => {

  return (
   <>

  <SafeAreaView style={styles.myv}>
     <View style = {styles.backbutton}>
     <TouchableOpacity>
        <Ionicons name="chevron-back-circle" size={35} color="#FEDA00" />
     </TouchableOpacity>
  </View>
    <Text style={styles.text1}> Payment Method </Text>
    <View>
       <Text/>
      <PaymentButton/>
   </View>
   <View style = {styles.container}>
     <TouchableOpacity style={styles.nextbutton}>
        <Text style = {styles.buttonNextText} >
           Next
        </Text>
     </TouchableOpacity>
  </View>
  </SafeAreaView>
  </>
  );
};

const styles = StyleSheet.create({
  myv:{
    flex:1,
    marginTop:StatusBar.currentHeight,
    backgroundColor:"white",
  },
  container: {
   alignItems: "center",

},
text1:{
   color:"black",
   marginTop:10,
   fontWeight:"bold",
   fontSize:30,
   paddingStart:10,
},
buttonNextText:{color:"white",
   fontWeight: "bold"},
nextbutton: {
   marginTop:250,
   borderRadius:10,
   height: 60,
   width:160,
   padding:19,
   paddingStart:60,

   fontSize:17,
   backgroundColor: "#1DC47A",
    
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
}
},
backbutton:{
   paddingStart:15,
   marginTop:5,
   height: 60,
   width:60,
   padding:11,
},

});


