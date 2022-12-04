import { Pagination } from "@mui/material";
import "./PaginadoDeNoticias.css"
const PaginadoDeNoticias = () => {
  return (
    <section className="centr">
      {" "}
      <Pagination count={10} color="secondary" />
    </section>
  );
};
export default PaginadoDeNoticias;
