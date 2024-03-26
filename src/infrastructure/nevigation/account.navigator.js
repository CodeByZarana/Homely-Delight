/* eslint-disable prettier/prettier */
import {MainScreen} from "../../components/screens/MainScreen";
import React, { Component } from "react";
import {LoginRegisterNavigator} from "./LoginRegisterNavigator";

export class AccountNavigator extends Component {
constructor(props){
 super(props);
 this.state = {
  component : <MainScreen />,
 };
}


componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          this.setState({ component: <LoginRegisterNavigator /> });
     }, 700);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle);
}

render() {
return (
  this.state.component
);
}
}
