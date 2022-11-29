
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import "./BuscarNoticias.css";

const BuscadorNoticias=() => {
  
  return (
    <Paper 
      component="form"
      sx={{ p: '2px 4px' ,display: 'flex', alignItems: 'center', width: 400, marginTop:2 , marginLeft: 44, marginBottom: 2 }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1, background: "lightblue" }}
        placeholder="Buscar Noticias"
         
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search"
      
      >
        <SearchIcon />
      </IconButton>
      
    </Paper>
  
  );
}
export default BuscadorNoticias;