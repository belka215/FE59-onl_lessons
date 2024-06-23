import { Button } from "../button";
import styles from "./index.scss";

export const EmailConfirmed = ({ setPage, setIsShowModal }) => {
    return (
        <section className="email-confirmed">
            <div className="wrapper">

                <h2 className="email-confirmed__title">Registration Confirmation</h2>
                <div className="email-confirmed__content">
                    <p className="email-confirmed__text">Please, check your email and confirm your registration.</p>
                    <p className="email-confirmed__text">Didn't get the email?</p>
                    <p className="email-confirmed__text">Click 
                        <button className="btn_underline"><pre> 'Send again'</pre></button> to receive another one.
                    </p>
                    <Button setPage={setPage} setIsShowModal={setIsShowModal}>Go to Home</Button>
                </div>
            </div>
        </section>
    )
}