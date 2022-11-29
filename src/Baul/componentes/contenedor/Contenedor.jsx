import React from 'react'
import { Container, CssBaseline, Box } from "@mui/material";

const Contenedor = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </React.Fragment>
  );
};
export default Contenedor;
