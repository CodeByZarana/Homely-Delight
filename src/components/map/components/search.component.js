/* eslint-disable prettier/prettier */
import React, { useContext,  useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import {LocationContext} from "../../../service/Location/LocationContext";

const SearchContainer = styled.View`
  padding:16px;
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword); //the local searchKeyword is set whenever the keyword changes in the location context
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar placeholder="Search for a location" value={searchKeyword}
        icon = "map"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
