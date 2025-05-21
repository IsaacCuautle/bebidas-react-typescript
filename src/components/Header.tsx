import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories); // Fetch categories from the store
  const categories = useAppStore((state) => state.categories); // Get categories from the store
  const searchRecipies = useAppStore((state) => state.searchRecipies); // Get categories from the store
  const showNotification = useAppStore((state) => state.showNotification);

  useEffect(() => {
    fetchCategories(); // Fetch categories when the component mounts
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar
    if (Object.values(searchFilters).includes("")) {
      showNotification({
        text: "Todos los campos deben ser llenados",
        error: false,
      });
      return;
    }

    // Consultar las recetas
    searchRecipies(searchFilters);
  };

  return (
    /* Header component with conditional styling based on the current route */
    <header className={isHome ? "headerImage" : "bg-slate-800"}>
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
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
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
                onChange={handleChange}
                value={searchFilters.ingredient}
              />
            </div>

            {/* Category selection */}
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categorias
              </label>
              <select
                id="category"
                name="category"
                className="rounded-lg p-3 focus:outline-none w-full bg-white"
                onChange={handleChange}
                value={searchFilters.category}
              >
                <option value="">-- Selecciona una categoria --</option>
                {categories.drinks.map((category) => (
                  <option
                    key={category.strCategory}
                    value={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
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
