import { FlatList } from "react-native";
import { useEffect, useState } from "react";

import { Container, Main, ModalCategoryText, ModalCloseButton, ModalCloseTextButton, ModalContentContainer, ModalInfoText, ModalRoomNameTitle, ScreenTitle } from "./styles";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { CleanRoomCard } from "@components/CleanRoomCard";
import { CustomModal } from "@components/CustomModal";

import Toast from "react-native-toast-message";

import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { CleanRoomDTO } from "@dtos/CleanRoomDTO";
import { transformUtcToParseISO } from "@utils/transformUtcToParseISO";

export function CleanRooms() {
  const [cleanRoomsList, setCleanRoomsList] = useState<CleanRoomDTO[]>([] as CleanRoomDTO[]);
  const [cleanRoom, setCleanRoom] = useState<CleanRoomDTO>({} as CleanRoomDTO);
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState("");

  const filteredRooms = cleanRoomsList.filter(cleanRoom => (
    cleanRoom.sala_nome.toLowerCase().includes(search.toLowerCase())
  ));

  async function fetchListCleanRooms() {
    try {
      const { data } = await api.get("/limpezas/");
    
      setCleanRoomsList(data)
    } catch (error) {
      const isAppError = error instanceof AppError;
      const errorMessage = isAppError ? error.message : "Não foi possível resgatar as salas";

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
  }

  function handleShowDetails(item: CleanRoomDTO) {
    setModalVisible(true);
    setCleanRoom(item);
  }

  useEffect(() => {
    fetchListCleanRooms();
  }, [cleanRoomsList]);

  return (
    <Container>
      <CustomModal modalVisible={modalVisible}>
        <ModalRoomNameTitle>{cleanRoom.sala_nome}</ModalRoomNameTitle>

        <ModalContentContainer>
            <ModalInfoText>
              <ModalCategoryText>Limpado por: </ModalCategoryText>
              {cleanRoom.funcionario_responsavel?.username}
            </ModalInfoText>
            
            <ModalInfoText>
              <ModalCategoryText>Data e hora da limpeza: </ModalCategoryText>
              {transformUtcToParseISO(cleanRoom.data_hora_limpeza)}
            </ModalInfoText>

            {
              cleanRoom.observacoes &&
              <ModalInfoText>
                <ModalCategoryText>Observações: </ModalCategoryText>
                {cleanRoom.observacoes}
              </ModalInfoText>
            }
        </ModalContentContainer>

        <ModalCloseButton onPress={() => setModalVisible(false)}>
          <ModalCloseTextButton>Voltar</ModalCloseTextButton>
        </ModalCloseButton>
      </CustomModal>

      <Header />

      <Main>
        <ScreenTitle>Registros de limpeza</ScreenTitle>
        
        <SearchInput 
          value={search} 
          onChangeText={setSearch} 
          placeholder="Nome da sala"
        />
        
        <FlatList 
          data={filteredRooms}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 20 }}
          renderItem={({ item }) => (
            <CleanRoomCard 
              roomName={item.sala_nome} 
              cleanerBy={item.funcionario_responsavel.username} 
              onPress={() => handleShowDetails(item)}
            />
          )}
        />
      </Main>
    </Container>
  )
}