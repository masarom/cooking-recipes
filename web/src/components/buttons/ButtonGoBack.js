import '../../styles/components/Buttons.scss';
import { Link } from "react-router-dom";

const ButtonGoBack = () => {
  return (
    <Link className='button__link' to='/'>
      <button className='button__link--btn'>Volver</button>
    </Link>
  );
}

export default ButtonGoBack;