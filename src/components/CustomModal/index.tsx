import { Modal } from "react-native";
import { ModalContainer, ModalBoxContainer } from "./styles";

type Props = {
  modalVisible: boolean;
  children: React.ReactNode;
}

export function CustomModal({ modalVisible, children }: Props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      navigationBarTranslucent
      statusBarTranslucent
    >
      <ModalContainer>
        <ModalBoxContainer>
          {children}
        </ModalBoxContainer>
      </ModalContainer>
    </Modal>
  )
}