import { useContext } from "react";

import { AuthContext } from "@contexts/AuthController";

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}