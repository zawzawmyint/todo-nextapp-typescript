"use client";
import { useTodosStore } from "@/app/_store/store";
import { useInitializeTodos } from "@/app/hooks/useInitializeTodos";
import { TodoAdd } from "@/components/todo/add/TodoAdd";
import Link from "next/link";

const Header = () => {
  useInitializeTodos();
  const { todos, isHiddenDone } = useTodosStore((state) => state);

  // calculate count of todos by done state
  const filterTodos = isHiddenDone
    ? todos.filter((todo) => todo.done === false)
    : todos;
  return (
    <div className="sticky top-0 left-0 z-40">
      <nav className="max-w-6xl mx-auto p-3 flex flex-wrap justify-between items-center sticky top-0 left-0 z-40 bg-white ">
        <Link href={"/"}>
          <p className="font-semibold text-xl">TODOs - {filterTodos.length}</p>
        </Link>
        <TodoAdd />
      </nav>
    </div>
  );
};

export default Header;
