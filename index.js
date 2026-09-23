import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <Home />},
            {path: "media", element: <Media />}
        ]
    }
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode >
        <RouterProvider router={router} />
    </StrictMode>
);