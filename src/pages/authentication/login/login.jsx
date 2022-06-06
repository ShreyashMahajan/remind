import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from '../../../components/navbar/navbar';
import { useAuth } from '../../../context/authContext/authContext';
import '../login/login.css';

export const Login = () => {
    const [user, setUser] = useState({ email: 'admin@gmail.com', password: 'admin' });
    const { login } = useAuth();

    const inputChangeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submit = e => {
        e.preventDefault();
        login(user);
    }

    const guestHandler = (e) => {
        e.preventDefault();
        login({ email: 'admin@gmail.com', password: 'admin123' });
    }

    return (
        <div className="login-container">
            <Navbar />
            <main className="main-container auth-main-container">
                <div className="form-wrapper">
                    <h2 className="form__heading"> Login </h2>
                    <div className="form-main-container">
                        <form action="#" id="login" className="form-container form--login" onSubmit={submit} >
                            <label htmlFor="email" className='input__label'>Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter email address" className="input-data" required onChange={(e) => inputChangeHandler(e)} />
                            <label htmlFor="password" className='input__label'>Password</label>
                            <input type="password" id="password" name="password" className="input-data" placeholder="Enter password" required onChange={(e) => inputChangeHandler(e)} />
                            <div className="user-info-cont">
                                <div className="user-remember">
                                    <input type="checkbox" name="userRemember" id="userRemember" className=" input-user-remember" />
                                    <span className="user-remember__heading">Remember me</span>
                                </div>
                                <NavLink to="/" ><span className="forgot-pass--link"> Forgot your
                                    Password? </span> </NavLink>
                            </div>
                            <button className="btn" type="submit">Login</button>
                            <button className="btn" onClick={guestHandler}>Login as guest</button>
                            <NavLink to="/signup">
                                <p className="user-new-account">Create New Account</p>
                            </NavLink>
                        </form>
                    </div>
                </div>

            </main>

        </div>
    )
}