import { Header } from "@components/Header";
import { Container, Main, ScreenTitle } from "./styles";
import { CleanRoomCard } from "@components/CleanRoomCard";

export function CleanRooms() {
  return (
    <Container>
      <Header />

      <Main>
        <ScreenTitle>Suas salas limpas</ScreenTitle>
      </Main>
    </Container>
  )
}