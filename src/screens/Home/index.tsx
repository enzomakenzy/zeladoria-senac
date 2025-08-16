import { Header } from "@components/Header";
import { Container, Main, ScreenTitle, SearchFilterContainer } from "./styles";
import { FilterButton } from "@components/FilterButton";
import { SearchInput } from "@components/SearchInput";
import { useState } from "react";
import { FlatList } from "react-native";
import { RoomCardHome } from "@components/RoomCardHome";

export function Home() {
  const [rooms, setRooms] = useState([
    { roomName: "Laboratório 2", roomCapaticy: "30", roomLocation: "Bloco A", roomStatus: false },
    { roomName: "Sala Idiomas 1", roomCapaticy: "20", roomLocation: "Bloco B", roomStatus: false },
    { roomName: "Smart Lab", roomCapaticy: "25", roomLocation: "Bloco C", roomStatus: true },
    { roomName: "Salão", roomCapaticy: "18", roomLocation: "Bloco D", roomStatus: true },
    { roomName: "Laboratório 3", roomCapaticy: "18", roomLocation: "Bloco A", roomStatus: false },
    { roomName: "Sala Idiomas 2", roomCapaticy: "20", roomLocation: "Bloco B", roomStatus: true },
    { roomName: "Auditório", roomCapaticy: "60", roomLocation: "Bloco C", roomStatus: false }
  ])

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