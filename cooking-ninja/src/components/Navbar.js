import { Link } from 'react-router-dom';

//imported components
import Searchbar from './Searchbar';

//imported css file
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className='brand'>
                <h1>Cooking Bro</h1>
            </Link>
            <Searchbar/>
            <Link to="/create">Create Recipe</Link>
        </nav>
    </div>
  )
}
