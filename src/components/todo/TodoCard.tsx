import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TodoCheck } from "./TodoCheck";
import { TodoPopover } from "./TodoPopover";
import { TodoFormProps } from "./form/TodoForm";
import { cn } from "@/lib/utils";

export function TodoCard({ item }: TodoFormProps) {
  return (
    <Card className={cn("w-full bg-[#FFF9DE] ", { "opacity-50": item?.done })}>
      <CardHeader>
        <div className="flex flex-wrap justify-between items-center">
          <CardTitle
            className={cn(" ", {
              "line-through font-bold": item?.done,
            })}
          >
            {item?.title}
          </CardTitle>
          <TodoPopover item={item} />
        </div>
      </CardHeader>
      <CardContent>{item?.description}</CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between">
        <p className="text-sm ">Type : {item?.type}</p>
        <p className="text-sm font-semibold">Priority : {item?.priority}</p>
        <TodoCheck item={item} />
      </CardFooter>
    </Card>
  );
}
