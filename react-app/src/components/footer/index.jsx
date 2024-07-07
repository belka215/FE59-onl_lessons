import { useSelector } from "react-redux";
import styles from "./index.scss";

export const Footer = () => {
    const isDarkTheme = useSelector(state => state.isDarkTheme);
    
    return (
        <footer className={isDarkTheme ? "footer_dark" : "footer"}>
            <div className="footer-wrapper">
                <div className="footer__left">© 2022 BlogInfo</div>
                <div className="footer__right">All rights reserved</div>
            </div>
        </footer>
    )
}