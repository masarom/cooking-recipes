import '../styles/layout/Hero.scss';

const Hero = () => {
  return (
    <section className='hero'>
      <h1 className='hero__title'>Otro Poquito</h1>
      <div className="hero__subtitle">
        <p className='hero__subtitle--item'>Recetas de cocina</p>
        <p className='hero__subtitle--item'>al alcance de tu mano</p>
      </div>
    </section>
  );
}

export default Hero;