import { useState, useEffect } from "react";
import { FlatList, View } from "react-native";

import { Container, FiltersContainer, FilterText, Line, ListFilterContainer, LocationFilterList, Main, OptionsRoomsContainer, ScreenTitle, SearchFilterContainer } from "./styles";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { RoomCardHome } from "@components/RoomCardHome";
import { FilterButton } from "@components/FilterButton";
import { AdminButton } from "@components/AdminButton";

import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "@routes/stacks/home-stack.routes";

import { useAuth } from "@hooks/useAuth";
import { api } from "@services/api";
import { RoomDTO } from "@dtos/RoomDTO";

import { AppError } from "@utils/AppError";

import Toast from "react-native-toast-message";


export function Home() {
  const { user } = useAuth();

  const [rooms, setRooms] = useState<RoomDTO[]>([] as RoomDTO[]);
  const [filterActivity, setFilterActivity] = useState(false);
  const [locationList, setLocationList] = useState([
    "Bloco A", "Bloco B", "Bloco C", "Bloco D", "Bloco E", "Bloco F", "Bloco G" 
  ]);
  const [search, setSearch] = useState("");

  const filteredRooms = rooms.filter(room => (
    room.nome_numero.toLowerCase().includes(search.toLowerCase())
  ))

  const navigation = useNavigation<HomeStackNavigationProps>();

  function handleGoToDetailsRoom(id: number) {
    navigation.navigate("roomDetails", { id: id });
  }

  function handlePressButton() {
    filterActivity ? setFilterActivity(false) : setFilterActivity(true);
    console.log(filterActivity);
  }

  async function fetchRooms() {
    try {
      const { data } = await api.get("/salas/");

      setRooms(data) 
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
    fetchRooms();
  }, [rooms]);

  return (
    <Container>
      <Header name={user.username} />
      
      <Main>
        <ScreenTitle>Todas as salas</ScreenTitle>
        
        <OptionsRoomsContainer>
          <SearchFilterContainer>
            <FilterButton isActive={filterActivity} onPress={handlePressButton} />
            <SearchInput flex value={search} onChangeText={setSearch} />
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
          data={filteredRooms}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <RoomCardHome 
              roomName={item.nome_numero} 
              roomCapacity={item.capacidade} 
              roomLocation={item.localizacao} 
              roomStatus={item.status_limpeza} 
              onPress={() => handleGoToDetailsRoom(item.id)}
            />
          )}
        />

        {
          user.is_superuser &&
          <AdminButton name="Criar nova sala" screen="createRoom" icon="create" />
        }
      </Main>
    </Container>
  )
}