import { Link } from 'react-router-dom';
import '../styles/layout/AboutUs.scss';

const AboutUs = () => {
  return (
    <section className='aboutUs'>
      <article className='aboutUs__article'>
        <h2 className="aboutUs__article--title">Quiénes somos</h2>
        <p className='aboutUs__article--text'>
          Empecé a cocinar al lado de mi madre cuando era muy joven, por aquello de ayudarla los sábados porque nos
          juntábamos muchos a comer en casa. Para echar una mano me metí en la cocina con ella y me gustó.
        </p>
        <p className='aboutUs__article--text'>
          Yo soy economista y trabajé como tal durante muchos años, pero cuando nacieron las niñas lo dejé.
        </p>
        <p className='aboutUs__article--text'>
          De mayor mi suegra me enseñó recetas que a mi marido le gustaban, y de ahí poco a poco…
        </p>
        <p className='aboutUs__article--text'>Mi cocina es sencilla, rápida, al alcance de todos, y con buenos ingredientes.</p>
        <p className='aboutUs__article--text'>
          En este blog mi mano derecha es mi hija María, que es la que más me ha animado a hacerlo y la que lleva el
          soporte técnico. También hice el blog por mi hija Carmen, que se independizaba y no sabía cómo cocinar mis
          platos. Ella me decía: “mamá, este es tu legado”.
        </p>
        <p className='aboutUs__article--text'>Y por ellas me metí en esta aventura.</p>
      </article>
      <Link to='/'><button className="aboutUs__link">Volver</button></Link>
    </section>
  );
};

export default AboutUs;
