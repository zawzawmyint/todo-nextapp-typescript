"use client";
import React from "react";
import { TodoCard } from "../todo/TodoCard";
import { useTodosStore } from "@/app/_store/store";
import { priorityOrder } from "@/app/page";
import { useHydrateStore } from "@/app/_store/useHydrateStore";
import NoTodos from "../generic/no-todos";

const StudyList = () => {
  // useHydrateStore();
  const { todos } = useTodosStore((state) => state);

  // Filter todos by type and sort by priority
  const formattedTodos = todos
    .filter((todo) => todo.type === "study") // Filter by type
    // .sort((a, b) => Number(b.done) - Number(a.done)); // Sort by priority
    .sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]); // Sort by priority

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">
      {formattedTodos?.map((todo) => (
        <TodoCard key={todo.title + todo.id} item={todo} />
      ))}
      {formattedTodos.length === 0 && <NoTodos />}
    </div>
  );
};

export default StudyList;
