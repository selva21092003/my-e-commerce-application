import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/product-context/product-context.tsx";
import { AuthContextProvider } from "./context/auth-context/auth-context.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <ToastContainer/>
      <ProductProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
