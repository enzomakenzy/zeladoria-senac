import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export function useFocusScreen(callback: () => void) {
  useFocusEffect(
    useCallback(() => {
      callback();
    }, [])
  )
}