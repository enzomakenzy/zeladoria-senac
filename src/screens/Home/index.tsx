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
  }

  return (
    <Container>
      <Header name="Enzo Makenzy" />
      
      <Main>
        <ScreenTitle>Todas as salas</ScreenTitle>
        
        <OptionsRoomsContainer>
          <SearchFilterContainer>
            <FilterButton isPressed={filterActivity} onPress={handlePressButton} />
            <SearchInput flex />
          </SearchFilterContainer>

          <FiltersContainer>
            <FilterText>Filtrar por: </FilterText>

            <ListFilterContainer>
              <FilterButton isPressed={filterActivity} name="Campus/Bloco" />
              <FilterButton isPressed={filterActivity} name="Status" />
              <FilterButton isPressed={filterActivity} name="Últimas limpas" />
            </ListFilterContainer>

            <Line />

            <LocationFilterList 
              data={locationList}
              keyExtractor={item => item as string}
              renderItem={({ item }) => (
                <FilterButton isPressed={filterActivity} name={item as string} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
          </FiltersContainer>
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
      </Main>
    </Container>
  )
}