import { Header } from "@components/Header";
import { Container, Main, ScreenTitle, SearchFilterContainer } from "./styles";
import { FilterButton } from "@components/FilterButton";
import { SearchInput } from "@components/SearchInput";

export function Home() {
  return (
    <Container>
      <Header name="Enzo Makenzy" />
      
      <Main>
        <ScreenTitle>Todas as salas</ScreenTitle>
        <SearchFilterContainer>
          <FilterButton/>
          <SearchInput/>
        </SearchFilterContainer>
      </Main>
    </Container>
  )
}