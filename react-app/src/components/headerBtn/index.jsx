import { postsData } from "../allPosts/data";
import styles from "./index.scss";

export const HeaderBtn = ({ onClick, children }) => {
    return (
        <button className="header-btn" onClick={onClick}>{children}</button>
    )
}