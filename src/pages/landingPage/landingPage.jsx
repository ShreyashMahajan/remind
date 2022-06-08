import { Navbar } from '../../components/navbar/navbar';
import '../landingPage/landingPage.css';
import hero from '../../assets/images/hero.svg';
import { NavLink } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div className='landingPage-container'>
            <Navbar />
            <main className='mainbar landingPage-mainbar'>
                <img src={hero} className='hero__img' alt='hero' />
                <div className='hero-container'>
                    <h1 className='hero--title'>Save Your Task With Remind</h1>
                    <h2 className='hero--sub-title'>Start using remind
                        <NavLink to='/home'><button className='btn btn--start'>Try Remind</button></NavLink>
                    </h2>
                    <h2 className='hero--sub-title'> Already have an account
                        <NavLink to='/login'> <button className='btn'>Login</button></NavLink>
                    </h2>
                    <h3 className='hero--sub-title'>New to Remind
                        <NavLink to='/signup'> <button className='btn'>Sign Up</button></NavLink>
                    </h3>

                </div>
            </main>
        </div>
    )
}