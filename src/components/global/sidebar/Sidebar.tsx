"use client";
import Link from "next/link";
import React from "react";

import { useTodosStore } from "@/app/_store/store";
import { useInitializeTodos } from "@/app/hooks/useInitializeTodos";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BookAIcon, Group, PlayCircleIcon, WorkflowIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const linkItems = [
  {
    name: "WORK",
    link: "/",
    icon: <WorkflowIcon color="#AFAAFF" />, // Lighter purple
    count: 0,
  },
  {
    name: "STUDY",
    link: "/study",
    icon: <BookAIcon color="#B0D8FF" />, // Lighter blue
    count: 0,
  },
  {
    name: "ENTERTAINMENT",
    link: "/entertainment",
    icon: <PlayCircleIcon color="#BDF7AC" />, // Lighter green
    count: 0,
  },
  {
    name: "FAMILY",
    link: "/family",
    icon: <Group color="#FFB2B2" />, // Lighter red
    count: 0,
  },
];

const Sidebar = () => {
  return (
    <div className=" w-full sm:basis-80 flex flex-wrap gap-1 flex-row sm:flex-col max-h-56 sticky top-16 sm:top-20 bg-white">
      {linkItems.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;

interface SidebarItemProps {
  item: {
    name: string;
    link: string;
    icon: React.ReactNode;
    count?: number;
  };
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  useInitializeTodos();
  const pathname = usePathname();

  const todos = useTodosStore((state) => state.todos);

  const workTotal = todos.filter((todo) => todo.type === "work");
  const studyTotal = todos.filter((todo) => todo.type === "study");
  const entertainTotal = todos.filter((todo) => todo.type === "entertainment");
  const familyTotal = todos.filter((todo) => todo.type === "family");

  const formattedItem = {
    ...item,
    count:
      item.link === "/"
        ? workTotal.length
        : item.link === "/study"
        ? studyTotal.length
        : item.link === "/entertainment"
        ? entertainTotal.length
        : familyTotal.length,
  };
  return (
    <NavigationMenu className="w-full mb-3">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={formattedItem.link} legacyBehavior passHref>
            <NavigationMenuLink
              active={formattedItem.link === pathname}
              className={navigationMenuTriggerStyle()}
            >
              <div className="flex  gap-2 items-center w-full ">
                <div>{formattedItem.icon}</div>
                <p>{formattedItem.name}</p>
                <p>( {formattedItem.count} )</p>
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
