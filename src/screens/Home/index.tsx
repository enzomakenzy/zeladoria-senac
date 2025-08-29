import { useState } from "react";
import { FlatList, ScrollView } from "react-native";

import { Container, FiltersContainer, FilterText, Main, OptionsRoomsContainer, ScreenTitle, SearchFilterContainer } from "./styles";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { RoomCardHome } from "@components/RoomCardHome";
import { FilterButton } from "@components/FilterButton";
import { AdminButton } from "@components/AdminButton";

import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "@routes/stacks/home-stack.routes";

import { useAuth } from "@hooks/useAuth";
import { api } from "@services/api";
import { RoomDTO } from "@dtos/RoomDTO";

import { AppError } from "@utils/AppError";

import Toast from "react-native-toast-message";
import { useFocusScreen } from "@hooks/useFocusScreen";
import { Loading } from "@components/Loading";

export function Home() {
  const { user } = useAuth();

  const navigation = useNavigation<HomeStackNavigationProps>();

  const [isLoading, setIsLoading] = useState(false);
  const [rooms, setRooms] = useState<RoomDTO[]>([] as RoomDTO[]);
  const [search, setSearch] = useState("");
  const [filterActivity, setFilterActivity] = useState(false);
  const [cleanFilterActivity, setCleanFilterActivity] = useState(false);
  const [pendingCleaningFilterActivity, setPendingCleaningFilterActivity] = useState(false);
  
  function handleGoToDetailsRoom(id: number) {
    navigation.navigate("roomDetails", { id: id });
  }

  const filteredRooms = rooms.filter((room) => {
    const matchName = room.nome_numero.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
    (cleanFilterActivity && room.status_limpeza === "Limpa") ||
    (pendingCleaningFilterActivity && room.status_limpeza === "Limpeza Pendente") ||
    (!cleanFilterActivity && !pendingCleaningFilterActivity); 

    return matchName && matchStatus;
  });
  
  function handlePressFilterButton() {
    setFilterActivity(prev => !prev);
    setCleanFilterActivity(false);
    setPendingCleaningFilterActivity(false);
  }
  
  function handlePressFilterCleanButton() {
    setCleanFilterActivity(prev => !prev);
    setPendingCleaningFilterActivity(false);
  }

  function handlePressFilterPendingCleaningButton() {
    setPendingCleaningFilterActivity(prev => !prev);
    setCleanFilterActivity(false);
  }

  async function fetchRooms() {
    try {
      setIsLoading(true);
      const { data } = await api.get("/salas/");

      setRooms(data) 
    } catch (error) {
      const isAppError = error instanceof AppError;
      const errorMessage = isAppError ? error.message : "Não foi possível resgatar as salas";

      if (errorMessage !== "Token inválido.") {
        Toast.show({
          type: "error",
          text1: "Erro",
          text2: errorMessage,
          text1Style: {
            fontSize: 18
          },
          text2Style: {
            fontSize: 16
          }
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  useFocusScreen(() => {
    fetchRooms();
  });

  return (
    <Container>
      <Header />
      
      <Main>
        <ScreenTitle>Todas as salas</ScreenTitle>
        
        <OptionsRoomsContainer>
          <SearchFilterContainer>
            <FilterButton 
              isActive={filterActivity} 
              onPress={handlePressFilterButton} 
            />
            <SearchInput 
              flex 
              value={search} 
              onChangeText={setSearch} 
              placeholder="Nome da sala"
            />
          </SearchFilterContainer>

          {
            filterActivity &&
            <FiltersContainer>
              <FilterText>Filtrar por: </FilterText>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                <FilterButton 
                  name="Limpa" 
                  isActive={cleanFilterActivity}
                  onPress={handlePressFilterCleanButton}
                  style={{ marginRight: 10 }}
                />

                <FilterButton 
                  name="Limpeza Pendente" 
                  isActive={pendingCleaningFilterActivity}
                  onPress={handlePressFilterPendingCleaningButton}
                />
              </ScrollView>
            </FiltersContainer>
          }

        </OptionsRoomsContainer>

        { isLoading ? (
          <Loading />
        )
        :
          <FlatList 
            data={filteredRooms}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <RoomCardHome 
                roomName={item.nome_numero} 
                roomCapacity={item.capacidade} 
                roomLocation={item.localizacao} 
                roomStatus={item.status_limpeza} 
                onPress={() => handleGoToDetailsRoom(item.id)}
              />
            )}
          />
        }

        {
          user.is_superuser &&
          <AdminButton name="Criar nova sala" screen="createRoom" icon="create" />
        }
      </Main>
    </Container>
  )
}