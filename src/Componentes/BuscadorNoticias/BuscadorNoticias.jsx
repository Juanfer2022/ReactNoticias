import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./BuscarNoticias.css";

const BuscadorNoticias = ({ onBuscarNoticias }) => {
  const [criterioBusqueda, setCriterioBusqueda] = useState("");

  const longit = criterioBusqueda  
    return (
      longit.length > 2?
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        marginTop: 2,
        marginLeft: 44,
        marginBottom: 2,
      }}
    >
      
      <InputBase
         sx={{ ml: 1, flex: 1, background: "#e3ebee"  }}
        placeholder="Buscar Noticias"
        onChange={(e) => {
          setCriterioBusqueda(e.target.value);
          
        }}
      />
     
      <IconButton
        type="button"
       sx={{ p: "10px" ,background:'lightblue' }}
        aria-label="search"
        onClick={() => {
          onBuscarNoticias(criterioBusqueda);
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  : <Paper
  component="form"
  sx={{
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginTop: 2,
    marginLeft: 44,
    marginBottom: 2,
  }}
>
  
  <InputBase
     sx={{ ml: 1, flex: 1, background: "#e3ebee" }}
    placeholder="Buscar Noticias"
    autoFocus = {true}
    onChange={(e) => {
      setCriterioBusqueda(e.target.value);
      
    }}
  />
 
  <IconButton
    type="button"
   sx={{ p: "10px",pointerEvents:'none', cursor:'not:allowed', background:'#B5B2B2' }}
    aria-label="search"
    onClick={() => {
      onBuscarNoticias(criterioBusqueda);
    }}
  >
    <SearchIcon />
  </IconButton>
</Paper> );
};
export default BuscadorNoticias;
