/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
    ImageBackground,Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator,Colors } from "react-native-paper";
import { AuthenticationContext } from "../../service/authentication/authentication.context";
import styled from "styled-components/native";
const Section = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left:10px;
`;

export const SignupScreen = ({navigation}) => {
    const [name,setName]=useState("");
    const [phone_no,setPhoneNumber]=useState("");
    const [add,setAddress]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedpassword, setRepeatedPassword] = useState("");
    const {onRegister, error,isLoading} = useContext(AuthenticationContext);
  return (
    <ImageBackground  style={styles.container}>
       <Image style={styles.glogo} source={require("../../../assets/foodhome1.jpg")} />
       <Text style={styles.txt2}> Welcome Customer!</Text> 
      <Text style={styles.txt}> HOMELY DELIGHT</Text>

      <TextInput style={styles.tinput}
      placeholder="Name"
      placeholderTextColor="#b2beb5"
      value = {name}
      textContentType = "text"
      keyboardType = "text"
      autoCapitalize = "none"
      onChangeText = {(u)=> setName(u)}

      />

      
      

      <TextInput style={styles.tinput}
      placeholder="E-mail"
      placeholderTextColor="#b2beb5"
      value = {email}
      textContentType = "emailAddress"
      keyboardType = "email-address"
      autoCapitalize = "none"
      onChangeText = {(u)=> setEmail(u)}

      />

      

      <TextInput style={styles.tinput}
      placeholder="Mobile Number"
      placeholderTextColor="#b2beb5"
      value = {phone_no}
      keyboardType = "numeric"
      autoCapitalize = "none"
      onChangeText = {(u)=> setPhoneNumber(u)}

      />

      


      <TextInput style={styles.tinput}
      placeholder="Password"
      secureTextEntry={true}
      placeholderTextColor="#b2beb5"
      value= {password}
      textContentType = "password"
      autoCapitalize ="none"
      onChangeText ={(p)=>setPassword(p)}
      />
    

        <TextInput style={styles.tinput}
        placeholder="Repeat Password"
        secureTextEntry={true}
        placeholderTextColor="#b2beb5"
        value= {repeatedpassword}
        textContentType = "password"
        autoCapitalize ="none"
        onChangeText ={(p)=>setRepeatedPassword(p)}
        />
        

        <TextInput style={styles.tinput}
        placeholder="Address"
        
        placeholderTextColor="#b2beb5"
        value= {add}
        textContentType = "text"
        autoCapitalize ="none"
        onChangeText ={(p)=>setAddress(p)}
        />

      <Text style={{ lineHeight: 20 }}> </Text>
      {error && (
            <Text style={{color:"red"}}>{error}</Text>
        )}
        {!isLoading ? (
            <>
        
      <TouchableOpacity style={styles.btn} onPress ={() => onRegister(name,phone_no,add,email, password,repeatedpassword)}>
          <Section>
      <Ionicons name="mail" size={24} color="black" />
        <Text style={styles.txt1}> Register </Text>
        </Section>
      </TouchableOpacity>
      </>
      ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )
        }
      <Text style={{ lineHeight: 10 }}> </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{color:"#1DC47A",textDecorationLine: "underline"}}>already have an account?</Text>
      </TouchableOpacity>

       <Text style={{ lineHeight: 30 }}> </Text>
        

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  glogo: {
    height: 50,
    width: 50,
    marginTop:50,
    alignSelf: "center",
  },
  txt: {
    marginTop:17,
    fontSize: 35,
    fontWeight: "bold",
    color: "#1DC47A",
    alignSelf: "center",
  },
  txt2: {
    marginTop:1,
    fontSize: 20,
    color: "black",
    alignSelf: "center",
  },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
      marginTop: StatusBar.currentHeight,
      backgroundColor:"white",
    },
    tinput: {
      backgroundColor: "white",
      height: 47,
      width: 300,
      marginTop:10,
      padding: 10,
      borderRadius: 10,
      fontSize: 18,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,

      elevation: 2,

    },
    txt1: {
      fontSize: 20,
      fontWeight: "500",
      alignSelf: "center",
    },

    btn: {
      borderColor: "rgb(254,218,0)",
      borderRadius: 10,
      height: 50,
      width: 160,
      backgroundColor: "#1DC47A",
      padding: 10,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
    },
  });
