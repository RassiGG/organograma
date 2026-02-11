import './listasuspensa.css';
const listasuspensa = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <select>
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
 }

 export default listasuspensa;


 