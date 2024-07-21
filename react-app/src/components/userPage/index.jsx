import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../spinner";
import { getUserInfoMiddlewareAction } from "../../actions";
import { Link } from "react-router-dom";
import { Button } from "../button";
import styles from "./index.scss"

export const UserPage = ({ setIsShowModal }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.content);
    const isDarkTheme = useSelector(state => state.isDarkTheme);

    useEffect(() => {
        dispatch(getUserInfoMiddlewareAction(navigate));
    }, []);

    if (!user) {
        return <Spinner />
    }

    return (
        <section className={isDarkTheme ? "email-confirmed_dark" : "email-confirmed"}>
            <div className="wrapper">
                <h2 className="email-confirmed__title">{user.username}, this is your account</h2>
                <div className="email-confirmed__content">
                    <p className="email-confirmed__text">Your email is {user.email} </p>
                    <Link to="/blog/all"><Button setIsShowModal={setIsShowModal}>Go to Home</Button></Link>
                </div>
            </div>
        </section>
    )
}