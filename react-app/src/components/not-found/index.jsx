import notFound from "./img/error-page.jpg";
import styles from "./index.scss";

export const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__title">Looks like this page doesn't exist..</h1>
                <img src={notFound} />
            </div>
        </div>
    )
}