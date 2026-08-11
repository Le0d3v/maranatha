import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Biblia from "../pages/Biblia";
import Login from "../pages/Login";

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
  {
    path: "/auth",
    element: <Login />,
  },
]);

export default router;
