import { useContext } from "react";
import { MyContext } from "../hooks/context.hook";
import moon from "./img/moon.png";
import sun from "./img/sun.png";
import styles from "./index.scss";


export const ThemeBtn = ({ handleThemeChange }) => {
    const isDarkTheme = useContext(MyContext)
    return (
        <div className="theme-btn" onClick={handleThemeChange}>
            <img src={isDarkTheme ? sun : moon} alt="" />
        </div>
    )
}
