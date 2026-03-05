
import Colaborador from '../colaborador'
import './Time.css'
const Time = (props) => {
    const cores = { backgroundColor: props.corSecundaria }
    return (
        
        (props.colaboradores.length > 0) ? <section className='time' style={cores}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores && props.colaboradores.map(colaborador => <Colaborador cordefundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome}  cargo={colaborador.cargo} imagem={colaborador.imagem }/>)}
            </div>
        </section>
     :''   
    )
}


export default Time