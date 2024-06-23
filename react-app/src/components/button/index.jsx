import styles from "./index.scss";

export const Button = ({ setPage, setIsShowModal, values, children }) => {
    const handleSignIn = () => {
        console.log("Отправляем все данные в values на сервер: ", values)
    }

    function handleClick() {
        if (children === 'Sign In') {
            setIsShowModal(true);
            handleSignIn();
        } else if (children === 'Go to Home') {
            setPage('allPosts');
            setIsShowModal(false);
        }
    }

    return (
        <button className="button" onClick={handleClick}>{children}</button>
    )
}