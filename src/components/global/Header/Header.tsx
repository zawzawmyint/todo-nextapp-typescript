"use client";
import { useTodosStore } from "@/app/_store/store";
import { TodoAdd } from "@/components/todo/add/TodoAdd";
import Link from "next/link";

const Header = () => {
  const todos = useTodosStore((state) => state.todos);
  return (
    <div className="sticky top-0 left-0 z-40">
      <nav className="max-w-6xl mx-auto p-3 flex flex-wrap justify-between items-center sticky top-0 left-0 z-40 bg-white ">
        <Link href={"/"}>
          <p className="font-semibold text-xl">TODOs - {todos.length}</p>
        </Link>
        <TodoAdd />
      </nav>
    </div>
  );
};

export default Header;
