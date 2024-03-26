/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { ActivityIndicator, View,  StyleSheet } from "react-native";

export class ActivityIndicatorExample extends Component {
   state = { animating: true }

   closeActivityIndicator = () => setTimeout(() => this.setState({
   animating: false }), 5000)

   componentDidMount = () => this.closeActivityIndicator()
   render() {
      const animating = this.state.animating;
      return (
         <View style = {styles.container}>
            <ActivityIndicator
               animating = {animating}
               color = "#bc2b78"
               size = "large"
               style = {styles.activityIndicator}/>
         </View>
      );
   }
}
//export default ActivityIndicatorExample;

const styles = StyleSheet.create({
   container: {
    
      justifyContent: "center",
      alignItems: "center",
      marginTop: 11,
   },
   activityIndicator: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: 80,
   },
});
