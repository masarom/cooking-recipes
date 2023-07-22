import { NavLink } from 'react-router-dom';
import '../styles/layout/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <section className='footer__desc'>
          <p className='footer__desc--text'>
            La cocina más saludable al alcance de tu mano. Recetas sencillas con las que podrás sorprenderte de lo fácil
            que puede llegar a ser cocinar
          </p>
        </section>
        <section className='footer__nav'>
          <ul className='nav__list'>
            <div className='nav__list--container-one'>
              <li className='nav__list--item'>
                <NavLink to={'/'} className='nav__list--link' title='Inicio - Listado de recetas'>
                  Inicio
                </NavLink>
              </li>
              <li className='nav__list--item'>
                <NavLink to={'/quienes-somos'} className='nav__list--link' title='Quiénes somos'>
                  Quiénes somos
                </NavLink>
              </li>
              <li className='nav__list--item'>
                <NavLink to={'/planificador-semanal'} className='nav__list--link' title='Planificador semanal'>
                  Planificador Semanal
                </NavLink>
              </li>
              <li className='nav__list--item'>
                <NavLink to={'/nueva-receta'} className='nav__list--link' title='Añadir nueva receta'>
                  Añadir nueva
                </NavLink>
              </li>
            </div>
            <div className='nav__list--container'>
              <li className='nav__list--item'>
                <NavLink to={'/login'} className='nav__list--link' title='Zona privada'>
                  Zona privada
                </NavLink>
              </li>
              <li className='nav__list--item'>
                <NavLink to={'/contact'} className='nav__list--link'>
                  Contacto
                </NavLink>
              </li>
            </div>
          </ul>
        </section>
        <section className='footer__copy'>
          <NavLink to={'/'}
            title='Política de privacidad'
            className='footer__copy--link'
          >
            Política de privacidad
          </NavLink>
          <p>Otro Poquito &copy; 2023</p>
          <small>
            Creado por
            <NavLink to={'https://github.com/masarom'}
              target='_blank'
              title='Perfil de GitHub de María Sánchez'
              className='footer__copy--link'
            >
              @masarom
            </NavLink>
          </small>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
