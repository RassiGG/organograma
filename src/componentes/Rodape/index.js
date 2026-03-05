import './rodape.css'


const Rodape = (props) =>{
return (<footer className='footer'>
   <section>
    <ul>
        <a href='www.github.com/RassiGG' target='_blank'>
        <img src='' alt='Github Rassi' />
        </a>
    </ul>

    <ul>
        <a href='https://www.instagram.com/leorassinz/'>
        <img src='./ig.png' alt='instagram'/>
        </a>
    </ul>

    <section className='secaoimagem'>
        
        <ul>
            <img src='./logo.png' alt='logo'/>

        </ul>

    </section>


   </section>

</footer>)
}


export default Rodape
