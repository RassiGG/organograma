import CampoTexto from '../CampoTexto/CampoTexto';
import './formulario.css';


const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'

    ]
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