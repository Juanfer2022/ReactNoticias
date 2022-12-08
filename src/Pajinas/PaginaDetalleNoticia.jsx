import BuscadorNoticias from "../Componentes/BuscadorNoticias/BuscadorNoticias";

import Loading from "../Componentes/Loading/Loading";
import Noticias, { ListaNoticias } from "../Componentes/Noticias/Noticias";
import PaginadoDeNoticias from "../Componentes/PaginadoDeNoticias/PaginadoDeNoticias";
import { getListadoNoticias } from "../Servicios/noticias";
import "./PaginaBuscadorNoticias.css";
import { useEffect, useState } from "react";
import CantNoticias from "../Componentes/Noticias/CantNoticias";
import { useParams, useResolvedPath, useSearchParams } from "react-router-dom";

const PaginaDetalleNoticias = ()=> {
    const [noticia, setNoticia] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const {id}= useParams()

    useEffect(()=>{
        if(id){
            getNoticiaServicio();
        }
    },[])

    const getNoticiaServicio = async ()=>{
        setIsLoading(true);
        const notic = await getNoticiaServicio(id);
        setNoticia(notic)
        setIsLoading(false)
    }
    if(!noticia && !isLoading && id){
        return(
            <section className="container">
                La noticia no se encontro {id}
            </section>
        )
    }
    if(isLoading && !noticia) {
        return <Loading />
    }

    return (
        <section className="container">
            < Noticias noticias={noticia}/>
        </section>
    )
}

export default PaginaDetalleNoticias;