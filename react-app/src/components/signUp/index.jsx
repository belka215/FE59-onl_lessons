import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button";
import { useState } from "react";
import { signUpMiddlewareAction } from "../../actions";
import styles from "./index.scss";

export const SignUp = ({ setIsShowModal }) => {
    const isDarkTheme = useSelector(state => state.isDarkTheme);
    const user = useSelector((state) => state.user);
    const [values, setValues] = useState({});
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChangeText = (event, field) => {
        setValues((prevState) => ({ ...prevState, [field]: event.target.value }))
    }

    console.log(user)

    const handleSignUp = () => {
        if (values.password?.length >= 8 && values.login && values.email) {
            if (values.password === values.confirmPassword) {
                dispatch(signUpMiddlewareAction(values));
                navigate("/email-confirmed");
            } else {
                setError("Passwords don't match!")
            }
        } else {
            setError("Password must be at least 8 symbols")
        }

    }

    return (
        <section className={isDarkTheme ? "sign-up_dark" : "sign-up"}>
            <div className="wrapper">
                <Link to="/blog/all" className={`btn_underline ${isDarkTheme ? "btn_underline_dark" : ""}`}>Back to home</Link>
                <h2 className="sign-up__title">Sign Up</h2>
                <div className="sign-up__container">
                    <div className="sign-up__form">
                        <label htmlFor="login" className={`label ${isDarkTheme ? "label_dark" : ""}`}><b>Login</b></label>
                        <input
                            type="text"
                            placeholder="Enter login"
                            name="login"
                            className={`input ${isDarkTheme ? "input_dark" : ""}`}
                            onChange={(event) => handleChangeText(event, 'login')}
                            required
                        />
                        <label htmlFor="email" className={`label ${isDarkTheme ? "label_dark" : ""}`}><b>Email</b></label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            className={`input ${isDarkTheme ? "input_dark" : ""}`}
                            onChange={(event) => handleChangeText(event, 'email')}
                            required
                        />
                        <label htmlFor="psw" className={`label ${isDarkTheme ? "label_dark" : ""}`}><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            className={`input ${isDarkTheme ? "input_dark" : ""} ${error ? 'error' : ''}`}
                            onChange={(event) => handleChangeText(event, 'password')}
                            required
                        />
                        <label htmlFor="psw" className={`label ${isDarkTheme ? "label_dark" : ""}`}><b>Confirm Password</b></label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="psw"
                            className={`input ${isDarkTheme ? "input_dark" : ""} ${error === "Passwords don't match!" ? 'error' : ''}`}
                            onChange={(event) => handleChangeText(event, 'confirmPassword')}
                            required
                        />
                        {error}
                        <div onClick={handleSignUp}><Button>Sign Up</Button></div>
                        <div className="sign-up-container">
                            <p className={isDarkTheme ? "text_dark" : ''}>Already have an account?
                                <Link to="/sign-in" className={`btn_underline ${isDarkTheme ? "btn_underline_dark" : ""}`}> Sign in</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
