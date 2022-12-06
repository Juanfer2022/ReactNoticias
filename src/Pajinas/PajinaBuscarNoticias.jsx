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
import { useSearchParams } from "react-router-dom";

const PajinaBuscarNoticias = () => {
  const [noticias, setNoticias] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cantPaginas, setCantPaginas] = useState(1); 
  const [pagina, setPagina] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    console.log(pagina)
    if(searchParams.get('query')) {
      
        buscarNoticias(pagina)
    }
}, [searchParams, pagina]);
  
  const buscarNoticias =  async () => {
  
    setIsLoading(true);
    const noti = await getListadoNoticias(searchParams.get('query'), pagina);
  
    setNoticias(noti);
    setIsLoading(false);

    const cantidadDePagina = Math.ceil(parseInt(noti.totalResults) / 10);
    setCantPaginas(cantidadDePagina);
  }
  
  const onBuscarNoticias =  (criterioBusqueda) => {
    setSearchParams({query: criterioBusqueda})
   
  };

  const onCambioPagina = (pagina) => {
    
    setPagina(pagina);
  };

  return (
    <section className="container">
      <Header />
      <BuscadorNoticias onBuscarNoticias={onBuscarNoticias} />
      {isLoading && <Loading />}
      {noticias && <CantNoticias noticias={noticias} />}
      {noticias && <ListaNoticias noticias={noticias} />}
      {noticias && (
        <PaginadoDeNoticias
          cantPaginas={cantPaginas}
          onChange={onCambioPagina}
        />
      )}
    </section>
  );
};
export default PajinaBuscarNoticias;
