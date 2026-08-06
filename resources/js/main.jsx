import react from "react";
import reactDOM from "react-dom/client";
import App from "./app.jsx";

const root = reactDOM.createRoot(document.getElementById("app")).render(
    <react.StrictMode>
        <App />
    </react.StrictMode>,
);
