import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (username: string, password: string) => Promise<void>;
}

export type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  async function signIn(username: string, password: string) {
    try {
      const { data } = await api.post("/accounts/login/", { username: username, password });
      
      if (data) {
        setUser({
          id: data.user_data.id, 
          username: data.username,
          email: data.user_data.email,
          is_staff: data.is_staff,
          is_superuser: data.is_superuser
        })
      }
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider value={{ user: user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}