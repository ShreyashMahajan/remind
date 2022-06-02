import { Navbar } from '../../components/navbar/navbar';
import '../landingPage/landingPage.css';
import hero from '../../assets/images/hero.svg';

export const LandingPage = () => {
    return (
        <div className='landingPage-container'>
            <Navbar />
            <main className='mainbar landingPage-mainbar'>
                <img src={hero} className='hero__img' alt='hero' />
                <div className='hero-container'>
                    <h1 className='hero--title'>Save Your Task With Remind</h1>
                    <h2 className='hero--sub-title'>Start using remind <button className='btn btn--start'>Try Remind</button></h2>
                    <h2 className='hero--sub-title'> Already have an account <button className='btn'>Login</button> </h2>
                    <h3 className='hero--sub-title'>New to Remind <button className='btn'>Sign Up</button></h3>

                </div>
            </main>
        </div>
    )
}