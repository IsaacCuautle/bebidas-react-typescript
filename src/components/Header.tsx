import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);
  console.log(isHome);

  return (
    /* Header component with conditional styling based on the current route */
    <header className={isHome ? 'headerImage' : 'bg-slate-800'}>
      
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>

          <nav className="flex gap-4">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to={"/favoritos"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o Ingredientes
              </label>
              <input
                type="text"
                id="ingredient"
                name="ingredient"
                placeholder="Nombre o Ingredientes Ej. Vodka, Tequila Cafe"
                className="rounded-lg p-3 focus:outline-none w-full bg-white"
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="categories"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categorias
              </label>
              <select
                id="categories"
                name="categories"
                className="rounded-lg p-3 focus:outline-none w-full bg-white"
              >
                <option value="">-- Selecciona una categoria --</option>
              </select>
            </div>

            <input
              type="submit"
              value="Buscar Recetas"
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
}
