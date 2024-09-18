import { Icons } from "./icons";

export const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 h-screen w-full bg-white flex items-center justify-center">
      <Icons.spinner className="size-6 animate-spin text-gray-400" />
    </div>
  );
};
