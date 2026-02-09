import CampoTexto from '../CampoTexto/CampoTexto';
import './formulario.css';


const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados do Usuário</h2>
     <CampoTexto  label="Nome" placeholder="Digite seu nome"/>
     <CampoTexto  label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto  label="Imagem" placeholder="Digite a URL da imagem"/>
            </form>
        </section>
    )
}

export default Formulario;