/* eslint-disable prettier/prettier */
import React, { createContext, useState } from "react";
import * as firebase from "firebase";

export const FirebaseContext = createContext();

export const FirebaseContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const getData = () => {
    var database = firebase.database();
    database.ref("/users/"). on("value" ,(snapshot) =>{
      setData(snapshot.val());
      console.log(data.admin);
    });
  };
  
  return (
    <FirebaseContext.Provider
      value={{
        getData,
        
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
