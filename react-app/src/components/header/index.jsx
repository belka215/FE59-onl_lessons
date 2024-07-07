import { Link } from "react-router-dom";
import { ThemeBtn } from "../theme-btn";
import search from "../img/search.png";
import panda from "../img/panda.png";
import styles from "./index.scss";

export const Header = ({ handleInputSearch }) => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__left">
                    <Link to="/" className="header__left__logo">
                        <img src={panda} />
                    </Link>
                    <Link to="/blog/all" className="header-btn">
                        Blog
                    </Link>
                </div>
                <div className="header__right">
                    <div className="header__search">
                        <label htmlFor="search"><img src={search} /></label>
                        <input
                            id="search"
                            type="text"
                            className="header__search__input"
                            placeholder="Search"
                            onInput={handleInputSearch} />
                    </div>
                    <Link to="/sign-in" className="header-btn">
                        Sign In
                    </Link>
                    <ThemeBtn />
                </div>
            </div>
        </header>
    )
}