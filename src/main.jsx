
 import ReactDOM from "react-dom/client";
 import { RouterProvider } from "react-router-dom";
 import router from "./routes/Routes";
import "./index.css";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthContext";

<Toaster />
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
 <AuthProvider> <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider></AuthProvider>
);