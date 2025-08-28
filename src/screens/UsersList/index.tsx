import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { Container, Main, ScreenTitle } from "./styles";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { UserCard } from "@components/UserCard";

import { UserDTO } from "@dtos/UserDTO";
import { AppError } from "@utils/AppError";
import { api } from "@services/api";

import Toast from "react-native-toast-message";

export function UsersList() {
  const [userList, setUserList] = useState<UserDTO[]>([] as UserDTO[]);
  const [search, setSearch] = useState("");

  const filteredUsers = userList.filter(user => (
    user.username.toLowerCase().includes(search.toLowerCase())
  ));

  async function fetchUsersList() {
    try {
      const { data } = await api.get("/accounts/list_users/");

      setUserList(data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const errorMessage = isAppError ? error.message : "Não foi possível resgatar as salas";

      Toast.show({
        type: "error",
        text1: "Erro",
        text2: errorMessage,
        text1Style: {
          fontSize: 18
        },
        text2Style: {
          fontSize: 16
        }
      });
    }
  }

  useEffect(() => {
    fetchUsersList();
  }, [userList])
  
  return (
    <Container>
      <Header />

      <Main>
        <ScreenTitle>
          Lista de usuários
        </ScreenTitle>

        <SearchInput 
          placeholder="Nome do usuário"
          value={search}
          onChangeText={setSearch}
        />

        <FlatList 
          data={filteredUsers}
          keyExtractor={item => item.username}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <UserCard userName={item.username} isAdmin={item.is_superuser} />
          )}
          style={{ marginTop: 20 }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      </Main>
    </Container>
  )
}