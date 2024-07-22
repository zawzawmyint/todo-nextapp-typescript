import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EllipsisIcon } from "lucide-react";
import TodoEdit from "./edit/TodoEdit";
import TodoDelete from "./delete/TodoDelete";
import { TodoFormProps } from "./form/TodoForm";

export function TodoPopover({ item }: TodoFormProps) {
  if (!item?.id) {
    return null; // or some fallback UI
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <EllipsisIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32">
        <TodoEdit item={item} />
        <TodoDelete id={item.id} />
      </PopoverContent>
    </Popover>
  );
}
