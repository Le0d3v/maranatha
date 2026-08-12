import React from "react";
import { Link } from "react-router-dom";
import BackgroundAnimado from "../components/auth/BackgroundAnimado";
import LoginForm from "../components/auth/LoginForm";

export default function Login() {
  return (
    <>
      <div className="bg-mauve-950 h-screen md:flex">
        <div className="relative w-full  overflow-hidden bg-[#090708] flex items-center justify-center px-8 py-10 md:py-12">
          <BackgroundAnimado />

          <div className="relative z-10 w-full max-w-md">
            <Link to="/">
              <img
                src="/img/logo_completo.png"
                alt="Logo"
                className="md:w-86 w-44 mx-auto mb-4 md:mb-8"
              />
            </Link>

            <p className="text-center text-gray-400 mb-5 md:mb-10 leading-relaxed text-xs md:text-sm">
              Accede al sistema administrativo de la Iglesia Cristiana
              Maranatha.
            </p>

            <div className="rounded-2xl border border-yellow-700/20 bg-white/5 backdrop-blur-xl shadow-2xl p-8">
              <h1 className="text-4xl font-bold text-white text-center mb-2">
                Bienvenido
              </h1>

              <p className="text-center text-gray-400 text-sm mb-8">
                Inicia sesión para continuar
              </p>

              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
