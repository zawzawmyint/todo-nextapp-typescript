"use client";

import { useEffect } from "react";
import { useTodosStore } from "../_store/store";

// Hook to initialize todos on the client side
export const useInitializeTodos = () => {
  const initializeTodos = useTodosStore((state) => state.initializeTodos);

  useEffect(() => {
    initializeTodos();
  }, [initializeTodos]);
};
