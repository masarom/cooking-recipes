import '../styles/layout/AboutUs.scss';
import BtnGoBack from './buttons/ButtonGoBack';

const AboutUs = () => {
  return (
    <section className='aboutUs'>
      <article className='aboutUs__article'>
        <div className='aboutUs__article--container'>
          <h2 className='aboutUs__article--title'>Quiénes somos</h2>
          <div className='aboutUs__article--image'></div>
        </div>
        <div className='aboutUs__article--text'>
          <p className='paragraph'>
            Empecé a cocinar al lado de mi madre cuando era muy joven, por aquello de ayudarla los sábados porque nos
            juntábamos muchos a comer en casa. Para echar una mano me metí en la cocina con ella y me gustó.
          </p>
          <p className='paragraph'>
            Yo soy economista y trabajé como tal durante muchos años, pero cuando nacieron las niñas lo dejé. De mayor,
            mi suegra me enseñó recetas que a mi marido le gustaban, y de ahí poco a poco…
          </p>
          <p className='paragraph'>Mi cocina es sencilla, rápida, al alcance de todos, y con buenos ingredientes.</p>
          <p className='paragraph'>
            En este blog mi mano derecha es mi hija María, que es la que más me ha animado a hacerlo y la que lleva el
            soporte técnico. También hice el blog por mi hija Carmen, que se independizaba y no sabía cómo cocinar mis
            platos. Ella me decía: “mamá, este es tu legado”.
          </p>
          <p className='paragraph'>Y por ellas me metí en esta aventura. </p>
        </div>
      </article>
      <BtnGoBack />
    </section>
  );
};

export default AboutUs;
