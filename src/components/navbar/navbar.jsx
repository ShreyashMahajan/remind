import { NavLink } from 'react-router-dom';
import '../navbar/navbar.css';

export const Navbar = () => {
    return (
        <nav className='layout-nav nav-container'>
            <NavLink to='/' className='link--item'>
                <h1 className='nav--title'> Remind</h1>
            </NavLink>
            <NavLink to='/' className='link--item'>
                <button className='btn btn--user'>Logout</button>
            </NavLink>
            <NavLink to='/login' className='link--item'>
                <button className='btn btn--user'>Login</button>
            </NavLink>
        </nav>
    )
}