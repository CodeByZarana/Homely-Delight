/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import {ConfirmDb} from "./ConfirmDb";
export class Activity extends React.Component {
  state = {
    showContent: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showContent: true });
    }, 5000);
  }

  render() {
    const { showContent } = this.state;

    return showContent ? (
      <ConfirmDb/>
    ) : (
      <View>
        <ActivityIndicator size="large" animating={true} color="#1DC47A"/>
      </View>
    );
  }
}
