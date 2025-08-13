import { Header } from "@components/Header";
import { Container, Main, ScreenTitle } from "./styles";

export function Home() {
  return (
    <Container>
      <Header name="Enzo Makenzy" />
      
      <Main>
        <ScreenTitle>Todas as salas</ScreenTitle>
      </Main>
    </Container>
  )
}