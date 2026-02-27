import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import Listasuspensa from '../listasuspensa';
import './formulario.css';


const Formulario = (props) => {
const times = [ 'Programação', 'Front-end', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'
]
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        console.log('Form foi submetido =>', nome, cargo, imagem, time);
    }

    return (
        <section className='formulario'>
         <form onSubmit={(evento) => aoSalvar(evento)}>
        <h2>Preencha os dados do Usuário</h2>
     <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
     <CampoTexto  obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
      <CampoTexto  obrigatorio={true} label="Imagem" placeholder="Digite a URL da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
      <Listasuspensa obrigatorio={true} label="Time" itens={times} valor={time} aoAlterado={valor => setTime(valor)}/>
      <Botao >
        Criar Card
        </Botao>
    </form>
        </section>
    )
}

export default Formulario;