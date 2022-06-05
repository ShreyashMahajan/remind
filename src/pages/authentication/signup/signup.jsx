import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from '../../../components/navbar/navbar';
import { useAuth } from '../../../context/authContext/authContext';
import '../signup/signup.css';

export const SignUp = () => {
    const [user, setUser] = useState({});
    const { signUp } = useAuth();

    const inputChangeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submit = (e) => {
        e.preventDefault();
        signUp(user);
    }

    return (
        <div className="signUp-container">
            <Navbar />
            <main className="main-container auth-main-container">
                <div className="form-wrapper">
                    <h2 className="form__heading ">Sign Up</h2>
                    <div className="form-main-container">
                        <div className="form-sub-container">
                            <form action="#" id="signUp" className="form-container signup-form-container" onSubmit={submit} >
                                <div className="form-data-container">
                                    <label htmlFor="firstname" className='input__label'>First Name</label>
                                    <input type="text" name="firstname" id="firstname" className="input-data" placeholder="First Name" required onChange={(e) => inputChangeHandler(e)} />
                                    <label htmlFor="lastname" className='input__label'>Last Name</label>
                                    <input type="text" name="lastname" id="lastname" className="input-data" placeholder="Last Name" required onChange={(e) => inputChangeHandler(e)} />
                                    <label htmlFor="email" className='input__label' >Email address</label>
                                    <input type="email" name="email" id="email" placeholder="enter email address" className="input-data" required onChange={(e) => inputChangeHandler(e)} />
                                    <label htmlFor="password" className='input__label'>Password</label>
                                    <input type="password" id="password" name='password' className="input-data" placeholder="enter password" required onChange={(e) => inputChangeHandler(e)} />
                                    <div className="user-info-cont">
                                        <div className="user-remember">
                                            <input type="checkbox" name="userRemember" id="userRemember" className=" input-user-remember" placeholder="enter password" />
                                            <span className="user-remember__heading"> I accept all terms and conditions</span>
                                        </div>
                                    </div>
                                    <button className="btn user-create-account" type="submit">Create New Account</button>
                                    <NavLink to='/login'>
                                        <p className="link-center">Already have an account</p>
                                    </NavLink>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </main>

        </div>
    )
}