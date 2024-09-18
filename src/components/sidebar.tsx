import {
  ChartLine,
  FileChartLine,
  LayoutDashboard,
  LucideIcon,
  Power,
  ScrollText,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { useContext } from "react";
import { UserContext } from "../context/user-context";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

type Route = {
  path: string;
  Icon: LucideIcon;
  name: string;
};

const ROUTES: Route[] = [
  {
    path: "/dashboard",
    Icon: LayoutDashboard,
    name: "Dashboard",
  },
  {
    path: "/dashboard/blogs",
    Icon: ScrollText,
    name: "Blogs",
  },
  {
    path: "/dashboard/finances",
    Icon: ChartLine,
    name: "Finances",
  },
  {
    path: "/dashboard/pitches",
    Icon: FileChartLine,
    name: "Pitches",
  },
];

export const Sidebar = () => {
  const { setUser, setToken } = useContext(UserContext);
  const { pathname } = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser({
      _id: "",
      email: "",
      fullName: "",
    });

    setToken("");
  };

  return (
    <div className="h-full relative bg-[#F9FBFC] border-r-1 border-r-[#E1E6EC] text-slate-500 lg:min-w-[244px] lg:block lg:border-r">
      <ul className="w-full mt-10 hidden lg:block">
        {ROUTES.map((el, index) => (
          <SidebarItem key={index} {...el} />
        ))}

        <div className="absolute bottom-6 w-full">
          <button
            className="flex items-center w-full px-6 py-3 text-red-400 hover:bg-red-100 transition-all duration-150 ease-out"
            onClick={handleLogout}
          >
            <span className="mr-4">
              <Power className="size-5" />
            </span>
            <p className="font-medium text-sm">Logout</p>
          </button>
        </div>
      </ul>

      <ul className="lg:hidden fixed bottom-0 left-0 w-full flex justify-between bg-white border-t border-gray-300">
        {ROUTES.map((el, index) => (
          <Link
            key={index}
            className={cn(
              "flex-1 p-4 flex justify-center",
              el.path === pathname ? "bg-indigo-200" : ""
            )}
            to={el.path}
          >
            <el.Icon className="text-gray-500 size-5" />
          </Link>
        ))}
      </ul>
    </div>
  );
};
