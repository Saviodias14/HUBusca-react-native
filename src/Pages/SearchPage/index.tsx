import styled from "styled-components/native";
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { mainlyColor, textColor } from "../../constants/colors";
import axios from 'axios';
import { SafeAreaView, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SearchPageProps, UsersResponse } from "../../interfaces";
import UsersList from "../../components/usersList";
import _ from 'lodash';


export default function SearchPage({ user, setUser }: SearchPageProps) {

  async function handleSearch(text: string) {
    if (text) {
      await axios.get<UsersResponse>(`https://api.github.com/search/users?q=${text}`, {
        headers: {
          Authorization: `Bearer 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`
        }
      })
        .then((res) => {
          setUser(res.data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    } else {
      setUser(null)
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mainlyColor }}>
      <ScrollView>
        <Container>
          <SearchIcon name="search" size={20} />
          <Input placeholder="Pesquise um perfil do GitHub" onChangeText={(text) => handleSearch(text)} />
          {user?.items?.map((e) =>
            <>
              {<UsersList key={e.id} user={e} />}
            </>)}
          <Text1 style={{ marginTop: 200 }}>{user ? '' : 'Faça uma busca para encontrar usuários'}</Text1>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${mainlyColor};
  width:100%;
  min-height: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: textColor
})`
  height: 40px;
  width: 90%;
  border-color: ${textColor};
  opacity: 0.7;
  border-width: 1px;
  border-radius:8px;
  margin-bottom: 20px;
  color: ${textColor};
  padding:0 50px;

`;

const SearchIcon = styled(FontAwesome)`
  margin-right: 10px;
  color: ${textColor};
  opacity:0.7;
  position:absolute;
  left: 8%;
  top: 39px;
`;

const Text1 = styled(Text)`
  color:${textColor};
`
