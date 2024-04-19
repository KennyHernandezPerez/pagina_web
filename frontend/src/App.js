import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from './paginas/Inicio.js'; // Agregado .js
import Login from './paginas/Login.js'; // Agregado .js
import Peliculas from './paginas/Peliculas.js'; // Agregado .js
import Juegos from './paginas/Juegos.js'; // Agregado .js
import Anime from './paginas/Anime.js'; // Agregado .js
import Manga from './paginas/Manga.js'; // Agregado .js
import Descripcion from './paginas/Descripcion.js'; // Agregado .js
import Registro from './paginas/Registro.js'; // Agregado .js
import Trivia from './paginas/Trivia.js'; // Agregado .js
import Usuarios from './paginas/Dashboard/Dashboard_Usuarios.js'; // Agregado .js
import Perfil from './paginas/Perfil.js'; // Agregado .js
import DashListas from './paginas/Dashboard/Dashboard_Listas.js'; // Agregado .js
import Resultados from './paginas/Busqueda.js'; // Agregado .js
import ImageSearch from './paginas/ImagenBusqueda.js'; // Agregado .js

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Inicio />
    },
    {
      path: "/descripcion/:Categoria/:Id",
      element: <Descripcion />
    },
    {
      path: "/peliculas",
      element: <Peliculas />
    },
    {
      path: "/juegos",
      element: <Juegos />
    },
    {
      path: "/anime",
      element: <Anime />
    },
    {
      path: "/manga",
      element: <Manga />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/registro",
      element: <Registro />
    },
    {
      path: "/trivia",
      element: <Trivia />
    },
    {
      path: "/dashboard/usuarios",
      element: <Usuarios />
    },
    {
      path: "/dashboard/listas",
      element: <DashListas />
    },
    {
      path: "/perfil",
      element: <Perfil />
    },
    {
      path: "/resultados/:search",
      element: <Resultados />
    },
    {
      path: "/imagen",
      element: <ImageSearch/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
