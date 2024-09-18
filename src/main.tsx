import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import "./index.css";
import baseApi from "./api/baseApi.ts";
import UserProvider from "./context/user-context.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={baseApi}>
      <UserProvider>
        <Toaster />
        <App />
      </UserProvider>
    </ApiProvider>
  </StrictMode>
);
