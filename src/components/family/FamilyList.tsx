"use client";
import { useTodosStore } from "@/app/_store/store";
import NoTodos from "../generic/no-todos";
import { TodoCard } from "../todo/TodoCard";
import { priorityOrder } from "../work/WorkList";

const FamilyList = () => {
  // useHydrateStore();
  const { todos } = useTodosStore((state) => state);

  // Filter todos by type and sort by priority
  const formattedTodos = todos
    .filter((todo) => todo.type === "family") // Filter by type
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

export default FamilyList;
