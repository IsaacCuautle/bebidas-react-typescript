# Bebidas: Buscador de Recetas con React + TypeScript

Este proyecto es una aplicación web para buscar recetas de bebidas y cócteles, desarrollada con **React**, **TypeScript**, **Vite**, **Zustand** para manejo de estado global, y **TailwindCSS** para estilos. Permite buscar recetas por ingrediente y categoría, ver detalles de cada bebida, y guardar favoritas en el almacenamiento local del navegador.

## Características

- **Búsqueda de recetas** por ingrediente y categoría.
- **Listado de resultados** con tarjetas de bebidas.
- **Vista de detalles** de cada bebida en un modal.
- **Favoritos**: agrega o elimina recetas favoritas, persistiendo en localStorage.
- **Notificaciones** para acciones del usuario.
- **Diseño responsivo** con TailwindCSS.
- **Ruteo** con React Router DOM.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/bebidas-react-typescript.git
   cd bebidas-react-typescript
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

# Imagenes del proyecto

## Tecnologías

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Headless UI](https://headlessui.com/)
- [Heroicons](https://heroicons.com/)
- [Axios](https://axios-http.com/)

## API

La app consume la [CocktailDB API](https://www.thecocktaildb.com/api.php) para obtener las recetas y categorías.
