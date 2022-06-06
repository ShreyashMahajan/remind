import { NavLink } from 'react-router-dom';
import '../navbar/navbar.css';
import { useAuth } from '../../context/authContext/authContext.jsx';

export const Navbar = () => {
    const { isUserLoggedIn, logout } = useAuth();
    return (
        <nav className='layout-nav nav-container'>
            <NavLink to='/' className='link--item'>
                <h1 className='nav--title'> Remind</h1>
            </NavLink>

            {
                isUserLoggedIn ? <NavLink to='/' className='link--item'>
                    <button className='btn btn--user' onClick={() => logout()}>Logout</button>
                </NavLink> :
                    <NavLink to='/login' className='link--item'>
                        <button className='btn btn--user'>Login</button>
                    </NavLink>
            }
        </nav>
    )
}