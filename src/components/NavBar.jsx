import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', background: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                CineScope
            </Link>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', marginLeft: '15px' }}>
                Tendencias
            </Link>
            <Link to="/watchlist" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', marginLeft: '15px' }}>
                Mi Watchlist
            </Link>
        </nav>
    );
};

export default Navbar;