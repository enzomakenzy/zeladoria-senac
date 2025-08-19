import { Header } from "@components/Header";
import { Container, Main, ScreenTitle, SearchFilterContainer } from "./styles";
import { FilterButton } from "@components/FilterButton";
import { SearchInput } from "@components/SearchInput";
import { useState } from "react";
import { FlatList } from "react-native";
import { RoomCardHome } from "@components/RoomCardHome";
import { allRoomsData } from "@utils/dataTest";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "@routes/stacks/home-stack.routes";

export function Home() {
  const [rooms, setRooms] = useState(allRoomsData);

  const navigation = useNavigation<HomeStackNavigationProps>();

  function handleGoToDetailsRoom() {
    navigation.navigate("roomDetails")
  }

  return (
    <Container>
      <Header name="Enzo Makenzy" />
      
      <Main>
        <ScreenTitle>Todas as salas</ScreenTitle>
        <SearchFilterContainer>
          <FilterButton/>
          <SearchInput flex />
        </SearchFilterContainer>

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