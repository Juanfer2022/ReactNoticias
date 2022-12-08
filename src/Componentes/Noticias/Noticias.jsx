import * as React from "react";
import "./stylo.css";
import { DateTime } from "luxon";
const Noticias = ({ noticia }) => {
 
  
  const dt=DateTime.fromISO(noticia.publishedAt).toFormat('dd/MM/yyyy') 
  const dt2=DateTime.fromISO(noticia.publishedAt).toFormat('tt')
  const pub = noticia.publishedAt
  const url =noticia.url
  console.log(noticia.url)

 
  
  return (
    <div id="container">
      <div className="product-details">
        <a href={noticia.url} target="_blank">
        <h1>
        {noticia.title}
        </h1>
        <h3>{noticia.source.name}</h3>
        <p className="information">
        {noticia.description}
        </p>

        <div>
          <p className="texCol">Publicado el: {dt} a las: {dt2}</p>
        </div>

       
        </a>
      </div>

      <div className="product-image">
        <img
          src={noticia.urlToImage === null ? './imageNoEncontrada.png' : noticia.urlToImage }
          alt=""
        />
      </div>
    </div>
   /* <div>
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
                <span>
               
                </span>
              </p>
              <img src={noticia.urlToImage === null ? './imageNoEncontrada.png' : noticia.urlToImage }  
              alt="inLaw Proyecto" className="cen" />
            </div>
          </div>
        </div>
      </div>
    </div>*/
  );
};

export const ListaNoticias = ({ noticias }) => {
  return noticias.articles.map((noticia, i) => {
    return <Noticias key={i} noticia={noticia} />;
  });
};

export default Noticias;
