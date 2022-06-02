import { NavLink } from 'react-router-dom';
import { Navbar } from '../../../components/navbar/navbar';
import '../signup/signup.css';

export const SignUp = () => {

    return (
        <div className="signUp-container">
            <Navbar />
            <main className="main-container auth-main-container">
                <div className="form-wrapper">
                    <h2 className="form__heading ">Sign Up</h2>
                    <div className="form-main-container">
                        <div className="form-sub-container">
                            <form action="#" id="signUp" className="form-container signup-form-container" >
                                <div className="form-data-container">
                                    <label htmlFor="name" className='input__label'>Name</label>
                                    <input type="text" name="name" id="name" className="input-data" placeholder="Name" />
                                    <label htmlFor="email" className='input__label' >Email address</label>
                                    <input type="email" name="email" id="email" placeholder="enter email address" className="input-data" />
                                    <label htmlFor="password" className='input__label'>Password</label>
                                    <input type="password" id="password" name='password' className="input-data" placeholder="enter password" />
                                    <label htmlFor="confirmPassword" className='input__label'>Confirm Password</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" className="input-data" placeholder="enter password again" />
                                </div>
                                <div className="form-data-container">
                                    <label htmlFor="contact" className='input__label'>Contact Number</label>
                                    <input type="number" name="contact" id="userContact" className="input-data" placeholder="contact number" />
                                    <div className="gender-info">
                                        <label htmlFor="gender" className='input__label'>Gender</label>
                                        <br />
                                        <input type="radio" name="gender" defaultValue="male" className="input-radio" />Male
                                        <input type="radio" name="gender" defaultValue="female" className="input-radio" />Female
                                        <input type="radio" name="gender" defaultValue="other" className="input-radio" />Other
                                    </div>
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