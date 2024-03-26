/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { AuthenticationContext } from "../../service/authentication/authentication.context";
import { TouchableOpacity, SafeAreaView, Text } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import * as firebase from "firebase";
import {LoginScreenForDb} from "./LoginScreenForDb";
const SettingsItem = styled(List.Item)`
  padding: 18mm;
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
export const SettingsScreenDb = ({navigation}) => {
    const [count, setCount] = useState(0);
    const getData = () => {
        setCount(prevCount => prevCount + 1);
      };
    
      if ((count) === 1){
        return <LoginScreenForDb/>;
      }
  
  return (
      <>
    <SafeAreaView>
        <AvatarContainer>
            <Avatar.Icon size = {180} icon = "human" backgroundColor = "#2182BD"/>
        </AvatarContainer>
        <TouchableOpacity onPress={() => getData() }>
            <Text>Logout?</Text>
        </TouchableOpacity>
    </SafeAreaView>
  </>
  );
};
