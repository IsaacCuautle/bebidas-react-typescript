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
- **Generación de recetas con IA**: genera recetas personalizadas usando inteligencia artificial (OpenRouter).
- **Animaciones y transiciones** para una mejor experiencia de usuario.

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

3. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API de OpenRouter:
   ```
   VITE_OPENROUTER_API_KEY=tu_clave_api
   ```

4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

# Imagenes del proyecto

<div
  class="imagenes"  
  style="
  display: flex;"
>
<img 
  style="
    width: 500px; 
    heigth: 600px; "
  src='https://github.com/user-attachments/assets/5f68a9d8-7fb1-434a-ad8a-2186212e2695'
/>
<img 
  style="
    width: 250px; 
    heigth: 300px; "
  src='https://github.com/user-attachments/assets/cf291fee-03a3-48c2-b1db-32dd816acc7d'
/>
<img 
  style="
    width: 250px; 
    heigth: 350px; "
  src='https://github.com/user-attachments/assets/d1162ff7-8e16-4eeb-bec4-1ca724c22321' 
/>
</div>

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
- [OpenRouter AI](https://openrouter.ai/)
- [ai](https://sdk.vercel.ai/)

## API

La app consume la [CocktailDB API](https://www.thecocktaildb.com/api.php) para obtener las recetas y categorías, y utiliza OpenRouter para la generación de recetas con IA.
