import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time/index.js';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C2F7',
      corSecundaria: '#E8F8FF'
    },
     {
      nome: 'Front-end',
      corPrimaria: '#82E0AA',
      corSecundaria: '#F1F8E9'
    },
     {
      nome: 'Data Science',
      corPrimaria: '#A6D8F7',
      corSecundaria: '#F1F8E9'
    },
     {
      nome: 'Devops',
      corPrimaria: '#E0A242',
      corSecundaria: '#FFF5D9'
    },
     {
      nome: ' UX e Design',
      corPrimaria: '#82E0AA',
      corSecundaria: '#F1F8E9'
    },
     {
      nome: 'Mobile',
      corPrimaria: '#82E0AA',
      corSecundaria: '#F1F8E9'
    },
     {
      nome: 'Inovação e Gestão',
      corPrimaria: '#57C2F7',
      corSecundaria: '#E8F8FF'
    }

  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador);
  colaboradores.push(colaborador);
  setColaboradores([...colaboradores, colaborador]);
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        {times.map(time => <Time nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)}

        
    <Time nome="Programação" />
    <Time nome="Front-end" />
    <Time nome="Data Science" />
    <Time nome="Devops" />
    <Time nome="UX e Design" />
    <Time nome="Mobile" />
    <Time nome="Inovação e Gestão" />
    </div>
  );
}

export default App;
