import { Button } from "../button";
import styles from "./index.scss";

export const SignUp = ({ page, setPage, setIsShowModal }) => {
    return (
        <section className="sign-up">
            <div className="wrapper">
                <button className="btn_underline" onClick={() => setPage('allPosts')}>Back to home</button>
                <h2 className="sign-in__title">Sign Up</h2>
                <div className="sign-up__container">
                    <div className="sign-up__form">
                        <label htmlFor="login" className="label"><b>Login</b></label>
                        <input
                            type="text"
                            placeholder="Enter login"
                            name="login" className="input"
                            // onChange={handleChangeEmail}
                            required
                        />
                        <label htmlFor="email" className="label"><b>Email</b></label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="email" className="input"
                            // onChange={handleChangeEmail}
                            required
                        />
                        <label htmlFor="psw" className="label"><b>Password</b></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psw" className="input"
                            // onChange={handleChangePass}
                            required
                        />
                        <label htmlFor="psw" className="label"><b>Confirm Password</b></label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="psw" className="input"
                            // onChange={handleChangePass}
                            required
                        />
                        <Button
                            setPage={setPage}
                            setIsShowModal={setIsShowModal}
                        >Sign Up</Button>
                        <div className="sign-up-container">
                            <p>Already have an account? <button onClick={() => setPage('signIn')} href="#" className="btn_underline">Sign in</button>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
