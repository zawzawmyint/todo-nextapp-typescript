import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TodoFrom, { TodoFormProps } from "../form/TodoForm";

const TodoEdit = ({ item }: TodoFormProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"ghost"} className="w-full">
            Edit ...
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
          </DialogHeader>
          <TodoFrom item={item} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TodoEdit;
