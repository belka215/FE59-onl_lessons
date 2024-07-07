import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../button";
import styles from "./index.scss";

export const SignIn = ({ setIsShowModal }) => {
    const [values, setValues] = useState({});
    const isDarkTheme = useSelector(state => state.isDarkTheme);

    const handleChangeEmail = (event) => {
        setValues((prevState) => ({ ...prevState, email: event.target.value }))
    }

    const handleChangePass = (event) => {
        setValues((prevState) => ({ ...prevState, pass: event.target.value }))
    }

    return (
        <section className={isDarkTheme ? "sign-in_dark" : "sign-in"}>
            <div className="wrapper">
                <Link to="/blog" className={`btn_underline ${isDarkTheme ? "btn_underline_dark" : ""}`}>Back to home</Link>
                <h2 className="sign-in__title">Sign In</h2>
                <div className="form-container">
                    <div className="sign-in__form">
                        <label htmlFor="email" className={`label ${isDarkTheme ? "label_dark" : ""}`}><b>Email</b></label>
                        <input
                            className={`input ${isDarkTheme ? "input_dark" : ""}`}
                            type="text"
                            placeholder="Your Email"
                            name="email"
                            onChange={handleChangeEmail}
                            required
                        />
                        <label htmlFor="psw" className={`label ${isDarkTheme ? "label_dark" : ""}`}><b>Password</b></label>
                        <input
                            className={`input ${isDarkTheme ? "input_dark" : ""}`}
                            type="password"
                            placeholder="Your Password"
                            name="psw"
                            onChange={handleChangePass}
                            required
                        />
                        <button className={`btn_underline wid ${isDarkTheme ? "btn_underline_dark" : ""}`}>Forgot password?</button>
                        <Button
                            setIsShowModal={setIsShowModal}
                            values={values}
                        >
                            Sign In</Button>
                        <div className="sign-up-container">
                            <p className={isDarkTheme ? "text_dark" : ''}>Don't have an account?
                                <Link to="/sign-up" className={`btn_underline ${isDarkTheme ? "btn_underline_dark" : ""}`}> Sign up</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}