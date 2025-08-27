import { useState, useEffect } from "react";
import { FlatList, View } from "react-native";

import { Container, FiltersContainer, FilterText, Line, ListFilterContainer, LocationFilterList, Main, OptionsRoomsContainer, ScreenTitle, SearchFilterContainer } from "./styles";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { RoomCardHome } from "@components/RoomCardHome";
import { FilterButton } from "@components/FilterButton";

import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "@routes/stacks/home-stack.routes";
import { AdminButton } from "@components/AdminButton";
import { useAuth } from "@hooks/useAuth";

import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import Toast from "react-native-toast-message";
import { RoomDTO } from "@dtos/RoomDTO";

export function Home() {
  const { user } = useAuth();

  const [rooms, setRooms] = useState<RoomDTO[]>({} as RoomDTO[]);
  const [filterActivity, setFilterActivity] = useState(false);
  const [locationList, setLocationList] = useState([
    "Bloco A", "Bloco B", "Bloco C", "Bloco D", "Bloco E", "Bloco F", "Bloco G" 
  ]);

  const navigation = useNavigation<HomeStackNavigationProps>();

  function handleGoToDetailsRoom() {
    navigation.navigate("roomDetails")
  }

  function handlePressButton() {
    filterActivity ? setFilterActivity(false) : setFilterActivity(true);
    console.log(filterActivity)
  }

  async function fetchGroups() {
    try {
      const response = await api.get("/salas/");

      setRooms(response.data) 
    } catch (error) {
      const isAppError = error instanceof AppError;
      const errorMessage = isAppError ? error.message : "Não foi possível entrar os grupos musculares"

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
      })
    }
  }

  useEffect(() => {
    fetchGroups();
  }, [])

  return (
    <Container>
      <Header name={user.username} />
      
      <Main>
        <ScreenTitle>Todas as salas</ScreenTitle>
        
        <OptionsRoomsContainer>
          <SearchFilterContainer>
            <FilterButton isActive={filterActivity} onPress={handlePressButton} />
            <SearchInput flex />
          </SearchFilterContainer>

          {
            filterActivity &&
            <FiltersContainer>
              <FilterText>Filtrar por: </FilterText>

              <ListFilterContainer>
                <FilterButton name="Campus/Bloco" />
                <FilterButton name="Status" />
                <FilterButton name="Últimas limpas" />
              </ListFilterContainer>

              <Line />

              <LocationFilterList 
                data={locationList}
                keyExtractor={item => item as string}
                renderItem={({ item }) => (
                  <FilterButton name={item as string} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              />
            </FiltersContainer>
          }

        </OptionsRoomsContainer>

        <FlatList 
          data={rooms}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <RoomCardHome 
              roomName={item.nome_numero} 
              roomCapacity={item.capacidade} 
              roomLocation={item.localizacao} 
              roomStatus={item.status_limpeza} 
              onPress={handleGoToDetailsRoom}
            />
          )}
        />

        <AdminButton name="Criar nova sala" screen="createRoom" icon="create" />
      </Main>
    </Container>
  )
}