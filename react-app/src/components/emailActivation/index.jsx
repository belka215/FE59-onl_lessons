import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "../button";
import { useEffect } from "react";
import { activationEmailMiddlewareAction } from "../../actions";

export const EmailActivation = ({setIsShowModal}) => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.isDarkTheme);
    const { uid, token } = useParams();

    useEffect(() => {
        dispatch(activationEmailMiddlewareAction(uid, token))
        console.log(uid, token)
    }, [])

    return (
        <section className={isDarkTheme ? "email-confirmed_dark" : "email-confirmed"}>
            <div className="wrapper">

                <h2 className="email-confirmed__title">Your registration is now completed!</h2>
                <div className="email-confirmed__content">
                    <p className="email-confirmed__text">Congratulations. Your account has been successfully activated.</p>
                    <Link to="/blog/all"><Button setIsShowModal={setIsShowModal}>Go to Home</Button></Link>
                </div>
            </div>
        </section>
    )
}