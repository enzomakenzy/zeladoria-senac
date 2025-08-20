import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  background-color: #00000079;
  justify-content: center;
  align-items: center;
`;

export const ModalBoxContainer = styled.View`
  width: 90%;
  padding: 10px 10px 20px 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE.TRANSPARENCE_100};
  border-radius: 6px;
  gap: 5px;
`;