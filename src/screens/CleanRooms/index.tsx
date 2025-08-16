import { useState } from "react";

import { Container, Main, ScreenTitle } from "./styles";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { CleanRoomCard } from "@components/CleanRoomCard";
import { CleanRoomProps } from "@components/CleanRoomCard";
import { FlatList } from "react-native";
import { cleanRoomsData } from "@utils/dataTest";

export function CleanRooms() {
  const [cleanRooms, setCleanRooms] = useState<CleanRoomProps[]>(cleanRoomsData)

  return (
    <Container>
      <Header />

      <Main>
        <ScreenTitle>Suas salas limpas</ScreenTitle>
        
        <SearchInput />
        
        <FlatList 
          data={cleanRooms}
          keyExtractor={item => item.roomName}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <CleanRoomCard roomName={item.roomName} cleanerBy={item.cleanerBy} dateAndTimeOfCleaning={item.dateAndTimeOfCleaning} />
          )}
        />
      </Main>
    </Container>
  )
}