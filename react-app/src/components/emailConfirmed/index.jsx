import { useContext } from "react";
import { Button } from "../button";
import styles from "./index.scss";
import { MyContext } from "../hooks/context.hook";
import { Link } from "react-router-dom";

export const EmailConfirmed = ({ setIsShowModal }) => {
    const isDarkTheme = useContext(MyContext)
    return (
        <section className={isDarkTheme ? "email-confirmed_dark" : "email-confirmed"}>
            <div className="wrapper">

                <h2 className="email-confirmed__title">Registration Confirmation</h2>
                <div className="email-confirmed__content">
                    <p className="email-confirmed__text">Please, check your email and confirm your registration.</p>
                    <p className="email-confirmed__text">Didn't get the email?</p>
                    <p className="email-confirmed__text">Click
                        <button className={`btn_underline ${isDarkTheme ? "btn_underline_dark" : ""}`}><pre> 'Send again'</pre></button> to receive another one.
                    </p>
                    <Link to="/blog"><Button setIsShowModal={setIsShowModal}>Go to Home</Button></Link>
                </div>
            </div>
        </section>
    )
}