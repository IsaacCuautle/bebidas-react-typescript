import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

const FavoritesView = lazy(() => import("./views/FavoritesView"));
const GenerateView = lazy(() => import("./views/GenerateView"));
const IndexView = lazy(() => import("./views/IndexView"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback="Cargando...">
                <IndexView />
              </Suspense>
            }
            index
          />
          <Route
            path="/favoritos"
            element={
              <Suspense fallback="Cargando favoritos...">
                <FavoritesView />
              </Suspense>
            }
          />
          <Route
            path="/generar"
            element={
              <Suspense fallback="Cargando generar...">
                <GenerateView />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
