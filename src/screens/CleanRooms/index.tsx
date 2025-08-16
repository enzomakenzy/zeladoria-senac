import { useState } from "react";

import { Container, Main, ModalCategoryText, ModalCloseButton, ModalCloseTextButton, ModalContainer, ModalContentContainer, ModalDetailsContainer, ModalInfoText, ModalRoomNameTitle, ScreenTitle } from "./styles";

import { Header } from "@components/Header";
import { SearchInput } from "@components/SearchInput";
import { CleanRoomCard } from "@components/CleanRoomCard";
import { CleanRoomProps } from "@components/CleanRoomCard";
import { FlatList, Modal, Pressable, Text, View } from "react-native";
import { cleanRoomsData } from "@utils/dataTest";

export function CleanRooms() {
  const [cleanRooms, setCleanRooms] = useState<CleanRoomProps[]>(cleanRoomsData)
  const [modalVisible, setModalVisible] = useState(false);

  function handleTest() {
    console.log("disparou")
  }

  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        navigationBarTranslucent
        statusBarTranslucent
      >
        <ModalContainer>
          <ModalDetailsContainer>
            <ModalRoomNameTitle>Laboratório 2</ModalRoomNameTitle>

            <ModalContentContainer>
                <ModalInfoText>
                  <ModalCategoryText>Limpado por: </ModalCategoryText>
                  Enzo Makenzy
                </ModalInfoText>
                
                <ModalInfoText>
                  <ModalCategoryText>Data e hora da limpeza: </ModalCategoryText>
                  04/08/2025 às 15:30
                </ModalInfoText>
                
                <ModalInfoText>
                  <ModalCategoryText>Capacidade: </ModalCategoryText>
                  15
                </ModalInfoText>

                <ModalInfoText>
                  <ModalCategoryText>Localização: </ModalCategoryText>
                  Bloco A
                </ModalInfoText>
                
                <ModalInfoText areGreen>
                  <ModalCategoryText>Status: </ModalCategoryText>
                  Limpa
                </ModalInfoText>

                <ModalInfoText>
                  <ModalCategoryText>Observações: </ModalCategoryText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                </ModalInfoText>
            </ModalContentContainer>

            <ModalCloseButton onPress={() => setModalVisible(false)}>
              <ModalCloseTextButton>Voltar</ModalCloseTextButton>
            </ModalCloseButton>
          </ModalDetailsContainer>
        </ModalContainer>
      </Modal>

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
            <CleanRoomCard 
              roomName={item.roomName} 
              cleanerBy={item.cleanerBy} 
              dateAndTimeOfCleaning={item.dateAndTimeOfCleaning} 
              onPress={() => setModalVisible(true)}
            />
          )}
        />
      </Main>
    </Container>
  )
}