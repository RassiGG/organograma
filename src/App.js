import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario';
import { useState } from 'react';

function App() {
  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador);
  colaboradores.push(colaborador);
  setColaboradores([...colaboradores, colaborador]);
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

    </div>
  );
}

export default App;
