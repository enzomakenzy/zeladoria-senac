import { useState } from "react";

import { Container, Main, ScreenTitle } from "./styles";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { CleanRoomCard } from "@components/CleanRoomCard";
import { CleanRoomProps } from "@components/CleanRoomCard";
import { FlatList } from "react-native";

export function CleanRooms() {
  const [cleanRooms, setCleanRooms] = useState<CleanRoomProps[]>([
    { roomName: "Laboratório 2", cleanerBy: "Enzo Makenzy", dateAndTimeOfCleaning: "04/08/2025 às 15:30" },
    { roomName: "Laboratório 3", cleanerBy: "Enzo Makenzy", dateAndTimeOfCleaning: "04/08/2025 às 15:30" },
    { roomName: "Sala de Idiomas 5", cleanerBy: "Enzo Makenzy", dateAndTimeOfCleaning: "04/08/2025 às 15:30" },
    { roomName: "SmartLab", cleanerBy: "Enzo Makenzy", dateAndTimeOfCleaning: "04/08/2025 às 15:30" },
    { roomName: "Auditório", cleanerBy: "Enzo Makenzy", dateAndTimeOfCleaning: "04/08/2025 às 15:30" },
    { roomName: "Sala de Idiomas 2", cleanerBy: "Enzo Makenzy", dateAndTimeOfCleaning: "04/08/2025 às 15:30" },
    { roomName: "Salão 1", cleanerBy: "Enzo Makenzy", dateAndTimeOfCleaning: "04/08/2025 às 15:30" }
  ])

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