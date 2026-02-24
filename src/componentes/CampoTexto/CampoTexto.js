
import './CampoTexto.css';

const CampoTexto = (props) => {

 const placeholdermodificado = `${props.placeholder}...`



    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value);
    }


   

        return (
            <div className="campo-texto">
                <label>{props.label}</label>
                <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholdermodificado} />
        
            </div>

        )
}


export default CampoTexto;