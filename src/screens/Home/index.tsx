import { useState } from "react";
import { FlatList, View } from "react-native";

import { Container, FiltersContainer, FilterText, Line, ListFilterContainer, LocationFilterList, Main, OptionsRoomsContainer, ScreenTitle, SearchFilterContainer } from "./styles";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { RoomCardHome } from "@components/RoomCardHome";
import { FilterButton } from "@components/FilterButton";

import { allRoomsData } from "@utils/dataTest";

import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "@routes/stacks/home-stack.routes";
import { AdminButton } from "@components/AdminButton";

export function Home() {
  const [rooms, setRooms] = useState(allRoomsData);
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

  return (
    <Container>
      <Header name="Enzo Makenzy" />
      
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
          keyExtractor={item => item.roomName}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <RoomCardHome 
              roomName={item.roomName} 
              roomCapacity={item.roomCapaticy} 
              roomLocation={item.roomLocation} 
              roomStatus={item.roomStatus} 
              onPress={handleGoToDetailsRoom}
            />
          )}
        />

        <AdminButton name="Criar nova sala" screen="createRoom" icon="create" />
      </Main>
    </Container>
  )
}