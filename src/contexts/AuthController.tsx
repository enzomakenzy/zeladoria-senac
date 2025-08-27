import { createContext, ReactNode, useEffect, useState } from "react";

import { UserDTO } from "@dtos/UserDTO";

import { api } from "@services/api";

import { storageUserGet, storageUserSave, storageUserRemove } from "@storage/storageUser";
import { storageAuthTokenSave } from "@storage/storageAuthToken";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  async function storageUserAndToken(userData: UserDTO, token: string) {
    try {
      api.defaults.headers.common["Authorization"] = `Token ${token}`;

      await storageUserSave(userData);
      await storageAuthTokenSave(token);
      setUser(userData)
    } catch (error) {
      throw error;
    }
  }

  async function signIn(username: string, password: string) {
    try {
      const { data } = await api.post("/accounts/login/", { username: username, password });
      
      if (data) {
        storageUserAndToken(data.user_data, data.token);
      } 
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    try {
      setUser({} as UserDTO);
      await storageUserRemove();
    } catch (error) {
      throw error;
    }
  }

  async function loadUserData() {
    const userLogged = await storageUserGet();

    if (userLogged) {
      setUser(userLogged);
    }
  }

  useEffect(() => {
    loadUserData();
  }, [])

  return (
    <AuthContext.Provider value={{ user: user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}