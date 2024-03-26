/* eslint-disable prettier/prettier */
import {SearchingForDb} from "./SearchingForDb";
import {ConfirmDb} from "./ConfirmDb";
import React, { Component } from "react";


export class Searching extends Component {
constructor(props){
 super(props);
 this.state = {
  component : <SearchingForDb />,
 };
}


componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          this.setState({ component: <ConfirmDb /> });
     }, 5000);
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
