import { Container, InfoRoomContainer, InfoRoomText, Line, Main, ModalButtonsContainer, ModalInfoContainer, ModalTitle, RoomNameText, ScreenTitle} from "./styles";

import { Header } from "@components/Header";
import { FormInput } from "@components/FormInput";
import { CustomModal } from "@components/CustomModal";
import { LargeButton } from "@components/LargeButton";

import { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const cleanRoomFormSchema = z.object({
  observations: z.string().optional()
})

type CleanRoomFormData = z.infer<typeof cleanRoomFormSchema>;

export function RoomDetails() {
  const [modalVisible, setModalVisible] = useState(false);

  const { control, handleSubmit } = useForm<CleanRoomFormData>({
    resolver: zodResolver(cleanRoomFormSchema)
  });

  function handleCleanRoom({ observations }: CleanRoomFormData) {
    setModalVisible(false);
    console.log({ observations });
  }
  
  return (
    <Container>
      <CustomModal modalVisible={modalVisible}>
        <ModalTitle>Marcar sala como limpa</ModalTitle>

        <ModalInfoContainer>
          <Controller 
            control={control}
            name="observations"
            render={(({ field: { onChange, value } }) => (
              <FormInput 
                inputName="Adicionar observação (opcional)" 
                placeholder="Observações" 
                editable
                value={value}
                onChangeText={onChange}
              />
            ))}
          />
        </ModalInfoContainer>

        <ModalButtonsContainer>
          <LargeButton 
            textButton="Limpar" 
            primary 
            onPress={handleSubmit(handleCleanRoom)} 
          />

          <LargeButton 
            textButton="Cancelar" 
            primary 
            onPress={() => setModalVisible(false)} 
          />
        </ModalButtonsContainer>

      </CustomModal>

      <Header name="Enzo Makenzy" />

      <Main>
        <ScreenTitle>
          Detalhes da Sala
        </ScreenTitle>

        <Line />

        <RoomNameText>
          Laboratório 3
        </RoomNameText>

        <InfoRoomContainer>
          <InfoRoomText>
            <InfoRoomText textStyle="medium">Capacidade: </InfoRoomText>
            30
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Status da limpeza: </InfoRoomText>
            30
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Localização: </InfoRoomText>
            Bloco A
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Última limpeza: </InfoRoomText>
            02/08/2025 às 12:00
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Último funcionário a limpar: </InfoRoomText>
            Enzo Makenzy
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Descrição: </InfoRoomText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.
          </InfoRoomText>

          <InfoRoomText>
            <InfoRoomText textStyle="medium">Observação da limpeza: </InfoRoomText>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.
          </InfoRoomText>
        </InfoRoomContainer>

        <LargeButton primary textButton="Marcar sala como limpa" onPress={() => setModalVisible(true)} />
      </Main>
    </Container>
  )
}