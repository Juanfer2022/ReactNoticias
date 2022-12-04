import * as React from "react";
import "./Noticias.css";
import { DateTime } from "luxon";
const Noticias = ({ noticia }) => {
 
  
  const dt=DateTime.fromISO(noticia.publishedAt).toFormat('dd/MM/yyyy') 
  const dt2=DateTime.fromISO(noticia.publishedAt).toFormat('tt')
  const pub = noticia.publishedAt
  console.log(dt)
  console.log(dt2)
  return (
    <div>
      <div>
        <div class="Imagenes-Proyectos">
          <div class="Individual-Imagenes-Proyectos">
            <div className="child-dos">
              <p>
                <span>
                  <h2> {noticia.title}</h2>
                </span>
                <span>
                  {noticia.description}
                </span>
                <span>
                  <h3>Publicado el: {dt} a las: {dt2} </h3>
                </span>
              </p>
              <img src={noticia.urlToImage} alt="inLaw Proyecto" className="cen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ListaNoticias = ({ noticias }) => {
  return noticias.articles.map((noticia) => {
    return <Noticias noticia={noticia} />;
  });
};

export default Noticias;
