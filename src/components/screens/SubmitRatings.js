/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { Rating } from "react-native-ratings";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from "firebase";
function updateRatings(dbId,rating,navigation){
    console.log("id:"+dbId);
    console.log(rating);
    const database = firebase.database();
    var newRating;
    var ref = database.ref("deliveryPerson/" + dbId + "/");
    var previousRating = 0;
    ref.on("value", (snapshot) =>{
        previousRating = Number(snapshot.val().averageRating);
        console.log("prevRating:",previousRating);
        newRating = Math.floor((previousRating + rating) / 2);
        console.log("newRating:", newRating);

    });
    if(!isNaN(newRating) ){
    ref.update({averageRating : newRating});
    }
    //navigation.navigate("DashBoard");
}
export const SubmitRatings = ({route,navigation}) => {
    var dbid=route.params.dbid;
    const [rating, setRating] = useState(0);
  return (
      <View style = {{backgroundColor: "white", flex: 1}}>
    <LottieView 
      key="animation"
      autoPlay
      loop
      resizeMode="cover"
      source={require("../../../assets/watermelon.json")}
    />
    <Text style={{textAlign: "center", fontSize: 20,marginTop:40 }}>Please Rate Your Delivery Person</Text>
<Rating imageSize={60}
            type="custom"
            startingValue= {1}
            ratingColor="#FEAD1D"
            tintColor="white"
            showRating

            style={{borderRadius:10, marginTop: 350}}
            onFinishRating = {setRating}
             />
             <TouchableOpacity style={{marginTop:50}} onPress = {()=>updateRatings(dbid,rating,navigation)}>
                 <Text>Submit</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{marginTop:10}} onPress = {()=>navigation.navigate("DashBoard")}>
                 <Text>go to home</Text>
             </TouchableOpacity>
             </View>
 
  );
};