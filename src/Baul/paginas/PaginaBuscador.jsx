import { Container } from "@mui/material";
import { useEffect, useState } from "react";

import Buscador from "../componentes/Buscador/Buscador";
import Loading from "../componentes/Loading/Loading";
import Paginador from "../componentes/Paginador/Paginador";
import Pelicula, { ListarPeliculas } from "../componentes/Peliculas/Pelicula";
import { getListadoPeliculas } from "../Servicios/peliculas";

const PaginaBuscador = () => {
  const [peliculas, setpeliculas] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cantidadPaginas, setCantidadPaginas] = useState(1);
  const [paginaActual, setPaginaActual] = useState(1);

  const onBuscar = async (criterioBusqueda) => {
    setIsLoading(true);
    const { Search: pelis, totalResults } = await getListadoPeliculas(
      criterioBusqueda, paginaActual
    );

    setpeliculas(pelis);
    setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
    setIsLoading(false);

    
    
  };

  if (isLoading) {
    return (
      <Container maxWidth="sm">
        <Loading />
      </Container>
    );
  }

  console.log(peliculas);

  return (
    <Container maxWidth="sm" >
      <Buscador onBuscar={onBuscar} />
      {isLoading && <Loading />}
      {peliculas && <ListarPeliculas peliculas={peliculas} />}
      {peliculas && <Paginador cantidadPaginas={cantidadPaginas}/>}
    </Container>
  );
};

export default PaginaBuscador;
