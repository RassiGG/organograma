import './Banner.css';
import imagemBanner from '../../../imagens/ORGANOGRAMA.png';

function Banner() {
    //JSX
    return (
        <header className="banner">
            <img src={imagemBanner} alt="Banner principal" />
        </header>
    );
}
export default Banner;