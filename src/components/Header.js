import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <form className='search__recipe'>
        <input type='text' name='search' placeholder='Buscar receta...' />
      </form>
      <nav className='menu'>
        <ul className='menu__list'>
          <li className='menu__list--item1'>
            <NavLink to='/'>Inicio</NavLink>
          </li>
          <li className='menu__list--item2'>
            <NavLink to='quienes-somos'>Quiénes somos</NavLink>
          </li>
          <li className='menu__list--item3'>
            <NavLink to='planificador-semanal'>Planificador semanal</NavLink>
          </li>
          <li className='menu__list--item4'>
            <NavLink to='nueva-receta'>Añadir nueva</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;