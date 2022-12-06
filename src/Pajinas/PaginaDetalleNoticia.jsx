import BuscadorNoticias from "../Componentes/BuscadorNoticias/BuscadorNoticias";

import Loading from "../Componentes/Loading/Loading";
import { ListaNoticias } from "../Componentes/Noticias/Noticias";
import PaginadoDeNoticias from "../Componentes/PaginadoDeNoticias/PaginadoDeNoticias";
import { getListadoNoticias } from "../Servicios/noticias";
import "./PaginaBuscadorNoticias.css";
import { useEffect, useState } from "react";
import CantNoticias from "../Componentes/Noticias/CantNoticias";
import { useParams, useSearchParams } from "react-router-dom";

const PaginaDetalleNoticias = ()=> {

    const {url}= useParams()
    return (
        <section className="container">
            Aca va el detalle de la pelicula {url}
        </section>
    )
}

export default PaginaDetalleNoticias;