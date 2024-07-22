"use client";
import { useTodosStore } from "@/app/_store/store";
import NoTodos from "../generic/no-todos";
import { TodoCard } from "../todo/TodoCard";

// Define your priority order
export const priorityOrder: Record<string, number> = {
  low: 1,
  normal: 2,
  high: 3,
  urgent: 4,
};

const WorkList = () => {
  // useHydrateStore();

  const todos = useTodosStore((state) => state.todos);

  // Filter todos by type and sort by priority
  const formattedTodos = todos
    .filter((todo) => todo.type === "work") // Filter by type
    .sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]); // Sort by priority
  // .sort((a, b) => Number(b.done) - Number(a.done)); // Sort by done

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">
      {formattedTodos?.map((todo) => (
        <TodoCard key={todo.title + todo.id} item={todo} />
      ))}

      {formattedTodos.length === 0 && <NoTodos />}
    </div>
  );
};

export default WorkList;
