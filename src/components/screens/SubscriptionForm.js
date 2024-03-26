/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState, Platform, useContext} from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  StatusBar,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import { Button } from "react-native-paper";
import * as Yup from "yup";
import * as firebase from "firebase";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../service/authentication/authentication.context";
export const SubscriptionForm = ({navigation}) => {
    const {insertInSubscription} = useContext(AuthenticationContext);
    const [result,setResult] = useState("");
  const [count, setCount] = useState(0);
  const finduser = async()=>{
    setResult(await AsyncStorage.getItem("user_email"));
  };
  useEffect(()=>{
  finduser();
  },);
  var date1 = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var date=date1 + "/" + month + "/" + year;

    return (
        <View style={styles.container}>
      <Image
      style={styles.saveMoney}
      source={require("../../../assets/subscription.jpeg")}
      />
        <Text style={styles.title}>Purchase Subscription</Text>
        <Formik
          initialValues={{ pickup:"", dropoff:"", mealtime:"", numberofDays:"" }}
          validationSchema={Yup.object({
            pickup: Yup.string()
              .required("pick up location required"),
            dropoff: Yup.string()
              .required("drop location required"),
           mealtime: Yup.string()
           .required("please enter meal time"),
           numberofDays: Yup.string()
           .required("please enter number"),
          })}
          onSubmit={(values, formikActions) => {
            setTimeout(() => {
                Alert.alert(JSON.stringify(values));
                // Important: Make sure to setSubmitting to false so our loading indicator
                // goes away.
                var bill;
                if (values.numberofDays === 15){
                    bill = 600;
                }
                else {
                    if (values.numberofDays === 30){
                        bill = 1150;
                    }
                    else {
                        bill = 2000;
                    }
                }
                insertInSubscription(date,result,values.pickup,values.dropoff,values.mealtime,values.numberofDays,bill);
                formikActions.resetForm();
                formikActions.setSubmitting(false);
              }, 500);

          }}>
          {props => (
            <View >
                <Text style={{marginTop:-10}}/>
             <TextInput
                onChangeText={props.handleChange("pickup")}
                onBlur={props.handleBlur("pickup")}
                value={props.values.pickup}
                autoFocus
                placeholder="your address"
                style={styles.input}
              />
              {props.touched.pickup && props.errors.pickup ? (
                <Text style={styles.error}>{props.errors.pickup}</Text>
              ) : null}
               <Text style={{marginTop:-10}}/>
             <TextInput
                onChangeText={props.handleChange("dropoff")}
                onBlur={props.handleBlur("dropoff")}
                value={props.values.dropoff}
                autoFocus
                placeholder="drop address"
                style={styles.input}
              />
              {props.touched.dropoff && props.errors.dropoff ? (
                <Text style={styles.error}>{props.errors.dropoff}</Text>
              ) : null}
               <Text style={{marginTop:-10}}/>
              <TextInput
                onChangeText={props.handleChange("mealtime")}
                onBlur={props.handleBlur("mealtime")}
                value={props.values.mealtime}
                autoFocus
                placeholder="Meal time"
                style={styles.input}
              />
              {props.touched.mealtime && props.errors.mealtime ? (
                <Text style={{...styles.error,...styles.error1}}>{props.errors.mealtime}</Text>
              ) : null}
               <Text style={{marginTop:-10}}/>
              <TextInput
                onChangeText={props.handleChange("numberofDays")}
                onBlur={props.handleBlur("numberofDays")}
                value={props.values.numberofDays}
                autoFocus
                placeholder="Number of days"
                style={styles.input}
              />
              {props.touched.numberofDays && props.errors.numberofDays ? (
                <Text style={styles.error}>{props.errors.numberofDays}</Text>
              ) : null}
                 <Text style={{marginTop:-10}}/>
              <Button
                onPress={props.handleSubmit}
                color="rgb(254,218,0)"
                mode="contained"
                loading={props.isSubmitting}
                disabled={props.isSubmitting}
                style={{ marginTop: 16 }}>
                Submit
              </Button>
              </View>
          )}
          </Formik>
        </View>
      );
    };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:StatusBar.currentHeight + 30,
      padding: 8,
      backgroundColor: "white",
      //alignItems:'center',
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    color: "#1DC47A",
    alignSelf: "center",
    },
    error: {
      margin: 8,
      fontSize: 14,
      color:"red",
    },
    error1:{
      fontWeight:"bold",
    },
    input: {
      marginTop:5,
      height: 50,
      paddingHorizontal: 10,
      width: "100%",
      borderColor: "#ddd",
      borderWidth: 1,
      backgroundColor: "#fff",
    },
    saveMoney:{
      height:110,
      width:110,
      resizeMode:"stretch",
      alignSelf:"center",
    },
  });
