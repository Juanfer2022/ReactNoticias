import "bulma/css/bulma.css";
import BuscadorNoticias from "../Componentes/BuscadorNoticias/BuscadorNoticias";
import Header from "../Componentes/header/Header";
import Loading from "../Componentes/Loading/Loading";
import Noticias from "../Componentes/Noticias/Noticias";

const PajinaBuscarNoticias = () => {
  return (
    <section>
      <Header />
      <BuscadorNoticias />
      <Loading/>
      <Noticias/>
    </section>
  );
};
export default PajinaBuscarNoticias;
