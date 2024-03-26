/* eslint-disable prettier/prettier */
import {ThankYouDb} from "./ThankYouDb";
import React, { Component } from "react";
import {DbDashBoard} from "./DbDashBoard";

export class ThankYouNavigatorDb extends Component {
constructor(props){
 super(props);
 this.state = {
  component : <ThankYouDb />,
 };
}


componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          this.setState({ component: <DbDashBoard /> });
     }, 2000);
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
