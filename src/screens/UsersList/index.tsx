import { Container, Main, ScreenTitle } from "./styles";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { UserCard, UserCardProps } from "@components/UserCard";
import { users } from "@utils/dataTest";
import { useState } from "react";
import { FlatList, View } from "react-native";

export function UsersList() {
  const [userList, setUserList] = useState<UserCardProps[]>(users as UserCardProps[]);
  
  return (
    <Container>
      <Header />

      <Main>
        <ScreenTitle>
          Lista de usuários
        </ScreenTitle>

        <SearchInput />

        <FlatList 
          data={userList}
          keyExtractor={item => item.userName}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <UserCard userName={item.userName} userType={item.userType} />
          )}
          style={{ marginTop: 20 }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </Main>
    </Container>
  )
}