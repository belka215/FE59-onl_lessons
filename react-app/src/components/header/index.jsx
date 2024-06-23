import { HeaderBtn } from "../headerBtn";
import { Burger } from "../burger";
import search from "../img/search.png";
import styles from "./index.scss";

export const Header = ({ setPage }) => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__left">
                    <Burger />
                    <HeaderBtn onClick={() => setPage("allPosts")}>Blog</HeaderBtn>
                </div>
                <div className="header__right">
                    <HeaderBtn>
                        Search
                        <img src={search} />
                    </HeaderBtn>
                    <HeaderBtn onClick={() => setPage("signIn")}>Sign In</HeaderBtn>
                </div>
            </div>
        </header>
    )
}