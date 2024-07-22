import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";
import TodoForm from "../form/TodoForm";

export function TodoAdd() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"} className="rounded-full">
          <PlusIcon size={36} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add</DialogTitle>
        </DialogHeader>
        <TodoForm />
      </DialogContent>
    </Dialog>
  );
}
