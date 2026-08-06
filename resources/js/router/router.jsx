import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Biblia from "../components/Biblia";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "/biblia",
                element: <Biblia />,
            },
        ],
    },
]);

export default router;
