import { CardContainer, UserInfoContainer, UserNameText, UserTypeText } from "./styles";

import UserAdminIcon from "@assets/user-admin.svg";
import UserStaffIcon from "@assets/profile.svg";

import { useTheme } from "styled-components/native";

export type UserCardProps = {
  userName: string;
  userType: "Administrador" | "Funcionario";
}

export function UserCard({ userName, userType }: UserCardProps) {
  const theme = useTheme();

  return (
    <CardContainer>
      <UserInfoContainer>
        <UserNameText>
          {userName}
        </UserNameText>

        <UserTypeText>
          {userType}
        </UserTypeText>
      </UserInfoContainer>

      {
        userType === "Administrador" ?
          <UserAdminIcon />
        :
          <UserStaffIcon fill={theme.COLORS.BLUE} />
      }
    </CardContainer>
  )
}