import { create } from "zustand";

// Updated Todo interface with id
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
}

// Action types
interface Actions {
  addTodo: (todo: Omit<Todo, "id">) => void;
  updateTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
}

// Utility functions for localStorage
// const loadTodosFromLocalStorage = (): { todos: Todo[]; nextId: number } => {
//   const todos = localStorage.getItem("todos");
//   const nextId = localStorage.getItem("nextId");
//   return {
//     todos: todos ? JSON.parse(todos) : [],
//     nextId: nextId ? parseInt(nextId, 10) : 1,
//   };
// };

// const saveTodosToLocalStorage = (todos: Todo[], nextId: number) => {
//   localStorage.setItem("todos", JSON.stringify(todos));
//   localStorage.setItem("nextId", nextId.toString());
// };

// Zustand store
export const useTodosStore = create<States & Actions>((set) => {
  // Load initial state from localStorage
  // const { todos, nextId } = loadTodosFromLocalStorage();
  return {
    todos: [],
    nextId: 1, // Initialize the next ID

    addTodo: (todo) =>
      set((state) => {
        const newTodo = { ...todo, id: state.nextId };
        const updatedTodos = [...state.todos, newTodo];
        // saveTodosToLocalStorage(updatedTodos, state.nextId + 1);
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
        // saveTodosToLocalStorage(updatedTodos, state.nextId);
        return {
          todos: updatedTodos,
        };
      }),

    removeTodo: (id) =>
      set((state) => {
        const updatedTodos = state.todos.filter((item) => item.id !== id);
        // saveTodosToLocalStorage(updatedTodos, state.nextId);
        return {
          todos: updatedTodos,
        };
      }),
  };
});
