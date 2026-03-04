
import Colaborador from '../colaborador'
import './Time.css'
const Time = (props) => {
    const cores = { backgroundColor: props.corSecundaria }
    return (
        
        <section className='time' style={cores}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            {props.colaboradores && props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome}  cargo={colaborador.cargo}/>)}
            
        </section>

    )
}


export default Time