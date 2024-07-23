import { create } from "zustand";

export interface Todo {
  id: number;
  type: string;
  title: string;
  description: string;
  priority: "low" | "normal" | "high" | "urgent";
  done: boolean;
}

// State types
interface States {
  todos: Todo[];
  nextId: number;
  isHiddenDone: boolean;
}

// Action types
interface Actions {
  addTodo: (todo: Omit<Todo, "id">) => void;
  updateTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  initializeTodos: () => void;
  toggleVisibility: () => void;
}

// Utility functions for localStorage
const loadTodosFromLocalStorage = (): {
  todos: Todo[];
  nextId: number;
  isHiddenDone: boolean;
} => {
  if (typeof window === "undefined") {
    return { todos: [], nextId: 1, isHiddenDone: false };
  }
  const todos = localStorage.getItem("todos");
  const nextId = localStorage.getItem("nextId");
  const isHiddenDone = localStorage.getItem("isHiddenDone");
  return {
    todos: todos ? JSON.parse(todos) : [],
    nextId: nextId ? parseInt(nextId, 10) : 1,
    isHiddenDone: isHiddenDone === "true",
  };
};

const saveTodosToLocalStorage = (
  todos: Todo[],
  nextId: number,
  isHiddenDone: boolean
) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("nextId", nextId.toString());
    localStorage.setItem("isHiddenDone", isHiddenDone.toString());
  }
};

// Zustand store
export const useTodosStore = create<States & Actions>((set) => ({
  todos: [],
  nextId: 1,
  isHiddenDone: false,

  addTodo: (todo) =>
    set((state) => {
      const newTodo = { ...todo, id: state.nextId };
      const updatedTodos = [...state.todos, newTodo];
      saveTodosToLocalStorage(
        updatedTodos,
        state.nextId + 1,
        state.isHiddenDone
      );
      return {
        todos: updatedTodos,
        nextId: state.nextId + 1,
      };
    }),

  updateTodo: (updatedTodo) =>
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      saveTodosToLocalStorage(updatedTodos, state.nextId, state.isHiddenDone);
      return {
        todos: updatedTodos,
      };
    }),

  removeTodo: (id) =>
    set((state) => {
      const updatedTodos = state.todos.filter((item) => item.id !== id);
      saveTodosToLocalStorage(updatedTodos, state.nextId, state.isHiddenDone);
      return {
        todos: updatedTodos,
      };
    }),

  initializeTodos: () => {
    const { todos, nextId, isHiddenDone } = loadTodosFromLocalStorage();
    set({ todos, nextId, isHiddenDone });
  },

  toggleVisibility: () =>
    set((state) => {
      const newVisibility = !state.isHiddenDone;
      saveTodosToLocalStorage(state.todos, state.nextId, newVisibility);
      return { isHiddenDone: newVisibility };
    }),
}));
