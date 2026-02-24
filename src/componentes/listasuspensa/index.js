import './listasuspensa.css';
const Listasuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.required} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
 }

 export default Listasuspensa;


 