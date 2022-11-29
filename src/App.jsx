import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Error404 from "./Errores/404";
import PajinaBuscarNoticias from './Pajinas/PajinaBuscarNoticias';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PajinaBuscarNoticias />,
    errorElement: <Error404/>
  },
]);
function App() {
  return (
    <div>
     
     <RouterProvider router={router} />
    </div>
  );
}
export default App;


/*import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Error404 from "./Errores/404";
import PaginaBuscador from "./paginas/PaginaBuscador";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaBuscador/>,
    errorElement: <Error404/>
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App*/
