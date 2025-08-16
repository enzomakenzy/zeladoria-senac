import { Header } from "@components/Header";
import { Container, Main, ScreenTitle, SearchFilterContainer } from "./styles";
import { FilterButton } from "@components/FilterButton";
import { SearchInput } from "@components/SearchInput";
import { useState } from "react";
import { FlatList } from "react-native";
import { RoomCardHome } from "@components/RoomCardHome";
import { allRoomsData } from "@utils/dataTest";

export function Home() {
  const [rooms, setRooms] = useState(allRoomsData)

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
            />
          )}
        />
      </Main>
    </Container>
  )
}