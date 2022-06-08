import '../sidebar/sidebar.css';
import { FaHome, FaRegStickyNote, FaFileArchive, FaTrashAlt } from "react-icons/fa";
import { FilterCard } from '../filterCard/filterCard';
import { Link, NavLink } from 'react-router-dom';

export const Sidebar = ({ showFilter }) => {

    return (
        <aside className='layout-sidebar sidebar-container'>
            <ul className='sidebar-list'>
                <NavLink to='/home' className='navlink' >
                    <li className='list--item'>
                        <FaHome className='list--icon' />
                        Home
                    </li>
                </NavLink>
                <NavLink to='/' className='navlink'>
                    <li className='list--item'>
                        <FaRegStickyNote className='list--icon' />
                        Landing
                    </li>
                </NavLink>
                <NavLink to='/archive' className='navlink'>
                    <li className='list--item'>
                        <FaFileArchive className='list--icon' />
                        Archive
                    </li>
                </NavLink>
                <NavLink to='/trash' className='navlink'>
                    <li className='list--item'>
                        <FaTrashAlt className='list--icon' />
                        Trash
                    </li>
                </NavLink>
            </ul>
            {
                showFilter &&
                <FilterCard />
            }
        </aside>
    )
}