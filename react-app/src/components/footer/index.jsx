import { useContext } from "react";
import styles from "./index.scss";
import { MyContext } from "../hooks/context.hook";

export const Footer = () => {
    const isDarkTheme = useContext(MyContext)
    return (
        <footer className={isDarkTheme ? "footer_dark" : "footer"}>
            <div className="footer-wrapper">
                <div className="footer__left">© 2022 BlogInfo</div>
                <div className="footer__right">All rights reserved</div>
            </div>
        </footer>
    )
}