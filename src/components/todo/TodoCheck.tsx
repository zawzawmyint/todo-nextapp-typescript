"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { TodoFormProps } from "./form/TodoForm";
import { Todo, useTodosStore } from "@/app/_store/store";
import { useInitializeTodos } from "@/app/hooks/useInitializeTodos";

export function TodoCheck({ item }: TodoFormProps) {
  useInitializeTodos();
  const { updateTodo } = useTodosStore((state) => state);

  const handleCheckedChange = (checked: boolean) => {
    updateTodo({
      ...item,
      done: checked, // Use the checked state
    } as Todo);
  };

  return (
    <div className="flex items-center space-x-2">
      <label
        htmlFor={"done" + item?.id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Done
      </label>
      <Checkbox
        id={"done" + item?.id}
        checked={item?.done || false} // Ensure controlled component
        onCheckedChange={handleCheckedChange} // Use onCheckedChange
      />
    </div>
  );
}
