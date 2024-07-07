import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../button";
import styles from "./index.scss";

export const Success = ({ setPage, setIsShowModal }) => {
    const isDarkTheme = useSelector(state => state.isDarkTheme);

    return (
        <section className={`success ${isDarkTheme ? "success_dark" : ''}`}>
            <div className="wrapper">
                <div className="success-container">
                    <h2 className="success__title">Success</h2>
                    <div className="success__content">
                        <p className="success__text">Email confirmed.</p>
                        <p className="success__text">You are now signed in!</p>
                        <Link to="/blog">
                            <Button setIsShowModal={setIsShowModal}>Go to Home</Button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}




