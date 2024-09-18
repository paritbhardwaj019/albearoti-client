import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";

export default function DashboardLayout() {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="flex w-full bg-white text-slate-900 h-[calc(100vh-48px)]">
        <Sidebar />
        <main className="flex-grow overflow-y-auto p-4 bg-[#e6e8ea]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
