import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useMaranatha from "../hooks/useMaranatha";
import Biblia from "../pages/Biblia";
import Inicio from "../pages/Inicio";
import Predicas from "../pages/Predicas";

export default function PublicLayout() {
  const { page, setPage } = useMaranatha();

  const pages = [
    <Inicio key="inicio" />,
    <Predicas key="predicas" />,
    <Biblia key="biblia" />,
  ];

  return (
    <div className="min-h-screen bg-mauve-92 ">
      <Header />
      <div>{pages[page]}</div>
      <Footer />
    </div>
  );
}
