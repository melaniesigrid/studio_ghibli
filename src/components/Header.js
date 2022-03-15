import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/"><FontAwesomeIcon icon={faCoffee} /></Link>
      </nav>
    </header>
  );
}

export default Header;
