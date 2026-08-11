import React from "react";

export default function LoginForm() {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          Correo electrónico
        </label>

        <input
          id="email"
          type="email"
          placeholder="correo@ejemplo.com"
          className="w-full rounded-xl border border-yellow-700/20 bg-black/30 px-4 py-3 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-600/30 outline-none transition "
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-200 mb-2"
        >
          Contraseña
        </label>

        <input
          id="password"
          type="password"
          placeholder="••••••••••"
          className="
              w-full
              rounded-xl
              border
              border-yellow-700/20
              bg-black/30
              px-4
              py-3
              text-white
              placeholder:text-gray-500
              focus:border-yellow-500
              focus:ring-2
              focus:ring-yellow-600/30
              outline-none
              transition
            "
        />
      </div>

      <button
        type="submit"
        className="
            w-full
            rounded-xl
            bg-gradient-to-r
            from-yellow-700
            via-yellow-600
            to-yellow-700
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-xl
            hover:shadow-yellow-700/30
          "
      >
        Iniciar Sesión
      </button>
    </form>
  );
}
