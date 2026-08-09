import react from "react";
import reactDOM from "react-dom/client";
import App from "./app.jsx";
import { MaranathaProvider } from "./context/MaranathaProvider.jsx";

const root = reactDOM.createRoot(document.getElementById("app")).render(
    <react.StrictMode>
        <MaranathaProvider>
            <App />
        </MaranathaProvider>
    </react.StrictMode>,
);
