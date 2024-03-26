/* eslint-disable prettier/prettier */
import * as React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const Section = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left:10px;
`;

export const SetLocationCard = ({navigation}) => {
  return (
    <Card elevation={3} style={styles.card}>
      <Section>
        <Text style={styles.icon}>
          <MaterialIcons name="location-pin" size={30} color="#DA6317" />
          </Text>
        <Text style={styles.title}>Your Location</Text>
      </Section>
      <View style = {styles.container}>
     <TouchableOpacity style = {styles.setlocation} onPress={() => navigation.navigate("mapscreen")}>
        <Text style = {styles.buttonNextText} >
           Set Location
        </Text>
     </TouchableOpacity>
  </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white",marginLeft:15,marginRight:15,paddingBottom:10,marginTop:10 ,
  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.44,
  shadowRadius: 10.32,
  
  elevation: 16,},
  cover: {  backgroundColor: "white" },
  title: { padding:16,fontSize:20,color:"black"},
  container: {
    alignItems: "center",
 },
 buttonNextText:{color:"black",
   fontWeight: "bold",fontSize:17},
 setlocation: {
  backgroundColor: "#f5f5f5",
  marginTop:20,
  borderRadius:10,
  height: 60,
  width:300,
  padding:19,
  paddingStart:100,
  

},
icon:{
  alignContent:"center",
  backgroundColor:"#FEDA00",
  width:30,
  height:30,
  borderRadius:20,
  margin:7,
  flexDirection:"row",
},
});
