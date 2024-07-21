import { useDispatch } from "react-redux";
import styles from "./index.scss";
import { authorizationMiddlewareAction } from "../../actions";
import { useNavigate } from "react-router-dom";

export const Button = ({ setIsShowModal, values, children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignIn = () => {
        console.log("Отправляем все данные в values на сервер: ", values)
        dispatch(authorizationMiddlewareAction(values, navigate))
    }

    function handleClick() {
        if (children === 'Sign In') {
            setIsShowModal(true);
            handleSignIn();
        } else if (children === 'Go to Home') {
            setIsShowModal(false);
            navigate('/blog/all')
        }
    }

    return (
        <button className="button" onClick={handleClick}>{children}</button>
    )
}