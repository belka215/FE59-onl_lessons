import styles from "./index.scss";

export const BurgerBtn = ({ isActive }) => {
    if (isActive) {
        return (
            <div className="container">
                <button className="burger active"></button>
            </div>
        )
    } else {
        return (
            <div className="container">
                <button className="burger"></button>
            </div>
        )
    }
};