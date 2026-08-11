import React from "react";
import useMaranatha from "../hooks/useMaranatha";
import { Link } from "react-router-dom";

export default function Header() {
  const { page, setPage } = useMaranatha();
  return (
    <>
      <div className="p-5">
        <div className="p-3 px-5 flex justify-between items-center bg-mauve-950 border-2 border-yellow-800 rounded-3xl ">
          <div>
            <button onClick={() => setPage(0)} className="cursor-pointer">
              <img src="/img/logo_completo.png" alt="Logo" className="w-42" />
            </button>
          </div>
          <div className="flex gap-5 text-sm">
            <Enlace page={0} setPage={setPage}>
              Inicio
            </Enlace>
            <Enlace page={1} setPage={setPage}>
              Predicas
            </Enlace>
            <Enlace page={1} setPage={setPage}>
              Predicas
            </Enlace>
            <Enlace page={1} setPage={setPage}>
              Predicas
            </Enlace>
            <Enlace page={1} setPage={setPage}>
              Predicas
            </Enlace>
          </div>
          <Link
            to="/auth"
            className="text-white hover:text-yellow-800  text-md cursor-pointer hover:underline transition-all duration-300"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </>
  );
}

const Enlace = ({ page, setPage, children }) => {
  return (
    <button
      onClick={() => setPage(page)}
      className="text-white hover:text-yellow-800  text-md cursor-pointer hover:underline transition-all duration-300"
    >
      {children}
    </button>
  );
};
