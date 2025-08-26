import { UserDTO } from "@dtos/UserDTO";
import { createContext, ReactNode } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
}

export type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider value={{
      user: {
        id: "1",
        username: "senac",
        email: "",
        is_staff: true,
        is_superuser: true
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}