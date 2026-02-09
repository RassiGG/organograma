import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholdermodificado = `${props.placeholder}...`
        return (
            <div className="campo-texto">
                <label>{props.label}</label>
                <input placeholder={placeholdermodificado} />
        
            </div>

        )
}


export default CampoTexto;