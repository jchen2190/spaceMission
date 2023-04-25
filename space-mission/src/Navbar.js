import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="col-md-6">
            <Link to="spaceMission/mission">Mission</Link>
            <Link to="spaceMission/gallery">Gallery</Link>
            <Link to="spaceMission/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;