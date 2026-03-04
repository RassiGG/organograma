import './Colaborador.css'
const Colaborador = (props) => {
    return (
        <div className='colaborador'>

       
            <div>
            <img src='https://avatars.githubusercontent.com/u/143218345?s=400&u=c55960792cdbc0fdc5875318d2bdab03f98ebb50&v=4' alt='Leo Rassi'></img>
            </div>
          
            
            <div className='rodape'>

            <h4>{props.nome}</h4>
            <h5> {props.cargo}</h5>



            </div>




            </div>
            )
}
export default Colaborador