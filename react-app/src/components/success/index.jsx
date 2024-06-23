import { Button } from "../button";
import styles from "./index.scss";

export const Success = ({ setPage, setIsShowModal}) => {

    return (
        <section className="success">
            <div className="wrapper">
                <div className="success-container">
                    <h2 className="success__title">Success</h2>
                    <div className="success__content">
                        <p className="success__text">Email confirmed.</p>
                        <p className="success__text">You are now signed in!</p>
                        <Button setPage={setPage} setIsShowModal={setIsShowModal}>Go to Home</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}


