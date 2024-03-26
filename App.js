/* eslint-disable prettier/prettier */
import React from "react";
import { Navigation } from "./src/infrastructure/nevigation/index";
//import * as firebase from "firebase";
import firebase from "firebase/app";
import { AuthenticationContextProvider } from "./src/service/authentication/authentication.context";
import { LocationContextProvider } from "./src/service/Location/LocationContext";
import { RestaurantsContextProvider } from "./src/service/places/places.context";
import { FirebaseContextProvider } from "./src/service/firebase/firebase.context";
const firebaseConfig = {
  apiKey: "AIzaSyC3dBKKWwwviO57axPgnF2NJW7-rPWlbFA",
  authDomain: "foodninja-cca71.firebaseapp.com",
  projectId: "foodninja-cca71",
  storageBucket: "foodninja-cca71.appspot.com",
  messagingSenderId: "664261121886",
  appId: "1:664261121886:web:9859a2b1d45ec438b6e1cf",
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <AuthenticationContextProvider>
      <FirebaseContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation/>
        </RestaurantsContextProvider>
      </LocationContextProvider>
      </FirebaseContextProvider>
    </AuthenticationContextProvider>
  );
}

