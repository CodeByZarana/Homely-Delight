/* eslint-disable prettier/prettier */
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
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
export const PaymentButton = () => {
  return (
    <>
    <View style = {styles.container}>
     <TouchableOpacity style={styles.button}>
         <Section><FontAwesome name="credit-card-alt" size={24} color="black" />
        <Text style = {styles.buttonText} >
        Card
        </Text>
        </Section>
     </TouchableOpacity>
  </View>
  <View style = {styles.container}>
  <TouchableOpacity style={styles.button}>
  <Section><MaterialIcons name="delivery-dining" size={26} color="black" />
     <Text style = {styles.buttonText} >
     Cash On Delivery
     </Text>
     </Section>
  </TouchableOpacity>
</View>
</>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",

 },
 buttonText:
 {  color:"black",paddingStart:10,
   fontWeight: "bold",fontSize:18},
button: {
   backgroundColor: "#f8f8f8",
   marginTop:10,
   borderRadius:10,
   height: 80,
   width:330,
   padding:27,
   paddingStart:10,
},
});
