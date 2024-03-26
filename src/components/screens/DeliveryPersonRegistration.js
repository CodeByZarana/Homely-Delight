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
import { AuthenticationContext } from "../../service/authentication/authentication.context";
export const DeliveryPersonRegister = ({navigation}) => {
    const {onRegisterDeliveryPerson} = useContext(AuthenticationContext);

    const [imageAadhar, setImageAadhar] = useState(null);
    const [aadharUrl, setAadharUrl] = useState(null);
    const [imageLicense, setImageLicense] = useState(null);
    const [licenseUrl, setLicenseUrl] = useState(null);

    const [aadharuploading, setUploading] = useState(false);
    const [licenseuploading, setUploadingLicense] = useState(false);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "ios") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImageAadhar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageAadhar(result.uri);
    }
  };

  const uploadImageAadhar = async() =>{
      const blob = await new Promise((resolve,reject)=>{
          const xhr = new XMLHttpRequest();
          xhr.onload = function(){
              resolve(xhr.response);
          };
          xhr.onerror = function(){
              reject(new TypeError("Network request failed!"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", imageAadhar ,true);
          xhr.send(null);
      });

      const ref = firebase.storage().ref().child(new Date().toISOString());
      const snapshot = ref.put(blob);

      snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED, ()=>{
        setUploading(true);
      },
      (error)=>{
          setUploading(false);
          console.log(error);
          blob.close();
          return;
      },
      ()=>{
          snapshot.snapshot.ref.getDownloadURL().then((url)=>{
            setUploading(false);
            console.log("download url :", url);
            setAadharUrl(url);
              blob.close();
              return url;
          });
      }
      );
  };

  const pickImageLicense = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageLicense(result.uri);
    }
  };

  const uploadImageLicense = async() =>{
      const blob = await new Promise((resolve,reject)=>{
          const xhr = new XMLHttpRequest();
          xhr.onload = function(){
              resolve(xhr.response);
          };
          xhr.onerror = function(){
              reject(new TypeError("Network request failed!"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", imageLicense ,true);
          xhr.send(null);
      });

      const ref = firebase.storage().ref().child(new Date().toISOString());
      const snapshot = ref.put(blob);

      snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED, ()=>{
        setUploadingLicense(true);
      },
      (error)=>{
          setUploadingLicense(false);
          console.log(error);
          blob.close();
          return;
      },
      ()=>{
          snapshot.snapshot.ref.getDownloadURL().then((url)=>{
            setUploadingLicense(false);
            console.log("download url :", url);
            setLicenseUrl(url);
              blob.close();
              return url;
          });
      }
      );
  };




    return (
        <View style={styles.container}>
            <ScrollView>
      <Image
      style={styles.saveMoney}
      source={require("../../../assets/register.png")}
      />
        <Text style={styles.title}>Complete the registration process here!</Text>
        <Formik
          initialValues={{ fullName:"", email:"", password:"", birthDate:"", gender:"", aadharNumber:"",dlNumber:"" }}
          validationSchema={Yup.object({
           fullName: Yup.string().required("please enter valid full name"),
           email: Yup.string().email().required("please enter valid email"),
           password: Yup.string().required("please enter valid full name"),
           birthDate: Yup.string().required("please enter valid full name"),
           gender: Yup.string().required("please enter valid full name"),
           aadharNumber: Yup.string().required("please enter valid full name"),
           dlNumber: Yup.string().required("please enter valid full name"),
          })}
          onSubmit={(values, formikActions) => {
            setTimeout(() => {
              onRegisterDeliveryPerson(values.email, values.password);
              values.aadharCard = aadharUrl;
              values.licenseCard = licenseUrl;
              values.approvalStatus = false;
              values.averageRating=5;
              var database = firebase.database();
              var key = values.email.replace("@gmail.com", "");
              database.ref("/deliveryPerson").child(key).set(values);
              formikActions.resetForm();
              formikActions.setSubmitting(false);
            }, 500);

          }}>
          {props => (
            <View>
              <Text style={{marginTop:10}}>Name</Text>
             <TextInput
                onChangeText={props.handleChange("fullName")}
                value={props.values.fullName}
                autoFocus
                placeholder="ex. jeet pandya"
                style={styles.input}
              />
              {props.touched.fullName && props.errors.fullName ? (
                <Text style={styles.error}>{props.errors.fullName}</Text>
              ) : null}

            <Text style={{marginTop:10}}>Email ID</Text>
             <TextInput
                onChangeText={props.handleChange("email")}
                value={props.values.email}
                placeholder="jp@gmail.com"
                style={styles.input}
              />
              {props.touched.email && props.errors.email ? (
                <Text style={styles.error}>{props.errors.email}</Text>
              ) : null}

            <Text style={{marginTop:10}}>Password</Text>
              <TextInput
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                secureTextEntry
                style={styles.input}
              />
              {props.touched.password && props.errors.password ? (
                <Text style={{...styles.error,...styles.error1}}>{props.errors.password}</Text>
              ) : null}

              <Text style={{marginTop:10}}>Birth Date</Text>
              <TextInput
                onChangeText={props.handleChange("birthDate")}
                value={props.values.birthDate}
                placeholder="ex.dd/mm/yyyy"
                style={styles.input}
              />
              {props.touched.birthDate && props.errors.birthDate ? (
                <Text style={styles.error}>{props.errors.birthDate}</Text>
              ) : null}

              <Text style={{marginTop:10}}>Gender</Text>
              <TextInput
                onChangeText={props.handleChange("gender")}
                value={props.values.gender}
                placeholder="ex.Male"
                style={styles.input}
              />
              {props.touched.gender && props.errors.gender ? (
                <Text style={styles.error}>{props.errors.gender}</Text>
              ) : null}
            <Text style={{marginTop:10}}>Aadhar Number</Text>
              <TextInput
                onChangeText={props.handleChange("aadharNumber")}
                value={props.values.aadharNumber}
                placeholder="5552 55556"
                style={styles.input}
              />
              {props.touched.aadharNumber && props.errors.aadharNumber ? (
                <Text style={styles.error}>{props.errors.aadharNumber}</Text>
              ) : null}
            <Text style={{marginTop:10}}>Driving License</Text>
              <TextInput
                onChangeText={props.handleChange("dlNumber")}
                value={props.values.dlNumber}
                placeholder="5552 55556"
                style={styles.input}
              />
              {props.touched.dlNumber && props.errors.dlNumber ? (
                <Text style={styles.error}>{props.errors.dlNumber}</Text>
              ) : null}
            <Image source={{uri: imageAadhar}} style={{width: 300, height: 300}}/>
            <Button
            onPress={pickImageAadhar}
            mode="contained"
            color="rgb(254,218,0)"
            icon="camera"
            >
                Choose Aadhar Picture
                </Button>
                <Text/>
            {!aadharuploading ?
                <Button
                color="rgb(254,218,0)"
                onPress={uploadImageAadhar}
                mode="contained"
                icon="upload"
                >
                Upload Aadhar Picture
                </Button>
                :
                <ActivityIndicator size="large" color="#000"/>
            }

        <Image source={{uri: imageLicense}} style={{width: 300, height: 300}}/>
            <Button
            onPress={pickImageLicense}
            mode="contained"
            color="rgb(254,218,0)"
            icon="camera"
            >
                Choose License Picture
                </Button>
                <Text />
            {!licenseuploading ?
                <Button
                color="rgb(254,218,0)"
                onPress={uploadImageLicense}
                mode="contained"
                icon="upload">
                Upload License Picture
                </Button>
                :
                <ActivityIndicator size="large" color="#000"/>
            }
            <Text/>

              <Button
                onPress={props.handleSubmit}
                color="rgb(254,218,0)"
                mode="contained"
                loading={props.isSubmitting}
                disabled={props.isSubmitting}
                style={{ marginTop: 16 }}>
                Submit
              </Button>
              <Button
                onPress={props.handleReset}
                color="black"
                mode="outlined"
                disabled={props.isSubmitting}
                style={{ marginTop: 16 }}>
                Reset
              </Button>
            </View>
          )}
        </Formik>
        </ScrollView>
      </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:StatusBar.currentHeight + 50,
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
      height:130,
      width:130,
      resizeMode:"stretch",
      alignSelf:"center",
    },
  });
