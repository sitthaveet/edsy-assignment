import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar bg-white">
            <nav>
                <img src={logo} className='logo' alt="Logo" />
            </nav>
        </div>
    );
};

export default Navbar;
