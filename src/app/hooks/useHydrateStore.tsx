"use client";
import { useEffect } from "react";
import { Todo, useTodosStore } from "@/app/_store/store";

export const useHydrateStore = () => {
  useEffect(() => {
    const { todos, nextId } = loadTodosFromLocalStorage();
    useTodosStore.setState({ todos, nextId });
  }, []);
};

const loadTodosFromLocalStorage = (): { todos: Todo[]; nextId: number } => {
  if (typeof window !== "undefined") {
    const todos = localStorage.getItem("todos");
    const nextId = localStorage.getItem("nextId");
    return {
      todos: todos ? JSON.parse(todos) : [],
      nextId: nextId ? parseInt(nextId, 10) : 1,
    };
  }
  return { todos: [], nextId: 1 };
};
