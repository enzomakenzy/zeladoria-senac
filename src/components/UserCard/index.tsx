import { CardContainer, UserInfoContainer, UserNameText, UserTypeText } from "./styles";

import UserAdminIcon from "@assets/user-admin.svg";
import UserStaffIcon from "@assets/profile.svg";

import { useTheme } from "styled-components/native";
import { useEffect, useState } from "react";

type UserCardProps = {
  userName: string;
  isAdmin: boolean;
}

export function UserCard({ userName, isAdmin }: UserCardProps) {
  const [userTypeName, setUserTypeName] = useState<"Administrador" | "Colaborador">();

  const theme = useTheme();

  function showUserTypeName() {
    if (isAdmin) {
      setUserTypeName("Administrador")
    } else {
      setUserTypeName("Colaborador")
    }
  }

  useEffect(() => {
    showUserTypeName();
  }, []);

  return (
    <CardContainer>
      <UserInfoContainer>
        <UserNameText>
          {userName}
        </UserNameText>

        <UserTypeText>
          {userTypeName}
        </UserTypeText>
      </UserInfoContainer>

      {
        isAdmin ?
          <UserAdminIcon />
        :
          <UserStaffIcon fill={theme.COLORS.BLUE} />
      }
    </CardContainer>
  )
}