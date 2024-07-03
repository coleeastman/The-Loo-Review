import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h2>
                        The<span className="blue">Loo</span>Review
                    </h2>
                </Link>
                <nav>
                    <Link to="/about"><p>About</p></Link>
                    {/* <Link to="/help"><p>Help</p></Link> */}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
