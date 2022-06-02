import { NavLink } from 'react-router-dom';
import { Navbar } from '../../../components/navbar/navbar';
import '../login/login.css';

export const Login = () => {
    return (
        <div className="login-container">
            <Navbar />
            <main className="main-container auth-main-container">
                <div className="form-wrapper">
                    <h2 className="form__heading"> Login </h2>
                    <div className="form-main-container">
                        <form action="#" id="login" className="form-container form--login"  >
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter email address" className="input-data" required />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="input-data" placeholder="Enter password" required />
                            <div className="user-info-cont">
                                <div className="user-remember">
                                    <input type="checkbox" name="userRemember" id="userRemember" className=" input-user-remember" />
                                    <span className="user-remember__heading">Remember me</span>
                                </div>
                                <NavLink to="/" ><span className="forgot-pass--link"> Forgot your
                                    Password? </span> </NavLink>
                            </div>
                            <button className="btn" type="submit">Login</button>
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