import { useContext } from "react";
import { MyContext } from "../hooks/context.hook";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_THEME_ACTION } from "../../actions";
import moon from "./img/moon.png";
import sun from "./img/sun.png";
import styles from "./index.scss";



export const ThemeBtn = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.isDarkTheme);

    const handleThemeChange = () => {
        dispatch(CHANGE_THEME_ACTION)
    }

    return (
        <div className="theme-btn" onClick={handleThemeChange}>
            <img src={isDarkTheme ? sun : moon} alt="" />
        </div>
    )
}
