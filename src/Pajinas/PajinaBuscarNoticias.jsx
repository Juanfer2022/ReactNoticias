import "bulma/css/bulma.css";
import BuscadorNoticias from "../Componentes/BuscadorNoticias/BuscadorNoticias";
import Header from "../Componentes/header/Header";
import Loading from "../Componentes/Loading/Loading";
import { ListaNoticias } from "../Componentes/Noticias/Noticias";
import PaginadoDeNoticias from "../Componentes/PaginadoDeNoticias/PaginadoDeNoticias";
import { getListadoNoticias } from "../Servicios/noticias";
import "./PaginaBuscadorNoticias.css";
import { useEffect, useState } from "react";
import CantNoticias from "../Componentes/Noticias/CantNoticias";

const PajinaBuscarNoticias = () => {
  const [noticias, setNoticias] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onBuscarNoticias = async (criterioBusqueda) => {
    setIsLoading(true);
    const noti = await getListadoNoticias(criterioBusqueda);
    setNoticias(noti);
    setIsLoading(false);
  };
  console.log(noticias);

 

  
  return (
    <section className="container">
      <Header />
      <BuscadorNoticias onBuscarNoticias={onBuscarNoticias} />
      { isLoading && <Loading /> }
      {noticias && <CantNoticias noticias={noticias}/>}
      {noticias && <ListaNoticias noticias = {noticias} />}
      {noticias &&< PaginadoDeNoticias />}
    </section>
  );
};
export default PajinaBuscarNoticias;
