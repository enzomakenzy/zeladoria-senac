import { useState } from "react";
import { FlatList, ScrollView } from "react-native";

import { Container, FiltersContainer, Main, OptionsRoomsContainer } from "./styles";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { RoomCardHome } from "@components/RoomCardHome";
import { FilterButton } from "@components/FilterButton";
import { AdminButton } from "@components/AdminButton";
import { Loading } from "@components/Loading";

import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "@routes/stacks/home-stack.routes";

import { useAuth } from "@hooks/useAuth";
import { api } from "@services/api";
import { RoomDTO } from "@dtos/RoomDTO";

import { AppError } from "@utils/AppError";

import Toast from "react-native-toast-message";
import { useFocusScreen } from "@hooks/useFocusScreen";

export function Home() {
  const { user } = useAuth();

  const navigation = useNavigation<HomeStackNavigationProps>();

  const [isLoading, setIsLoading] = useState(false);
  const [rooms, setRooms] = useState<RoomDTO[]>([] as RoomDTO[]);
  const [search, setSearch] = useState("");
  const [cleanFilterActivity, setCleanFilterActivity] = useState(false);
  const [pendingCleaningFilterActivity, setPendingCleaningFilterActivity] = useState(false);
  const [inCleaningFilterActivity, setInCleaningFilterActivity] = useState(false);
  const [dirtyFilterActivy, setDirtyFilterActivity] = useState(false);

  function handleGoToDetailsRoom(qr_code_id: string) {
    navigation.navigate("roomDetails", { qr_code_id });
  }

  const filteredRooms = rooms.filter((room) => {
    const matchName = room.nome_numero.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
    (cleanFilterActivity && room.status_limpeza === "Limpa") ||
    (pendingCleaningFilterActivity && room.status_limpeza === "Limpeza Pendente") ||
    (inCleaningFilterActivity && room.status_limpeza === "Em Limpeza") ||
    (dirtyFilterActivy && room.status_limpeza === "Suja") ||
    (!cleanFilterActivity && !pendingCleaningFilterActivity && !inCleaningFilterActivity && !dirtyFilterActivy); 

    return matchName && matchStatus;
  });
  
  function handlePressFilterCleanButton() {
    setCleanFilterActivity(prev => !prev);
    setPendingCleaningFilterActivity(false);
    setInCleaningFilterActivity(false);
    setDirtyFilterActivity(false);
  }

  function handlePressFilterPendingCleaningButton() {
    setPendingCleaningFilterActivity(prev => !prev);
    setCleanFilterActivity(false);
    setInCleaningFilterActivity(false);
    setDirtyFilterActivity(false);
  }

  function handlePressFilterInCleaningButton() {
    setInCleaningFilterActivity(prev => !prev);
    setCleanFilterActivity(false);
    setPendingCleaningFilterActivity(false);
    setDirtyFilterActivity(false);
  }

  function handlePressFilterDirtyButton() {
    setDirtyFilterActivity(prev => !prev);
    setCleanFilterActivity(false);
    setPendingCleaningFilterActivity(false);
    setInCleaningFilterActivity(false);
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
      <Header screenName="Todas as salas" />
      
      <Main>
        <OptionsRoomsContainer>
          <SearchInput 
            value={search} 
            onChangeText={setSearch} 
            placeholder="Nome da sala"
          />

          <FiltersContainer>
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
                style={{ marginRight: 10 }}
              />

              <FilterButton 
                name="Em Limpeza" 
                isActive={inCleaningFilterActivity}
                onPress={handlePressFilterInCleaningButton}
                style={{ marginRight: 10 }}
              />

              <FilterButton 
                name="Suja" 
                isActive={dirtyFilterActivy}
                onPress={handlePressFilterDirtyButton}
              />
            </ScrollView>
          </FiltersContainer>
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
                lastClean={item.ultima_limpeza_data_hora}
                onPress={() => handleGoToDetailsRoom(item.qr_code_id)}
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