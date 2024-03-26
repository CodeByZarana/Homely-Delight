/* eslint-disable prettier/prettier */
import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest } from "./authentication.service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [dbOrCustomer,set] = useState("");
  const getData = () => {
    console.log("hello");
    var database = firebase.database();
    database.ref("/admin/"). on("value" ,(snapshot) =>{
      setData(snapshot.val());
      console.log("snapshot" + snapshot.val());
      console.log("data.id" + data.id);
      return data;
      });
  };
  const onLogin = (email, password) => {
    setIsLoading(true);
    set(true);
    console.log(dbOrCustomer);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        AsyncStorage.setItem("user_email",JSON.stringify(email));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
 /* const insertInDelivery=(result,date,pickupLoc,dropOffLoc,receiver)=>{
    var database = firebase.database();
    var key=result.replace("@gmail.com","");
    const itemRef=database.ref("/delivery").child(key);
    itemRef.push({
        customerEmailId:result,
        deliveryPersonId:"null",
        deliveryStatus:"pending",
        Deliverycharges:"50",
        deliveryDate:date,
        discount:"5",
        paymentMethod:"cash",
        timeInMinutes:"35",
        transactionId:0,
        dropOffAddress:dropOffLoc,
        dropOffLatitude:"0",
        dropOffLongitude:"0",
        pickUpAddress:pickupLoc,
        pickUpLatitude:"0",
        pickupLongitude:"0",
        nameOfReceiver:receiver,
    });
  };*/
  const insertInDelivery=(result,x,date,pickupLoc,dropOffLoc,receiver,pickupLatitude,pickupLongitude,dropLatitude,dropLongitude)=>{
    var database = firebase.database();
    var key=result.replace("@gmail.com","");
    database.ref("/delivery").child(key).child(x)
    .set({
      customerEmailId:result,
        deliveryPersonId:"null",
        deliveryStatus:"pending",
        Deliverycharges:"50",
        deliveryDate:date,
        discount:"5",
        paymentMethod:"cash",
        timeInMinutes:"35",
        transactionId:0,
        dropOffAddress:dropOffLoc,
        dropOffLatitude:dropLatitude,
        dropOffLongitude:dropLongitude,
        pickUpAddress:pickupLoc,
        pickUpLatitude:pickupLatitude,
        pickupLongitude:pickupLongitude,
        nameOfReceiver:receiver,
    });
  };
  const insertInSubscription = (date,result,pickup,dropoff,mealtime,numberofDays,bill)=>{
    var database = firebase.database();
    var max = 20000;
    var x = Math.floor(Math.random() * (max + 1));
    var key = result.replace("@gmail.com",);
    database.ref("/subscription").child(key).child(x)
    .set({
      customerEmailId:result,
        deliveryPersonId:"null",
        deliveryStatus:"pending",
        Deliverycharges:bill,
        deliveryDate:date,
        paymentMethod:"cash",
        transactionId:0,
        dropOffAddress:dropoff,
        dropOffLatitude:"0",
        dropOffLongitude:"0",
        pickUpAddress:pickup,
        pickUpLatitude:"0",
        pickupLongitude:"0",
    });
  };
  const onRegister = (name,phone_no,add,email, password,repeatedpassword) => {
    setIsLoading(true);
    set(true);
    console.log(dbOrCustomer);
    if (password !== repeatedpassword) {
      setError("Error: Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        var database = firebase.database();
    const itemRef = database.ref("/customers");
    itemRef.push({
        name:name,
        contact_no:phone_no,
        address:add,
        email:email,
      });
     AsyncStorage.setItem("user_email",JSON.stringify(email));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  const onRegisterDeliveryPerson = (email, password) => {
    set(false);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        AsyncStorage.setItem("db_email",JSON.stringify(email));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  const onLogout = () => {
    setUser(null);
    firebase.auth().signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        customerOrDeliveryPerson:dbOrCustomer,
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        insertInSubscription,
        onLogin,
        onRegister,
        onLogout,
        getData,
        insertInDelivery,
        onRegisterDeliveryPerson,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
