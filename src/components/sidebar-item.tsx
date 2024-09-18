import { LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

type Props = {
  path: string;
  Icon: LucideIcon;
  name: string;
};

export const SidebarItem = ({ path, Icon, name }: Props) => {
  const { pathname } = useLocation();

  return (
    <li className="flex items-center w-full relative">
      {pathname === path && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600 rounded-tr-md rounded-br-md" />
      )}
      <Link
        to={path}
        className={cn(
          "flex items-center w-full hover:bg-[#e0e2e3] transition-all duration-150 ease-out px-6 py-3 text-sm",
          pathname === path ? "text-indigo-600" : "text-slate-500"
        )}
      >
        <Icon className="mr-4 size-5" />
        <span>{name}</span>
      </Link>
    </li>
  );
};
