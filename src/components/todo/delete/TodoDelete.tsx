"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTodosStore } from "@/app/_store/store";
import { useToast } from "@/components/ui/use-toast";
import { useInitializeTodos } from "@/app/hooks/useInitializeTodos";

const TodoDelete = ({ id }: { id: number }) => {
  useInitializeTodos();
  const removeTodo = useTodosStore((state) => state.removeTodo);
  const { toast } = useToast();
  const handleDelete = () => {
    removeTodo(id);
    toast({
      title: "Todo: Deleted",
      description: "Todo Deteled successfully",
    });
  };

  return (
    <Button variant={"ghost"} className="w-full" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default TodoDelete;
