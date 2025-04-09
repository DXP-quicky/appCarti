import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import ListaCarti from "./listacarti.js";
import Adaug from './adaug.js';


const App = () => {
  const [lista, setLista] = useState([]);

  const adaug = (carte) => {
    carte.id = lista.length + 1;
    setLista([...lista, carte]);
  }
  return (
    <Container>
      <h1>Carti pentru copii</h1>
      <ListaCarti listaCarti={lista} />
      <Adaug transmit={adaug} />
    </Container>
  );
}

export default App;