import React, { useState } from "react";
import { Button } from "../button";
import styles from "./index.scss";

export const SignIn = ({ setIsShowModal }) => {
    const [values, setValues] = useState({});

    const handleChangeEmail = (event) => {
        setValues((prevState) => ({ ...prevState, email: event.target.value }))
    }

    const handleChangePass = (event) => {
        setValues((prevState) => ({ ...prevState, pass: event.target.value }))
    }

    return (
        <section className="sign-in">
            <div className="wrapper">
                <button className="home-btn">Back to home</button>
                <h2 className="sign-in__title">Sign In</h2>
                <div className="form-container">
                    <div className="sign-in__form">
                        <label htmlFor="email" className="label"><b>Email</b></label>
                        <input
                            type="text"
                            placeholder="Your Email"
                            name="email" className="input"
                            onChange={handleChangeEmail}
                            required
                        />
                        <label htmlFor="psw" className="label"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Your Password"
                            name="psw" className="input"
                            onChange={handleChangePass}
                            required
                        />
                        <a href="#">Forgot password?</a>
                        <Button
                            setIsShowModal={setIsShowModal}
                            values={values}
                        >Sign In</Button>
                        <div className="sign-up-container">
                            <p>Don't have an account? <a href="#">Sign up</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}