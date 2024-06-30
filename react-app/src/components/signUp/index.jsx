import { useContext } from "react";
import { Button } from "../button";
import styles from "./index.scss";
import { MyContext } from "../hooks/context.hook";
import { Link } from "react-router-dom";

export const SignUp = ({ setIsShowModal }) => {
    const isDarkTheme = useContext(MyContext)
    return (
        <section className={isDarkTheme ? "sign-up_dark" : "sign-up"}>
            <div className="wrapper">
                <Link to="/blog" className={`btn_underline ${isDarkTheme ? "btn_underline_dark" : ""}`}>Back to home</Link>
                <h2 className="sign-up__title">Sign Up</h2>
                <div className="sign-up__container">
                    <div className="sign-up__form">
                        <label htmlFor="login" className={`label ${isDarkTheme ? "label_dark" : ""}`}><b>Login</b></label>
                        <input
                            type="text"
                            placeholder="Enter login"
                            name="login"
                            className={`input ${isDarkTheme ? "input_dark" : ""}`}
                            // onChange={handleChangeEmail}
                            required
                        />
                        <label htmlFor="email" className={`label ${isDarkTheme ? "label_dark" : ""}`}><b>Email</b></label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            className={`input ${isDarkTheme ? "input_dark" : ""}`}
                            // onChange={handleChangeEmail}
                            required
                        />
                        <label htmlFor="psw" className={`label ${isDarkTheme ? "label_dark" : ""}`}><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            className={`input ${isDarkTheme ? "input_dark" : ""}`}
                            // onChange={handleChangePass}
                            required
                        />
                        <label htmlFor="psw" className={`label ${isDarkTheme ? "label_dark" : ""}`}><b>Confirm Password</b></label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="psw"
                            className={`input ${isDarkTheme ? "input_dark" : ""}`}
                            // onChange={handleChangePass}
                            required
                        />
                        <Link to="/email-confirmed"><Button>Sign Up</Button></Link>
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
