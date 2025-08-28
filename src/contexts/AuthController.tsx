import { createContext, ReactNode, useEffect, useState } from "react";

import { UserDTO } from "@dtos/UserDTO";

import { api } from "@services/api";

import { storageUserGet, storageUserSave, storageUserRemove } from "@storage/storageUser";
import { storageAuthTokenSave, storageAuthTokenGet, storageAuthTokenRemove } from "@storage/storageAuthToken";

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
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true);

  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    console.log(token)

    setUser(userData);
  }

  async function userAndTokenStorageSave(userData: UserDTO, token: string) {
    try {
      setIsLoadingUserStorageData(true);

      await storageUserSave(userData);
      await storageAuthTokenSave(token);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signIn(username: string, password: string) {
    try {
      setIsLoadingUserStorageData(true);
      const { data } = await api.post("/accounts/login/", { username: username, password });
      console.log(data);

      if (data) {
        await userAndTokenStorageSave(data.user_data, data.token);
        userAndTokenUpdate(data.user_data, data.token);
      } 
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }

  async function signOut() {
    try {
      setUser({} as UserDTO);
      await storageUserRemove();
      await storageAuthTokenRemove();
      delete api.defaults.headers.common["Authorization"];
    } catch (error) {
      throw error;
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorageData(true);

      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();
  
      if (token && userLogged) {
        userAndTokenUpdate(userLogged, token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
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